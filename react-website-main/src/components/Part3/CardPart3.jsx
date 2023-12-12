import PropTypes from "prop-types";

const CardPart3 = ({ title, text, img }) => {
  return (
    <div>
      <img
        src={img}
        className=" w-[100%]  h-[50vh] xl:w-[27rem] xl:h-[30rem] object-cover rounded-tr-[10rem] md:w-[25vw] "
      />
      <h2 className="mt-[1rem] tracking-[.1rem] font-bold font-serif xl:text-[1.4rem] text-[1.1rem]  hover:text-[#cda274]">
        {title}
      </h2>
      <p className="text-[1.1rem] tracking-[.1rem] hover:text-[#cda274] mb-[5rem]">
        {text}
      </p>
    </div>
  );
};

CardPart3.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPart3;
