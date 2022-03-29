function ServiceOption({ icon, title, about, link, linkText }) {
  return (
    <div className="serviceOption m-10 text-center text-white">
      <div className="mx-auto max-w-fit">{icon}</div>
      <h4 className="text-yellow ">{title}</h4>
      <p className="my-7"> {about}</p>
      <a href={link} className="bg-yellow p-2 mt-7 rounded-full px-6">
        {linkText}
      </a>
    </div>
  );
}

export default ServiceOption;
