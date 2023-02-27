const AboutCard = ({ title, image, link }) => {
  return (
    <div
      style={{ backgroundImage: `url("${image}")` }}
      className={`bg-slate-700 bg-blend-overlay  bg-cover flex items-center h-[200px] border border-gray-900 p-2 rounded-md hover:border hover:border-green-300 hover:bg-slate-600`}
    >
      <a className="text-center mx-auto" href={link} target="_blank">
        <h4 className="text-slate-100 text-xl tracking-wide">{title}</h4>
      </a>
    </div>
  );
};

export default AboutCard;
