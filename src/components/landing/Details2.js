function Details2({ title, about, header, linkText, link }) {
  return (
    <div className="text-center">
      <h4 className="text-center max-w-fit mx-auto  mb-10 bg-yellow px-8 py-3 rounded-full ">
        {header}
      </h4>
      <h1
        className="text-bold text-deep mb-6 lg:text-[32px] lg:leading-[80px]"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <p className="leading-10 text-gray lg:max-w-[500px] relative z-10 lg:mx-auto  lg:text-[22px]">
        {about.slice(0, 100)}
      </p>
    </div>
  );
}

export default Details2;
