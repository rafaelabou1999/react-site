import PropTypes from "prop-types";
import "./index.css";
const CardPart2 = ({ title, text, city, img }) => {
  return (
    <div className=" bg-slate-200 text-slate-800 rounded-[2rem] h-xl xl:w-2xl p-[2rem] sm:w-[120%] md:w-[43%] md:h-2xl ">
      <div className="flex flex-row gap-[1rem]">
        <img
          src={img}
          className="w-[4rem] h-[4rem] rounded-[50%] object-cover"
        />
        <div className="mt-[.4rem]">
          <h3 className="font-serif font-bold md:text-[20px] ">{title}</h3>
          <p>{city}</p>
        </div>
      </div>
      <div>
        <p className="pt-[2rem] text-md md:text-[19px]">{text}</p>
      </div>
    </div>
  );
};

CardPart2.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPart2;
