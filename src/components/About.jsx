import AboutList from "./shared/AboutList";
import AboutTechnologiesList from "./shared/AboutTechnologiesList";

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="h-full w-full">
        <div className="p-16 flex flex-col">
          <h5 className="text-green-300 ">Hi, my name is</h5>
          <div className="mt-4 text-3xl space-y-2 font-bold tracking-wide lg:text-[64px]  lg:leading-tight lg:space-y-0">
            <h1 className="space-x-4 text-slate-300 flex flex-wrap">
              Yurii Beliavtsev.
            </h1>
            <h2 className="text-slate-400">I build things for the web.</h2>
          </div>
          <div className="mt-16 border-l pl-2 text-slate-400 border-green-300 text-sm sm:text-base lg:w-1/2">
            <p className="text-slate-300 font-medium">
              I'm a front-end developer based in Kyiv, Ukraine.
            </p>
            <br />
            <p>
              I'm passionate about cutting-edge, pixel-perfect, beautiful
              interfaces and intuitively implemented UX. Currently, I'm focused
              on building small to medium sized applications using
              <strong> React</strong>, <strong> Astro</strong> and
              <strong> TailwindCSS</strong> frameworks.
            </p>
          </div>

          <div className="self-start mt-6 border-l pl-2 text-slate-400 border-green-300 text-sm sm:text-base lg:w-1/2 lg:self-end">
            <p className="text-slate-300 font-medium">
              Here are a few technologies I've been working with recently:
            </p>
            <br />
            <AboutTechnologiesList />
          </div>

          <div className="mt-6 border-l pl-2 text-slate-400 border-green-300 text-sm sm:text-base lg:w-full">
            <p className="text-slate-300 font-medium">
              Some things I can spend my time on:
            </p>
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 ">
              <AboutList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
