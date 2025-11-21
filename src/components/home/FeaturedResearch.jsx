import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { research } from '../../data/content';

const FeaturedResearch = () => {
    // Get the top 3 research items
    const featuredItems = research.slice(0, 3);

    return (
        <section className="section-padding bg-surface-alt">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-2">Publications</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary">Selected Research</h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/research" className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors group">
                            View All Publications
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-accent/20 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <FileText size={24} />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-3">
                                {item.title}
                            </h4>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                                {item.journal} • {item.year}
                            </p>
                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                                Read Paper <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Link to="/research" className="btn-outline w-full">
                        View All Publications
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedResearch;
