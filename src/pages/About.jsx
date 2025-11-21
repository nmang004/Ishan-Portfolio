import { motion } from 'framer-motion';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { personalInfo, awards } from '../data/content';
import { Code, Globe, Cpu, Heart, Coffee, BookOpen } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            title: "Technical Expertise",
            description: "Proficient in Python, React, and C++.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Code className="w-10 h-10 text-primary/50" /></div>,
            icon: <Cpu className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Global Perspective",
            description: "Conversational in Spanish and Sinhalese.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Globe className="w-10 h-10 text-primary/50" /></div>,
            icon: <Globe className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Community Service",
            description: "Dedicated to hospice care and outreach.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Heart className="w-10 h-10 text-primary/50" /></div>,
            icon: <Heart className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Lifelong Learner",
            description: "Always exploring new fields and skills.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><BookOpen className="w-10 h-10 text-primary/50" /></div>,
            icon: <BookOpen className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Hobbies",
            description: "Amateur Horticulturist & Mixologist.",
            header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center"><Coffee className="w-10 h-10 text-primary/50" /></div>,
            icon: <Coffee className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        About Me
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        My journey in medicine is driven by a passion for discovery and a dedication to healing.
                    </p>
                </motion.div>

                {/* Bio Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 text-lg text-slate-600 leading-relaxed space-y-6"
                    >
                        {personalInfo.fullBio.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 bg-surface-alt p-6 md:p-8 rounded-2xl border border-slate-100"
                    >
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">My Philosophy</h3>
                        <blockquote className="italic text-slate-600 mb-6 border-l-4 border-accent pl-4">
                            "Neurosurgery is not just about technical precision; it's about understanding the human story behind every diagnosis and preserving the essence of who our patients are."
                        </blockquote>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="font-medium text-primary">Patient-First Approach</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="font-medium text-primary">Evidence-Based Practice</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="font-medium text-primary">Continuous Innovation</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid Highlights */}
                <div className="mb-24">
                    <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Highlights & Interests</h2>
                    <BentoGrid className="max-w-4xl mx-auto">
                        {highlights.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                icon={item.icon}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </div>

                {/* Awards Section (Moved from Research) */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-primary text-center mb-10">Honors & Awards</h2>
                    <div className="grid gap-4">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-surface-alt p-6 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-accent/30 transition-colors"
                            >
                                <div>
                                    <h3 className="font-bold text-primary text-lg">{award.title}</h3>
                                    <p className="text-slate-500">{award.organization}</p>
                                </div>
                                <span className="text-sm font-bold text-accent bg-white px-4 py-1.5 rounded-full shadow-sm self-start sm:self-center border border-slate-100">
                                    {award.year}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
