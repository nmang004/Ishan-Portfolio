import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            About Me
                        </h2>
                        <div className="h-1 w-20 bg-accent mb-8"></div>
                        <p className="text-lg text-secondary leading-relaxed mb-6">
                            {personalInfo.bio}
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            My professional journey is driven by a curiosity to understand the complexities of the human brain and a commitment to patient-centered care. Through HOLO Labs and my research at VCOM, I strive to advance the field of neurosurgery while mentoring the next generation of medical professionals.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden shadow-xl">
                            {/* Placeholder for actual image */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                [Portrait Image]
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gray-50 rounded-lg -z-10 border border-gray-100"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
