"use client"
import {DotLottiePlayer} from '@dotlottie/react-player';
import Image from 'next/image'
import productImage from '../assets/product-image.png';

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

export const Features = () => {
  return <section className='py-20 md:py-24'>
    <div className="container">
      <h1 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Elevate your SEO efforts</h1>
      <p className='text-white/70 text-lg  md:text-xl max-w-2xl mx-auto tracking-tighter text-center mt-5 '>from small startups to large enterprises, our AI-driven tool has revolunized the way bussiness approach SEO.</p>
      <div className='mt-10 flex lg:flex-row flex-col gap-3'>

      {tabs.map((tab, index)=>(
        <div key={index} className='border border-white/15 lg:flex-1 flex p-2.5 rounded-xl gap-2.5 items-center'>
          <div className='border h-12 w-12 border-white/15 rounded-lg inline-flex items-center justify-center'>
          <DotLottiePlayer src={tab.icon} className='h-5 w-5' autoplay/>
            </div>
          <div className='font-medium'>{tab.title}</div>
          {tab.isNew && <div className='text-xs rounded-full px-2 py0.5 bg-[#5d5d5d] text-black font-semibold'>new</div>}
        </div>
      ))}
      </div>
      <div className='border border-white/20 p-2.5 rounded-xl mt-3 '>
      <div className='aspect-video bg-cover border border-white/20 rounded-lg' style={{
        backgroundImage:`url(${productImage.src})`
      }}></div>
      {/* <Image src={productImage} alt={"Product Image"}/> */}
      </div>

    </div>
  </section>;
};
