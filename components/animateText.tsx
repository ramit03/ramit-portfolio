"use client";
import React, { useEffect, useRef } from 'react';

interface AnimatedTextProps {
    text: string; 
    dataTextValue: string; 
    className?: string; 
}

const AnimatedText: React.FC<AnimatedTextProps> = ({text, dataTextValue,className}) => {
    const textRef = useRef<HTMLElement | null>(null);
    const intervalRef = useRef<number | null>(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const startAnimation = () => {
      const element = textRef.current;
      if (!element) return;
      
      let iteration = 0;
      const initText = element.innerText;

      clearInterval(intervalRef.current as number);

      intervalRef.current = window.setInterval(() => {
          element.innerText = Array.from(initText).map((letter, index) => {
              if (index < iteration) {
                  return dataTextValue[index];
              }
              return letters[Math.floor(Math.random() * 26)];
          }).join('');

          if (iteration >= dataTextValue.length) {
              clearInterval(intervalRef.current as number);
          }

          iteration += 1 / 10;
      }, 50);
  };

  useEffect(() => {
    startAnimation(); // Start the animation on load

    const element = textRef.current;
    if (!element) return;
    
    element.addEventListener('mouseover', startAnimation); // Re-start animation on hover

    return () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
        element.removeEventListener('mouseover', startAnimation);
    };
}, [dataTextValue]); // Depend on dataTextValue to restart the animation if it changes

      
    
    return(
        <span ref={textRef} className={className}  data-text-value={dataTextValue}>
      {text}
    </span> 
    )
}
  
export default AnimatedText;