import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import FeaturedResearch from '../components/home/FeaturedResearch';
import { Brain, Activity, Heart } from 'lucide-react';

const Home = () => {
    const focusAreas = [
        {
            icon: <Brain className="w-8 h-8 text-accent" />,
            title: "Neuro-Oncology",
            description: "Advanced surgical techniques for brain and spinal cord tumors, prioritizing functional preservation."
        },
        {
            icon: <Activity className="w-8 h-8 text-accent" />,
            title: "Skull Base Surgery",
            description: "Minimally invasive approaches to complex lesions at the base of the skull."
        },
        {
            icon: <Heart className="w-8 h-8 text-accent" />,
            title: "Patient-Centered Care",
            description: "Compassionate, individualized treatment plans tailored to each patient's unique needs."
        }
    ];

    return (
        <div className="bg-white">
            <Hero />

            {/* Clinical Focus Section */}
            <section className="py-24 bg-surface-alt">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Clinical Focus & Philosophy</h2>
                        <p className="text-slate-600 text-lg">
                            Combining cutting-edge technology with a deep understanding of neuroanatomy to deliver superior surgical outcomes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {focusAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {area.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FeaturedResearch />
        </div>
    );
};

export default Home;
