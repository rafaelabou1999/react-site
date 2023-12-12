import CardPart3 from "./CardPart3";
import "./index.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Part3 = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="part3">
      <h2 className="block text-center font-serif font-bold  text-[3rem]">
        Recent Projects
      </h2>
      <p className="block mx-auto  xl:w-[35rem] w-[22rem] text-slate-400 text-center text-[1.2rem]">
        With tools to make every part of your process more human and a support
        team excited to help you, getting started with us never been easier.
      </p>
      <div className="card3 flex flex-row flex-wrap gap-[12%] justify-center mt-[5rem]">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        >
          <CardPart3
            title="Winery Dry Creek Building"
            text="Art Modern"
            img="https://assets-global.website-files.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg"
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 2 }}
        >
          <CardPart3
            title="Creative Workplace Design"
            text="Minimalist"
            img="https://assets-global.website-files.com/619cc60416b9688293f54eda/61a1dd05b4f9a181178c70b9_project-image-2.jpg"
          />
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 3 }}
        >
          <CardPart3
            title="Bedroom Interior Pot Work"
            text="Modern"
            img="https://assets-global.website-files.com/619cc60416b9688293f54eda/61a1dd10e8f59f8f8287319f_project-image-3.jpg"
          />
        </motion.div>
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 2 }}
        >
          <CardPart3
            title="Light Ambience Sepia Design"
            text="Scandinavian"
            img="https://assets-global.website-files.com/619cc60416b9688293f54eda/61a1dcfbe7008298f5887664_project-image-1.jpg"
            className="ms-[-60px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Part3;
