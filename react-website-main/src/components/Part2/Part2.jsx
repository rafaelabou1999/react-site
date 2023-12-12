import CardPart2 from "./CardPart2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Part2 = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="part2"
      className="mt-[10rem] pb-[8rem]  bg-slate-100 p-[2rem] w-[100%] md:w-[75%] xl:w-[75%] mx-auto"
    >
      <h2 className="pt-[4rem] text-center font-serif font-bold  text-[2rem]">
        What People Think <br />
        About Interno
      </h2>
      <div>
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 2 }}
        >
          <div className="card flex flex-wrap justify-center flex-row gap-[4rem] p-[2rem]">
            <CardPart2
              title="Lisa Clairton"
              img="https://assets-global.website-files.com/6194e0af852e05a5be106504/61a5d70ad9b5876274e17016_client-image-1.jpg"
              city="New York, USA"
              text="We selected Interno interior because of rigorous design background & education."
            />
            <CardPart2
              title="David Knight"
              img="https://assets-global.website-files.com/6194e0af852e05a5be106504/61a5d70a4d252373e66ee1cb_client-image-3.jpg"
              city="Sydney, Australia"
              text="The team exceeded our expectations and emerged as leaders of our project’s."
            />
            <CardPart2
              title="Lisa Clairton"
              img="https://assets-global.website-files.com/6194e0af852e05a5be106504/61a5d70a990fade56fd885a7_client-image-2.jpg"
              city="Paris, France"
              text="They balanced the architectural vision and the project realities beautifully."
            />
            <CardPart2
              title="Lisa Clairton"
              img="https://assets-global.website-files.com/6194e0af852e05a5be106504/61a5d70a990fade56fd885a7_client-image-2.jpg"
              city="Paris, France"
              text="They balanced the architectural vision and the project realities beautifully."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Part2;
