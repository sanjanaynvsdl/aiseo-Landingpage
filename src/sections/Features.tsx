"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";

import Image from "next/image";
import productImage from "../assets/product-image.png";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeaturesTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selectedTab: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const Xpercentage = useMotionValue(0);
  const Ypercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${Xpercentage}% ${Ypercentage}%,black,transparent)`;
  useEffect(() => {
    if (!tabRef.current || !props.selectedTab) return;

    Xpercentage.set(0);
    Ypercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    animate(Xpercentage, [0, 100, 100, 0, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });

    animate(Ypercentage, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });
  }, [props.selectedTab]);

  const handleTabhover = () => {
    if (dotLottieRef.current == null) return;
    dotLottieRef.current.seek(0); //anytime this hovers
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabhover}
      className=" relative border border-white/15 lg:flex-1 flex p-2.5 rounded-xl gap-2.5 items-center"
      onClick={props.onClick}
    >
      {props.selectedTab && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#888888]"
        ></motion.div>
      )}

      <div className="border h-12 w-12 border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-5 w-5"
        />
      </div>
      <div className="font-medium">{props.title}</div>
      {props.isNew && (
        <div className="text-xs rounded-full px-2 py0.5 bg-[#5d5d5d] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY=useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX=useMotionValue(tabs[0].backgroundSizeX);
  //we cannot directly use this, so we turn this into motion templates

  const backgroundPosition=useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`
  const backgroundSize  =useMotionTemplate`${backgroundSizeX}%`

  const handleSelectedTab = (index:number)=>{
     setSelectedTab(index);
     //according to the selected tab, will animate the sizes of the backgroundImg
    animate(backgroundSizeX, [backgroundSizeX.get(),100,tabs[index].backgroundSizeX],{
      duration:2,
      ease:"easeInOut",
    });

    animate(backgroundPositionX, [backgroundPositionX.get(),tabs[index].backgroundPositionX],{
      duration:2,
      ease:'easeInOut'
    });

    animate(backgroundPositionY,[backgroundPositionY.get(),tabs[index].backgroundPositionY],{
      duration:2,
      ease:"easeInOut"
    });


  }


  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h1 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your SEO efforts
        </h1>
        <p className="text-white/70 text-lg  md:text-xl max-w-2xl mx-auto tracking-tighter text-center mt-5 ">
          from small startups to large enterprises, our AI-driven tool has
          revolunized the way bussiness approach SEO.
        </p>
        <div className="mt-10 flex lg:flex-row flex-col gap-3">
          {tabs.map((tab, index) => (
            <FeaturesTab
              key={index}
              {...tab}
              selectedTab={selectedTab === index}
              onClick={()=>handleSelectedTab(index)}
            />
          ))}
        </div>


        <div className=" p-2.5 rounded-xl mt-3 ">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
          {/* <Image src={productImage} alt={"Product Image"}/> */}
        </div>
      </div>
    </section>
  );
};
