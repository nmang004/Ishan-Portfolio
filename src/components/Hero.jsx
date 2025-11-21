import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center bg-white overflow-hidden pt-28 pb-16 md:py-0">
            <div className="absolute inset-0 z-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent text-sm md:text-base font-medium tracking-widest uppercase mb-3 md:mb-4">Neurosurgeon & Researcher</h2>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-primary mb-4 md:mb-6 leading-tight">
                        {personalInfo.name}
                    </h1>
                    <p className="text-lg md:text-2xl text-secondary max-w-2xl mx-auto mb-8 md:mb-10 font-light px-4">
                        Bridging the gap between neurological surgery and osteopathic medicine through innovation and research.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                        <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
                            Get in Touch
                        </a>
                        <a href="#experience" className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto">
                            View CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
