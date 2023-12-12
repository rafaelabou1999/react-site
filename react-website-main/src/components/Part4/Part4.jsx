import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Part4 = () => {
  return (
    <div
      id="part4"
      className="bg-slate-800 mx-auto w-[95%] xl:w-[72rem] pt-[2rem] pb-[6rem] p-[3rem] rounded-[5rem] mt-[10rem]"
    >
      <h2 className="pt-[4rem] text-center font-serif font-bold  text-[2rem] text-white">
        Wanna join the interno?
      </h2>
      <p className="text-white text-center text-[1.1rem]">
        Contact Us & Get a Free Consultation
      </p>

      <button className="block mx-auto text-center mt-[2rem] bg-[#cda274] ps-[3rem] pe-[3rem] pt-[1rem] pb-[1rem] rounded-[1.5rem] text-white font-bold hover:bg-white hover:border-slate-900 border-2 hover:text-slate-900 transition-all ease-in-out delay-[.5s]">
        Get Started{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="ps-[.5rem] text-slate-900"
        />
      </button>
    </div>
  );
};

export default Part4;
