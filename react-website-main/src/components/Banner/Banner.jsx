import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Banner = () => {
  return (
    <div className="relative mt-[2rem] h-[30rem] w-full">
      <img
        src="https://assets-global.website-files.com/6194e0af852e05a5be106504/61a60615af62665c8c5dded2_hero-area-image.jpg"
        className="img h-[36rem] w-full object-cover border-l-b-2 rounded-bl-[10rem]"
      />
      <div className="text absolute top-[7rem] left-[13.5rem]  text-start">
        <h2 className=" font-serif font-bold text-[3.2rem] text-grey-800 ">
          Let's Create Your
          <br /> Dream Interior
        </h2>
        <p className="text-[1.3rem] w-[30rem] text-slate-500">
          The world needs innovators and problem solvers who turn challenges
          into greater opportunities.
        </p>

        <button className="mt-[2rem] bg-slate-900 ps-[3rem] pe-[3rem] pt-[1rem] pb-[1rem] rounded-[1.5rem] text-white font-bold hover:bg-white hover:border-slate-900 border-2 hover:text-slate-900 transition-all ease-in-out delay-[.5s]">
          Get Started{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ps-[.5rem] text-[#cda274]"
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
