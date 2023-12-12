import "./App.css";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "./components/Banner/Banner";
import Card from "./components/Cards/Card";
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";
import Part3 from "./components/Part3/Part3";
import Part4 from "./components/Part4/Part4";
import Footer from "./components/Footer/Footer";
function App() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  const handleMenuItem = () => {
    setActive(false);
  };

  function handleSize() {
    if (window.innerWidth >= 800) {
      setActive(false);
    }
  }

  useEffect(() => {
    // Attach event listener when component mounts
    window.addEventListener("resize", handleSize);

    // Detach event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="overflow-x-hidden">
      <div className="menuDesk flex flex-row justify-around sm:jutify-between md:justify-between sm:ms-[4rem] md:ms-[4rem] sm:me-[4rem] md:me-[4rem]   pt-[2rem]">
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/61977e6d733ba184d23db8bc_interno.svg"
          alt="brand"
          className="imageMenu w-[10rem]"
        />
        <div className="desktop-menu">
          <ul className="flex flex-row gap-[2rem] mt-[.6rem]">
            <li>
              <a
                className="hover:text-[#CDA274] transition-all delay-[.2s]"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#CDA274] transition-all delay-[.2s]"
                href="#part1"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#CDA274] transition-all delay-[.2s]"
                href="#part2"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#CDA274] transition-all delay-[.2s]"
                href="#part3"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#CDA274] transition-all delay-[.2s]"
                href="#part4"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div onClick={handleActive} className="hamburger xl:hidden ">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div
          style={{ display: active ? "block" : "none" }}
          className=" burger bg-white text-slate-600 text-center absolute top-[5rem] h-[16rem] pt-[1rem] text-[1.6rem] left-0 right-0 z-10 "
        >
          <ul>
            <li className="pb-[.3rem]" onClick={handleMenuItem}>
              Home
            </li>
            <li className="pb-[.3rem]" onClick={handleMenuItem}>
              <a href="#part1">About</a>
            </li>
            <li className="pb-[.3rem]" onClick={handleMenuItem}>
              <a href="#part2">Testimonials</a>
            </li>
            <li className="pb-[.3rem]" onClick={handleMenuItem}>
              <a href="#part3">Projects</a>
            </li>
            <li onClick={handleMenuItem}>
              <a href="#part4">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        <Banner />
      </motion.div>

      <div className="allCards mt-[12rem] flex flex-row justify-center gap-[4.7rem]">
        <Card
          title="Interior Design"
          text="Enhancing the interior to achieve a healthier environment for the people using right space."
        />

        <Card
          className="ms-[1rem] me-[1rem]"
          title="Furniture"
          text="Movable articles that are used to make a room or building suitable for living or working."
        />

        <Card
          title="Flooring"
          text="Thin object any finished material applied over a floor structure to provide a walking surface."
        />
      </div>

      <Part1 id="part1" />
      <Part2 />
      <div className="mt-[10rem] mb-[10rem] flex flex-row justify-center gap-[6rem] flex-wrap">
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b50dbaf38fe2e294e77c4_client-logo-1.svg"
          className="w-[8rem]"
        />
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b50db6a5ad2b2e8220095_client-logo-2.svg"
          className="w-[8rem]"
        />
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b50db3b3a6aece9a31f5e_client-logo-3.svg"
          className="w-[8rem]"
        />
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b50db1409585a01100743_client-logo-4.svg"
          className="w-[8rem]"
        />
        <img
          src="https://assets-global.website-files.com/6194e0af852e05a5be106504/619b50dbc57d3e3e8b8ed401_client-logo-5.svg"
          className="w-[8rem]"
        />
      </div>
      <Part3 />
      <Part4 />
      <Footer />
    </div>
  );
}

export default App;
