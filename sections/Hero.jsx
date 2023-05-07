'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = (props) => {
  const { language } = props;

  return(
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >

            {language === 'en' && (
                  <h1 className='mt-[8px] font-bold md:text-[54px] text-[30px] text-white'>Let us help you take your business to the next level today!</h1>
      )}
      {language === 'id' && (
                   <h1 className='mt-[8px] font-bold md:text-[54px] text-[30px] text-white'>Izinkan kami membantu bisnis Anda ke level selanjutnya!</h1>

      )}
          </motion.div>
        </div>
  
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px]  rounded-tl-[140px] z-[0] -top-[30px]" />
  
          <img
            src="/az.png"
            alt="hero_cover"
            className="w-[450px] sm:h-[500px]  object-cover rounded-tl-[140px] z-10 relative"
          />
  
          <a href="#explore">
            <div className="w-full flex justify-center sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <div className='w-[27px] h-[50px] rounded-3xl border-2 border-white flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-2 h-2 rounded-full bg-white mb-1'
              />
            </div>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 

export default Hero;
