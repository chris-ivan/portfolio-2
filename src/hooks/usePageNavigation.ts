import { useCallback } from "react";
import { FRAME_KEY } from "../interfaces/frame";
import { getViewportHeight, getViewportWidth } from "../utils/viewport";
import { NAVIGATING_ORDER_BY_LAYOUT } from "../static/frames";
import { navigateToFrame } from "../utils/navigation";

const PAGE_SIZE = NAVIGATING_ORDER_BY_LAYOUT.length;

const getClosestsPage = () => {
  const pages = NAVIGATING_ORDER_BY_LAYOUT.map((page) =>
    document.getElementById(page)
  );

  const viewportWidth = getViewportWidth();
  const viewportHeight = getViewportHeight();
  const viewportCenterX = viewportWidth / 2;
  const viewportCenterY = viewportHeight / 2;

  const positions = pages.flatMap((page: HTMLElement | null) => {
    if (!page) return [];

    const bbox = page.getBoundingClientRect();

    const centerX = bbox.left + bbox.width / 2;
    const centerY = bbox.top + bbox.height / 2;

    const distanceX = centerX - viewportCenterX;
    const distanceY = centerY - viewportCenterY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    return {
      id: page.id,
      distance,
    };
  });

  let closest = positions[0];

  positions.forEach((position) => {
    if (position.distance < closest.distance) {
      closest = position;
    }
  });

  return closest.id as FRAME_KEY;
};

const usePagePagination = () => {
  const prevPage = (curPageId: FRAME_KEY) => {
    const curIdx = NAVIGATING_ORDER_BY_LAYOUT.indexOf(curPageId);
    const prevIdx = (curIdx - 1 + PAGE_SIZE) % PAGE_SIZE;
    const prevPageId = NAVIGATING_ORDER_BY_LAYOUT[prevIdx];
    navigateToFrame(prevPageId);
  };

  const nextPage = (curPageId: FRAME_KEY) => {
    const curIdx = NAVIGATING_ORDER_BY_LAYOUT.indexOf(curPageId);
    const nextIdx = (curIdx + 1) % PAGE_SIZE;
    const nextPageId = NAVIGATING_ORDER_BY_LAYOUT[nextIdx];
    navigateToFrame(nextPageId);
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    const closestId = getClosestsPage();

    switch (e.key) {
      case "PageUp":
        return prevPage(closestId);
      case "PageDown":
        return nextPage(closestId);
      default:
        break;
    }
  }, []);

  return { onKeyDown };
};

export default usePagePagination;
