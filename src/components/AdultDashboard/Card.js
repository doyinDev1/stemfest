import "./Card.css";
import DownloadStemfest from "../DownloadStemfest/DownloadStemfest";


function Card({ name, age, image, qr_code, unique_id }) {
  // fetch qr code and turn to image on the fly then pass to pdf component
  // const imgSrc = `http://api.qrserver.com/v1/create-qr-code/?data=${qr_code}&size=200x200`

  return (
    <div className="card">
      <div className="card__Image">
        <img src={image} alt="kidImage" />
      </div>
      <div className="card__About">
        <h4 className="card__Name">{name}</h4>
        <p className="card__Age"> Age: {age}</p>
        {/* <button> Download Pass</button> */}
        <h4 className="card__Name">Unique ID: {unique_id}</h4>

        <DownloadStemfest
												status={true}
												name={name}
                        qr_code={qr_code}
                        unique_id={unique_id}
                        // imgSrc={imgSrc}
											/>
      </div>
    </div>
  );
}

export default Card;
