import { createContext, useRef } from "react";
import { FRAME_KEY } from "../interfaces/frame";

type IFrameRefContext = {
  [key in FRAME_KEY]?: React.RefObject<HTMLDivElement>;
};

export const FrameRefContext = createContext<IFrameRefContext>({});

export const FrameRefProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const contactFrameRef = useRef<HTMLDivElement>(null);
  const interestsFrameRef = useRef<HTMLDivElement>(null);
  const experiencesFrameRef = useRef<HTMLDivElement>(null);
  const landingFrameRef = useRef<HTMLDivElement>(null);
  const skillsFrameRef = useRef<HTMLDivElement>(null);
  const aboutFrameRef = useRef<HTMLDivElement>(null);
  const projectsFrameRef = useRef<HTMLDivElement>(null);

  const refs = {
    [FRAME_KEY.CONTACT]: contactFrameRef,
    [FRAME_KEY.INTERESTS]: interestsFrameRef,
    [FRAME_KEY.EXPERIENCES]: experiencesFrameRef,
    [FRAME_KEY.LANDING]: landingFrameRef,
    [FRAME_KEY.SKILLS]: skillsFrameRef,
    [FRAME_KEY.ABOUT]: aboutFrameRef,
    [FRAME_KEY.PROJECTS]: projectsFrameRef,
  };

  return (
    <FrameRefContext.Provider value={refs}>{children}</FrameRefContext.Provider>
  );
};
