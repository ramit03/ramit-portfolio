"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiSpiralFill } from "react-icons/pi";

interface Star {
  id: number;
  x: number;
  y: number;
}

const MoonAnimation: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [starId, setStarId] = useState(0);
  const [animateButton, setAnimateButton] = useState(false);

  useEffect(() => {
    if (stars.length > 0) {
      setAnimateButton(true);
    } else {
      setAnimateButton(false);
    }
  }, [stars]);

  const addStar = () => {
    const newStar: Star = {
      id: starId,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    setStars((stars) => [...stars, newStar]);
    setStarId((prevId) => prevId + 1);
  };

  const clearStars = () => {
    setStars([]);
  };

  const blackHoleVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    animate: {
      scale: [0.9, 1, 0.9],
      rotate: [0, 360],
      transition: {
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  const clearButtonVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <div className="w-full h-full gap-8 relative inset-0 flex flex-col  items-center justify-center bg-transparent">
      <div
        className="relative cursor-pointer z-30 size-[280px] sm:size-[320px] md:size-[460px] lg:size-[400px] xl:size-[600px] bg-[#242424] hover:ring hover:shadow-lg hover:shadow-slate-700 hover:ring-slate-700 transition-shadow duration-700 rounded-full overflow-hidden shadow-inner shadow-black"
        onClick={addStar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          width="100%"
          height="100%"
          style={{ isolation: "isolate" }}
        >
          <g id="moon-group">
            {/* Auras */}
            <motion.g
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              id="aura-group"
              fill="#EBEBEB"
              fillOpacity=".16"
            >
              <path d="M90.138 200c0-60.634 49.228-109.862 109.862-109.862 60.634 0 109.862 49.228 109.862 109.862 0 60.634-49.228 109.862-109.862 109.862-60.634 0-109.862-49.228-109.862-109.862z" />
              <path d="M70.638 200c0-71.397 57.965-129.362 129.362-129.362 71.397 0 129.362 57.965 129.362 129.362 0 71.397-57.965 129.362-129.362 129.362-71.397 0-129.362-57.965-129.362-129.362z" />
              <path d="M51.333 200c0-82.051 66.616-148.667 148.667-148.667S348.667 117.949 348.667 200 282.051 348.667 200 348.667 51.333 282.051 51.333 200z" />
            </motion.g>

            {/* Moon */}
            <motion.circle
              cx="200"
              cy="200"
              r="92"
              fill="#FFF"
              initial={{ y: 0 }}
              animate={{ y: [-1, 1, -1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Craters */}
            <motion.g
              id="crater-group"
              fill="#D9D9BE"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M228.897 143.209c0-2.827 2.295-5.122 5.122-5.122s5.122 2.295 5.122 5.122-2.295 5.122-5.122 5.122-5.122-2.295-5.122-5.122z" />
              <path d="M217.866 197.184c0-6.088 4.943-11.031 11.031-11.031 6.089 0 11.032 4.943 11.032 11.031 0 6.088-4.943 11.031-11.032 11.031-6.088 0-11.031-4.943-11.031-11.031z" />
              <path d="M239.929 218.065c0-11.525 9.356-20.881 20.881-20.881 11.524 0 20.88 9.356 20.88 20.881 0 11.524-9.356 20.881-20.88 20.881-11.525 0-20.881-9.357-20.881-20.881z" />
              <path d="M202.895 245.643c0-11.524 9.356-20.881 20.881-20.881 11.524 0 20.881 9.357 20.881 20.881 0 11.525-9.357 20.881-20.881 20.881-11.525 0-20.881-9.356-20.881-20.881z" />
            </motion.g>
          </g>

          {/* Mountains */}
          <motion.g
            id="mountain-group"
            fill="#171717"
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 2, -2, 0], y: [0, 2, 2, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M296.02 340.854l11.631-20.145 19.014 32.932 19.013 32.932H78.165l19.013-32.932 19.014-32.932 11.631 20.145 7.508-16.143 4.818 10.357 17.974-38.644 20.966 45.074 7.017 15.085 14.228-24.644 15.771 27.317 11.292 19.558 17.357-37.316 20.966-45.074 17.974 38.644 4.817-10.357 7.509 16.143z" />
            <path d="M389.876 350.054l11.992-22.008 19.603 35.977L441.075 400H165.257l19.603-35.977 19.604-35.977 11.992 22.008 7.742-17.636 4.967 11.315 18.532-42.217 21.617 49.242 7.234 16.48 14.67-26.923 16.261 29.843 11.643 21.366 17.895-40.766 21.617-49.242 18.533 42.217 4.967-11.315 7.742 17.636z" />
            <path d="M0 400h97.178l-19.603-96.75-19.604-96.749-11.992 59.183-7.742-47.426-4.967 30.427-18.533-113.529L0 225.437V400z" />
            <path d="M400 400H296.02l20.976-79.41 20.976-79.41 12.831 48.577 8.284-38.927 5.314 24.974 19.83-93.182 15.769 74.1V400z" />
            <path d="M325.749 331.638l17.391-30.122 28.43 49.242L400 400H0l28.43-49.242 28.43-49.242 17.391 30.122L85.478 307.5l7.204 15.486 26.876-57.782 31.349 67.398 10.492 22.556 21.275-36.849 23.582 40.845 16.884 29.244 25.953-55.796 31.349-67.398 26.876 57.782 7.204-15.486 11.227 24.138z" />
          </motion.g>
        </svg>
      </div>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.8, 1, 0.8] }}
          transition={{
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            top: `${star.y}px`,
            left: `${star.x}px`,
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px #fff",
          }}
        />
      ))}
      <motion.div
        variants={clearButtonVariants}
        initial="initial"
        animate={animateButton ? "animate" : "hidden"}
        className="relative inline-flex group size-12"
      >
        {stars.length > 0 ? (
          <>
            <div className="absolute  focus:border-none  transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-sec via-ter to-light rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearStars();
              }}
              className={`relative size-12 inline-flex items-center justify-center  text-2xl font-semibold text-textcol transition-all hover:border-2 hover:border-light duration-200 bg-gray-900  rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 `}
              role="button"
            >
              <motion.div
                variants={blackHoleVariants}
                initial="initial"
                animate="animate"
              >
                <PiSpiralFill color="#5591a9" />
              </motion.div>
            </button>
          </>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

export default MoonAnimation;
