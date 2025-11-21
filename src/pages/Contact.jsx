import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data/content';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="container-custom section-padding">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        For research collaborations, speaking engagements, or clinical inquiries.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-surface-alt p-8 rounded-2xl border border-slate-100">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Email</h4>
                                        <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-accent transition-colors">
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Phone</h4>
                                        <p className="text-slate-600">{personalInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-accent shadow-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Location</h4>
                                        <p className="text-slate-600">{personalInfo.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-serif font-bold mb-4">Open for Collaboration</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                I am always interested in discussing new research opportunities, medical innovation projects, and educational initiatives.
                            </p>
                            <div className="w-full h-px bg-white/10 mb-6" />
                            <p className="text-sm text-slate-400">
                                Response time: Usually within 24-48 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-primary">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg bg-surface-alt border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-primary">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg bg-surface-alt border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-primary">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg bg-surface-alt border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-primary">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg bg-surface-alt border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                >
                                    <option>Research Collaboration</option>
                                    <option>Speaking Inquiry</option>
                                    <option>Clinical Question</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-surface-alt border border-slate-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
