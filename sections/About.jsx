'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = (props) => {
  const { language } = props;

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| IDC Software Lab" textStyles="text-center" />

        <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          >
        {language === 'en' && (
          <span className=''>We is <span className="font-extrabold text-white">dedicated</span>  to understanding your vision and goals. With our expertise in Web and App Development, we are confident that we can create the solutions that you envision.
          We prioritize clear communication and collaboration with our clients to ensure that their vision is realized in the final product. Let us help you turn your ideas into reality and bring your business to the next level. </span> 
        )}
        {language === 'id' && (
          <span>Kami <span className="font-extrabold text-white">berdedikasi </span> untuk memahami visi dan tujuan Anda. Dengan keahlian kami dalam Pengembangan Web dan Aplikasi, kami yakin dapat menciptakan solusi yang Anda impikan.
          Kami memprioritaskan komunikasi dan kolaborasi yang jelas dengan klien kami untuk memastikan bahwa visi mereka terwujud dalam produk akhir. Biarkan kami membantu Anda mengubah ide menjadi kenyataan dan membawa bisnis Anda ke level berikutnya.</span> 
        )}  
 </motion.p>
      </motion.div>
    </section>
  );
}

export default About;
