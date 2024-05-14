"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { AnimatePresence, motion } from "framer-motion";
const links = [
  { id: 1, label: "Experience", href: "#" },
  { id: 2, label: "Skills", href: "#" },
  { id: 3, label: "Projects", href: "#" },
  { id: 4, label: "Contact", href: "#" },
];

function NavBar() {
  const itemCount = links.length;
  const radius = 200;
  const [open, setOpen] = useState(false);

  const topVairants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.6,
      },
    },
    opened: {
      rotate: 45,
      transition: {
        duration: 0.6,
      },
    },
  };

  const centerVairants = {
    closed: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
    opened: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  const bottomVairants = {
    closed: {
      rotate: 0,
      transition: {
        duration: 0.6,
      },
    },
    opened: {
      rotate: -45,
      transition: {
        duration: 0.6,
      },
    },
  };

  const listVairants = {
    closed: {
      opacity: 0,
    },
    opened: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren:0.4
      },
    },
    end: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const listItemVariant = {
    closed:{
      y:10,
      opacity:0,
    },
    opened:{
      y:-10,
      opacity:1,
      transition:{
        duration: 0.8
      }
    },
  }

  return (
    //     <div className="fixed bg-transparent top-20 right-0 h-full flex items-center justify-end">
    //       <div className="relative w-[300px] h-[250px] ">
    //         {/* <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-transparent border-2 border-blue-500 rounded-full  translate-x-1/2"/> */}
    //         <div
    //           className="absolute  bottom-0 right-0 w-[650px] h-[650px] bg-gray-500/0 backdrop-blur-lg shadow-lg shadow-gray-500 ring-1 ring-gray-500/35
    //  rounded-full translate-x-1/2 translate-y-1/4"
    //         />
    //         <ul className="absolute  right-[35%] top-1/3">
    //           {links.map((link, index) => {
    //             const angle = (Math.PI / (itemCount - 1)) * index - 0.05;
    //             const x = -Math.cos(angle) * radius;
    //             const y = Math.sin(angle) * radius;
    //             const rotatedX = -y;
    //             const rotatedY = x;
    //             return (
    //               <li
    //                 key={link.id}
    //                 className="absolute group bg-transparent p-2 rounded-sm hover:shadow-inner  hover:shadow-[#1b1b1b]"
    //                 style={{
    //                   transform: `translate(${rotatedX}px, ${rotatedY}px)`,
    //                 }}
    //               >
    //                 <Link
    //                   href={link.href}
    //                   className="text-white  group-hover:text-ter  hover:bg-textglow/ text-xl font-bold py-2 px-4  "
    //                 >
    //                   {link.label}
    //                 </Link>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     </div>
    <div className="h-full flex items-start md:items-center justify-between bg-[#0F0F0F]  text-white py-12 px-6 sm:px-8 md:px-12 lg:px-20 2xl:px-48">
      <div className="hidden md:flex gap-6 w-1/3">
        {links.map((link) => (
          <NavLink key={link.id} link={link} />
        ))}
      </div>

      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-gradient-to-tr from-[#062c43] to-[#9ccddc] shadow-lg shadow-[#054569] rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white  mr-1">Ramit</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .world
          </span>
        </Link>
      </div>

      <div className=" hidden md:flex gap-4 w-1/3 justify-end">
        <Link href={"https://github.com/ramit03"} target="_blank">
          <Image
            className="bg-white rounded-full"
            src={"/github.png"}
            alt="github"
            width={24}
            height={24}
          />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVairants}
            className="w-10 h-1 bg-ter rounded origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={centerVairants}
            className="w-10 h-1 bg-ter rounded"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVairants}
            className="w-10 h-1 bg-ter rounded origin-left"
          ></motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={listVairants}
              initial="closed"
              animate="opened"
              exit="end"
              className="absolute bg-[#0F0F0F] overflow-x-hidden overflow-y-clip top-0 left-0 w-screen h-full text-textcol font-roboto flex flex-col justify-center items-center gap-12 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div variants={listItemVariant} key={link.id}>
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavBar;
