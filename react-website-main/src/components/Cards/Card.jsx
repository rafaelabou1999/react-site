import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
const Card = ({ title, text }) => {
  return (
    <div className="card border-2 border-slate-300 p-[2rem]  w-[20rem] text-center">
      <h2 className="text-[1.6em] font-serif font-bold text-[#292f36]">
        {title}
      </h2>
      <p className="text-[1.4rem] mt-[1rem] text-slate-600">{text}</p>
      <button className=" text-[#4d5053] text-[1.1rem] mt-[1.5rem] font-bold p-[.5rem] font-mono tracking-[.2rem]">
        View more{" "}
        <FontAwesomeIcon icon={faArrowRight} className="text-[#cda274]" />
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
