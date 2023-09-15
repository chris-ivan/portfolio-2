import AnimateText from "../template/AnimateText";
import { IExperience } from "./Experiences.static";

const ExperienceCard = (props: IExperience) => {
  const { image, title, role, description, notes } = props;
  return (
    <div className="flex">
      <img
        src={image}
        alt={title}
        style={{
          width: 235,
          height: 157,
        }}
        loading="lazy"
      />
      <div className="ml-[52px]">
        <h3>
          <AnimateText interval={30}>{title}</AnimateText>
        </h3>
        <h5 className="text-blue mt-[6px] mb-[24px]">{role}</h5>
        <ul className="list-disc ml-6 max-w-[480px]">
          {description.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
        {notes && <div className="mt-4">{notes}</div>}
      </div>
    </div>
  );
};

export default ExperienceCard;
