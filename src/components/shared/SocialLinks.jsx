import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
const SocialLinks = () => {
  return (
    <div className="hidden fixed bottom-0 left-4 sm:block">
      <ul className="flex items-center text-xl flex-col gap-4 text-slate-400">
        <li className="p-1 hover:-translate-y-1 hover:text-green-300 duration-200">
          <a href="https://github.com/yurii-bel">
            <FiGithub />
          </a>
        </li>
        <li className="p-1 hover:-translate-y-1 hover:text-green-300">
          <a href="https://www.instagram.com/okey_nice/">
            <FiInstagram />
          </a>
        </li>
        <li className="p-1 hover:-translate-y-1 hover:text-green-300">
          <a href="https://www.linkedin.com/in/yuriibeliavtsev/">
            <FiLinkedin />
          </a>
        </li>
        <li className="p-1 hover:-translate-y-1 hover:text-green-300">
          <a href="https://twitter.com/beliavtsev">
            <FiTwitter />
          </a>
        </li>
        <li className="pb-32 w-[1px] bg-slate-400"></li>
      </ul>
    </div>
  );
};

export default SocialLinks;
