import "./Card.css";
import DownloadStemfest from "../DownloadStemfest/DownloadStemfest";

// import { PDFViewer } from '@react-pdf/renderer'

function Card({ name, age, image }) {
  return (
    <div className="card">
      <div className="card__Image">
        <img src={image} alt="kidImage" />
      </div>
      <div className="card__About">
        <h4 className="card__Name">{name}</h4>
        <p className="card__Age"> Age: {age}</p>
        {/* <button> Download Pass</button> */}
        <DownloadStemfest
												status={true}
												
											/>
      </div>
    </div>
  );
}

export default Card;
