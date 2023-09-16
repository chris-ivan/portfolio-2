import Photo from "../../assets/images/profile/photo-skills.webp";
import PhotoMin from "../../assets/images/profile/photo-skills-min.webp";
import useProgressiveImg from "../../hooks/useProgressiveImg";

const SkillCardPhoto = () => {
  const { src, blur } = useProgressiveImg(Photo, PhotoMin);
  return (
    <img
      src={src}
      className="min-w-[50px] w-[50px] h-[68px] md:h-[300px] md:w-full object-cover drop-shadow-lg transition-[filter] shadow-2xl"
      style={{
        filter: blur ? "blur(10px)" : "none",
      }}
    />
  );
};

export default SkillCardPhoto;
