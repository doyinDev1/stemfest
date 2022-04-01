function ServiceOption({ icon, title, about, link, linkText }) {
  return (
    <div className="serviceOption m-10 text-center text-white">
      <div className="mx-auto max-w-fit">{icon}</div>
      <h4 className="text-yellow mt-2 text-xl">{title}</h4>
      <p className="my-7 leading-6 "> {about}</p>
      <a href={link} className="bg-yellow  mt-7 rounded-full px-6 py-2">
        {linkText}
      </a>
    </div>
  );
}

export default ServiceOption;
