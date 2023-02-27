import React from "react";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer>
      <p className="mb-4 w-full text-sm text-center text-slate-400 hover:cursor-pointer hover:text-green-300">
        Copyright © {getCurrentYear()}. Designed & Built by Yurii Belaivtsev
      </p>
    </footer>
  );
};

export default Footer;
