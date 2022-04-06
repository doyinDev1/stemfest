import "../../styles/Agenda.css";
function Agenda({ date, title, about, image, name, job, work, role }) {
  return (
    <div className="agenda md:flex p-6 lg:p-4">
      <div className="agenda__Time md:mx-6 ">
        <p className="p-2 px-4 bg-deep text-white mt-4 md:rounded-[10px] ">
          {" "}
          1:45pm
        </p>
      </div>
      <div className="agenda__Card border p-4 px-6">
        <div className="agenda__Date font-bold">{date}</div>
        <h3 className="my-2 font-extrabold"> {title}</h3>
        <p className="mb-6 leading-6 text-justify">{about.slice(0, 250)}</p>

        <div className="agenda__Author flex items-center">
          <img src={image} alt="" className="w-[120px] h-[120px]" />
          <div className="agenda__AuthorDetails ml-4 lg:text-xs ">
            <h4 className="text-black lg:text-xs">{name}</h4>
            <p className="">{job}</p>
            <p className=""> {work}</p>
            <p className="">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
