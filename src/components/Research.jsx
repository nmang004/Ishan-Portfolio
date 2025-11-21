import React from 'react';
import { motion } from 'framer-motion';
import { research, awards } from '../data/content';
import { BookOpen, Award, ExternalLink } from 'lucide-react';

const Research = () => {
    return (
        <section id="research" className="section-padding bg-white">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Research & Publications</h2>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                            <BookOpen className="text-accent" /> Selected Publications
                        </h3>
                        {research.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all"
                            >
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-secondary mb-2">
                                            <span className="font-semibold text-primary-light">{item.journal}</span> • {item.year}
                                        </p>
                                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                                            {item.status}
                                        </span>
                                    </div>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                            <Award className="text-accent" /> Honors & Awards
                        </h3>
                        <div className="bg-primary text-white p-8 rounded-xl shadow-lg">
                            <ul className="space-y-6">
                                {awards.map((award, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex gap-3"
                                    >
                                        <Award className="text-accent shrink-0 mt-1" size={18} />
                                        <span className="text-gray-300 text-sm leading-relaxed">{award}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;
