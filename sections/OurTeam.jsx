'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { IoLocationSharp } from "react-icons/io5"
import { useState } from 'react';

const OurTeam = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div>
      <div className='gradient-03'>

      </div>
    <section className={`${styles.paddings} relative z-10 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Our Teams" textStyles="text-center" />
        <TitleText
          title={(
            <>
              We believe in the greater good, we love businesses that keep this.
            </>
          )}
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[50vh]"
        >
          <div className='wrapper-ourteams'>
            <div className="containertwo">
              <div className="accordion">
                <div className="accordion-item" id="question3">
                  <a className="accordion-link" onClick={() => handleAccordionClick(0)}>
                    <div className="flex flex-wrap">
                      <h3>WHO WE HELP ?</h3>
                    </div>
                  </a>
                  <motion.div
                    variants={{
                      show: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -20 },
                    }}
                    className={`answer ${activeAccordion === 0 ? 'open' : ''}`}
                    initial="hidden"
                    animate={activeAccordion === 0 ? 'show' : 'hidden'}
                  >
                    <p>"We help individuals and businesses, foreign and domestic, in the education, marketing, production, data collection, healthcare sectors to digitize a systems or products."</p>
                    </motion.div>
                  <hr />
                </div>

                <div className="accordion-item " id="question1">
                  <a className="accordion-link" onClick={() => handleAccordionClick(1)}>
                    <div className="flex flex-wrap">
                    <h3>CITIES</h3>
                    <ul>
                      <li>#Jakarta</li>
                      <li>#Bekasi</li>
                      <li>#Semarang</li>
                      <li>#Tegal</li>
                    </ul>
                    </div>
                  </a>
                  <motion.div
                    variants={{
                      show: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -20 },
                    }}
                    className={`answer ${activeAccordion === 1 ? 'open' : ''}`}
                    initial="hidden"
                    animate={activeAccordion === 1 ? 'show' : 'hidden'}
                  >
                    <p>Meet our teams in several cities and invite them to discuss your brilliant ideas.</p>
                  </motion.div>
                  <hr />
                </div>

                <div className="accordion-item" id="question2">
                  <a className="accordion-link" onClick={() => handleAccordionClick(2)}>
                    <div className="flex flex-wrap">
                    <h3>UX/UI DESIGN</h3>
                    <ul>
                      <li>#Figma</li>
                      <li>#Sketch</li>
                      <li>#Adobe</li>
                      <li>#Invision</li>
                      <li>#Protopie</li>
                    </ul>
                    </div>
                  </a>
                  <motion.div
                    variants={{
                      show: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -20 },
                    }}
                    className={`answer ${activeAccordion === 2 ? 'open' : ''}`}
                    initial="hidden"
                    animate={activeAccordion === 2 ? 'show' : 'hidden'}
                  >
                    <p>"Discuss how the right UI UX design can increase conversions and user experience on your website or application"</p>
                  </motion.div>
                  <hr />
                </div>

                <div className="accordion-item" id="question4">
                  <a className="accordion-link" onClick={() => handleAccordionClick(3)}>
                    <div className="flex flex-wrap">
                    <h3>SOFTWARE DEVELOPMENT</h3>
                    <ul>
                      <li>#Website</li>
                      <li>#Android</li>
                      <li>#iOS</li>
                      <li>#Desktop</li>
                    </ul>
                    </div>
                  </a>
                  <motion.div
                    variants={{
                      show: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -20 },
                    }}
                    className={`answer ${activeAccordion === 3 ? 'open' : ''}`}
                    initial="hidden"
                    animate={activeAccordion === 3 ? 'show' : 'hidden'}
                  >
                    <p>"We offer the right digital solutions from the ideas you convey and planning application development to accelerate your business."</p>
                  </motion.div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
    </div>
  );
};

export default OurTeam;