import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
const Part1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="part1"
      className="part1 mt-[8rem] ms-[9.5rem] me-[9.5rem] flex flex-row justify-around "
    >
      <div className="text1">
        <h2 className="capitalize text-[2.9rem] leading-[1.3] font-serif font-bold">
          We Tackle The Most <br /> Challenging Designs
        </h2>
        <p className="pt-[2rem]  text-slate-600 text-[1.4rem] w-[30rem]">
          The world needs innovators and problem solvers who turn challenges
          into greater opportunities. We have an insatiable curiosity about
          transformative trends challenging the status.
        </p>
        <div className="flex flex-row ">
          <FontAwesomeIcon
            icon={faPhone}
            className="mt-[1.7rem] text-[#cda274] bg-[#f4f0ec] p-[1.5rem] text-[1.5rem] rounded-[50%]"
          />
          <div className="mt-[1.8rem] ms-[1rem] text-slate-800">
            <h2 className="phone cursor-pointer text-[1.4rem] font-bold hover:text-[#cda274] transition-all ease-in-out delay-[.1s]">
              012345678
            </h2>
            <p className="capitalize text-[1.2rem]">Call us anytime</p>
          </div>
        </div>
        <button className="mt-[2rem] bg-slate-900 ps-[3rem] pe-[3rem] pt-[1rem] pb-[1rem] rounded-[1.5rem] text-white font-bold hover:bg-white hover:border-slate-900 border-2 hover:text-slate-900 transition-all ease-in-out delay-[.5s]">
          Get Free Estimate{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ps-[.5rem] text-[#cda274]"
          />
        </button>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 2 }}
      >
        <div className="image">
          <img
            src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b30656e76565ea79f29e5_intro-image.jpg"
            className="w-[32rem] h-[30rem] object-cover rounded-tr-[10rem] rounded-bl-[10rem]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Part1;
