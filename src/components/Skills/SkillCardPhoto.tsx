import Photo from "../../assets/images/profile/photo-skills.webp";
import PhotoMin from "../../assets/images/profile/photo-skills-min.webp";
import useProgressiveImg from "../../hooks/useProgressiveImg";

const SkillCardPhoto = () => {
  const { src, blur } = useProgressiveImg(Photo, PhotoMin);
  return (
    <img
      src={src}
      className="h-[300px] w-full object-cover drop-shadow-lg transition-[filter]"
      style={{
        filter: blur ? "blur(10px)" : "none",
      }}
    />
  );
};

export default SkillCardPhoto;
