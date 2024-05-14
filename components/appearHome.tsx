'use client';
import { motion } from "framer-motion";

interface AppearProps {
    children:React.ReactNode;
    className?:string;
    initial: {
        y:number;
        opacity:number;
    };
    animate:{
        y:number;
        opacity:number;
        transition: {
            duration:number;
            delay?:number;
        }
    }
}

const AppearIn:React.FC<AppearProps> = ({children,initial,animate,className}) => {
  return (
    <motion.div initial={initial} animate={animate} className={className}>
        {children}
    </motion.div>
  )
}

export default AppearIn;