'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Logo from '../public/logo2white.svg';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pb-5 pt-20 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <div style={{ position: 'relative' }}> <Image src={Logo} width="140" alt="Logo 1" quality="100" priority /></div>
      <img title="Ubah Bahasa" src="/indonesia.png" alt="menu" className="w-[30px] h-[30px] object-contain cursor-pointer" />
    </div>
  </motion.nav>
);

export default Navbar;
