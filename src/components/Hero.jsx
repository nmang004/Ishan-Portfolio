import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden pt-20">
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
                    <h2 className="text-accent font-medium tracking-widest uppercase mb-4">Neurosurgeon & Researcher</h2>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-primary-dark mb-6">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 font-light">
                        Bridging the gap between neurological surgery and osteopathic medicine through innovation and research.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-light transition-colors shadow-lg hover:shadow-xl">
                            Get in Touch
                        </a>
                        <a href="#experience" className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-gray-50 transition-colors">
                            View CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
