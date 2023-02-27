import { IoMdArrowDropright } from "react-icons/io";

const AboutTechCard = ({ title }) => {
  return (
    <li className="flex items-center gap-2">
      <IoMdArrowDropright /> <span>{title}</span>
    </li>
  );
};

export default AboutTechCard;
