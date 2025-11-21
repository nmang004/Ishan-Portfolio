import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

const ResearchCard = ({ title, authors, journal, year, status, link, type }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-accent/30 transition-all duration-300 group h-full flex flex-col"
            whileHover={{ y: -5 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    {type || "Publication"}
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
            </div>

            <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-3">
                {title}
            </h3>

            <div className="mt-auto space-y-3">
                {authors && (
                    <p className="text-sm text-slate-600 line-clamp-2">
                        {authors}
                    </p>
                )}

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-50">
                    <div className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="font-medium">{journal}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{year}</span>
                    </div>
                    {status && (
                        <div className="ml-auto font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </motion.a>
    );
};

export default ResearchCard;
