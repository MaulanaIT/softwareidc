'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const AppAndDashboard = () => (
    <section className={`${styles.paddings} relative z-10`}>

        <motion.div
            variants={staggerContainer}
            // initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >

            <motion.div
                variants={planetVariants('right')}
                className={`flex-1 ${styles.flexCenter}`}
            >
        
            </motion.div>
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.95] flex justify-center flex-col"
            >
                <TitleText title={<>Web App & Dashboard</>} />
                <div className="mt-[10px] flex flex-wrap justify-between gap-[10px]">
                    {newFeatures.map((feature) => (
                        <NewFeatures key={feature.title} {...feature} />
                    ))}
                </div>
            </motion.div>

        </motion.div>
    </section>
);

export default AppAndDashboard;
