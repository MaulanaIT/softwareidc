'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { WiAlien, WiCelsius } from "react-icons/wi"
import { IoLogoIonic } from "react-icons/io"
import Image from 'next/image';
import img1 from "../public/one.png"
import img2 from "../public/ionic.png"
import img3 from "../public/nodejs.svg"
import img4 from "../public/googlemaps.svg"
import img5 from "../public/nextjs.png"
import img6 from "../public/react.svg"
import img7 from "../public/firebase.png"
import img8 from "../public/restapi.png"




import Marquee from 'react-fast-marquee';

const Technology = (props) => {
  const [active, setActive] = useState('world-2');
  const { language } = props;


  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Technology" textStyles="text-center" />
        {language === 'en' && (
          <TitleText
            title={<>We use the latest technology to build  <br className="md:block hidden" /> your business.</>}
            textStyles="text-center"
          />
        )
        }

{language === 'id' && (
          <TitleText
            title={<>Kami menggunakan teknologi terbaru untuk membangun bisnis anda.</>}
            textStyles="text-center"
          />
        )
        }
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[20vh] ">
          <Marquee direction="left" speed={60} delay={1}>
            <div className="image_wrapper">
              <Image src={img1} alt=""  width={"100"}  />
            </div>
            <div className="image_wrapper" >
              <Image src={img2} alt=""  width={"70"}  />
            </div>
            <div className="image_wrapper">
              <Image src={img5} alt="NEXTTTTT" width={"100"} />
            </div>
            <div className="image_wrapper"  > 
              <Image src={img3} alt="" width={"100"}  />
            </div>
            <div className="image_wrapper" >
              <Image src={img4} alt="" width={"120"}  />
            </div>
            <div className="image_wrapper " >
              <Image src={img6} alt="" width={"50"} />
            </div>
            <div className="image_wrapper">
              <Image src={img7} alt="" width={"40"} />
            </div>
            <div className="image_wrapper">
              <Image src={img8} alt="" width={"50"}  />
            </div>
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};

export default Technology;
