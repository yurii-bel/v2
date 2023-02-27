import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-center bg-cover px-12 rounded-md "
    >
      <h5 className="w-full text-lg text-left border-b border-slate-800 py-4 pl-4 text-slate-300 mb-24 ">
        <span className="text-green-300">03.</span>
        <span> Contact</span>
      </h5>
      <div className="text-xl font-bold tracking-wide lg:text-[64px]  lg:leading-tight lg:space-y-0">
        <h1 className="text-slate-300 flex flex-wrap mb-6">Get in touch</h1>
      </div>
      <p className="text-slate-300 w-full text-center px-2 border-l border-r border-green-300 sm:w-3/4">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a
        href="mailto:yuriibel888@gmail.com"
        rel="noopener noreferrer"
        className="mt-12 text-sm py-3 px-6 rounded-md border border-green-300 hover:cursor-pointer hover:bg-green-300/10"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
