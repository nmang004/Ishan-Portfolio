import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data/content';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ title, subtitle, period, description, icon: Icon }) => (
    <div className="relative pl-8 pb-12 border-l border-gray-200 last:pb-0 last:border-0">
        <div className="absolute left-[-12px] top-0 p-1 bg-white border-2 border-accent rounded-full">
            <Icon size={16} className="text-accent" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <span className="text-sm font-medium text-gray-500">{period}</span>
        </div>
        <h4 className="text-lg font-medium text-gray-700 mb-2">{subtitle}</h4>
        {description && <p className="text-secondary">{description}</p>}
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-gray-50">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Experience & Education</h2>
                    <div className="h-1 w-20 bg-accent mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                            <Briefcase className="text-accent" /> Professional Experience
                        </h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            {experience.map((item, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={item.role}
                                    subtitle={item.organization}
                                    period={item.period}
                                    description={item.description}
                                    icon={Briefcase}
                                />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                            <GraduationCap className="text-accent" /> Education
                        </h3>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            {education.map((item, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={item.degree}
                                    subtitle={item.institution}
                                    period={item.year}
                                    description={item.details}
                                    icon={GraduationCap}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
