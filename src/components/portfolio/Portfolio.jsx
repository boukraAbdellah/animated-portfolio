import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React ecommerce",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus distinctio expedita asperiores provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus",
  },
  {
    id: 2,
    title: "NextJs Blog",
    img: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus distinctio expedita asperiores provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus",
  },
  {
    id: 3,
    title: "Vanilla Js landing page",
    img: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus distinctio expedita asperiores provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus distinctio expedita asperiores provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat possimus",
  },
];

const PortfolioItem = ({ item }) => {

  const { title, img, desc } = item;
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section className="portfolio-item" >
      <div className="container" ref={ref}>
        <motion.img initial={{opacity: 0,x: -500}} whileInView={{opacity: 1,x:0}} transition={{duration: 1}} src={img} alt={title} />
        <motion.div className="textContainer" style={{y}}>
          <h3>{title}</h3>
          <p>{desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </section>
  );
}

const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end","start start"],
  });

  const scaleX = useSpring(scrollYProgress, {stiffness: 100, damping: 30});
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX : scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <PortfolioItem key={item.id} item={item} />
      ))}
    </div>
  )
};

export default Portfolio;
