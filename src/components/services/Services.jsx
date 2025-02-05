import "./services.scss";
import { color, motion,  } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y:100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
}

const Services = () => {
  return (
    <motion.div className=" services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className=" title">
          <img src="/people.webp" alt="" />
          <h1>
            {" "}
            <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas{" "}
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business
          </h1>
          <button>What We Do? </button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            dignissimos, consequatur et, voluptatem nobis labore pariatur odit
            architecto harum sapiente at cumque, praesentium obcaecati hic animi
            odio perferendis eos beatae.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            dignissimos, consequatur et, voluptatem nobis labore pariatur odit
            architecto harum sapiente at cumque, praesentium obcaecati hic animi
            odio perferendis eos beatae.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            dignissimos, consequatur et, voluptatem nobis labore pariatur odit
            architecto harum sapiente at cumque, praesentium obcaecati hic animi
            odio perferendis eos beatae.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray" , color:"black"}}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            dignissimos, consequatur et, voluptatem nobis labore pariatur odit
            architecto harum sapiente at cumque, praesentium obcaecati hic animi
            odio perferendis eos beatae.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
