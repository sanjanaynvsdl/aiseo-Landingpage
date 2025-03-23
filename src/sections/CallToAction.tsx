"use client";
import { Button } from "@/components/Button";
import StarsBg from "../assets/stars.png";
import gridLines from "../assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";


const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();

    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderdRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  const [mouseX, mouseY] = useRelativeMousePosition(borderdRef);
  // console.log("mouse values ares : "+mouseX + mouseY)

  const imageMask = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section ref={sectionRef} className="py-20 md:py-24">
      <div className="container">
        <motion.div
          
          ref={borderdRef}
          animate={{
            backgroundPositionX: StarsBg.width,
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          className="border border-white/15 rounded-xl py-24 overflow-hidden relative group"
          style={{
            
            backgroundPositionY,
            backgroundImage: `url(${StarsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(65,65,65)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] -z-10 group-hover:opacity-0 transition duration-600"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[rgb(65,65,65)] bg-blend-overlay  -z-10 opacity-0 group-hover:opacity-100 transition duration-600"
            style={{
              maskImage:imageMask,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div>
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">
              AI driven SEO for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexit.
            </p>
            <div className="flex justify-center mt-8 ">
              <Button size={"md"} text={"Join Waitlist"} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
