import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import headshot from '../../assets/ishanheadshot.jpg';

const Hero = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex items-start bg-primary overflow-hidden pt-20 md:pt-48">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(192,160,98,0.05),transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(15,23,42,0.5),transparent_50%)]" />
                {/* Subtle Spotlight for Text */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        style={{ y: y1, ...(isDesktop && { opacity }) }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-white/10 backdrop-blur-sm text-accent text-sm font-medium tracking-wider mb-6"
                        >
                            NEUROSURGEON & RESEARCHER
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6"
                        >
                            Precision in <br />
                            <span className="text-accent italic">Surgery.</span> <br />
                            Innovation in <br />
                            <span className="text-slate-400 italic">Science.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed"
                        >
                            Dedicated to advancing the field of neurosurgery through rigorous research, clinical excellence, and a commitment to patient care.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Link to="/research" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-primary bg-accent hover:bg-accent-hover transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 group gap-2">
                                View Research
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/experience" className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all duration-300 rounded-full">
                                View Experience
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-md mx-auto lg:max-w-full">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
                            <img
                                src={headshot}
                                alt="Ishan Perera"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative Elements behind image */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
