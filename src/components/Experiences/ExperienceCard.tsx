import { IS_MOBILE } from "../../utils/device";
import AnimateText from "../template/AnimateText";
import { IExperience } from "./Experiences.static";

const ExperienceCard = (props: IExperience) => {
  const { image, smallImage, title, role, duration, description, notes } =
    props;
  const durationText = !IS_MOBILE && duration ? ` - ${duration}` : "";
  return (
    <div className="flex gap-3 md:gap-[52px]">
      <img
        src={(IS_MOBILE && smallImage) || image}
        alt={title}
        style={{
          width: IS_MOBILE ? 50 : 235,
          height: IS_MOBILE ? 50 : 157,
        }}
        loading="lazy"
      />
      <div>
        <h3>
          <AnimateText interval={30}>{title}</AnimateText>
        </h3>
        <h5 className="text-blue mt-[6px] mb-2 md:mb-[24px]">
          {role}
          {durationText}
        </h5>
        <ul className="list-disc ml-6 max-w-[480px]">
          {IS_MOBILE && duration && <li>{duration}</li>}
          {description.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        {notes && <div className="mt-1 md:mt-4">{notes}</div>}
      </div>
    </div>
  );
};

export default ExperienceCard;
