import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, organization, description, type, isLast }) => {
    return (
        <div className="relative flex gap-8 group">
            {/* Line */}
            {!isLast && (
                <div className="absolute left-[11px] top-8 bottom-[-32px] w-px bg-slate-200 group-hover:bg-accent/30 transition-colors" />
            )}

            {/* Dot */}
            <div className="relative flex-shrink-0 mt-1.5">
                <div className="w-6 h-6 rounded-full border-2 border-primary bg-white group-hover:border-accent group-hover:scale-110 transition-all duration-300 z-10 relative" />
                <div className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-150 transition-transform duration-300" />
            </div>

            {/* Content */}
            <div className="pb-12 flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-accent tracking-wider uppercase">{year}</span>
                    {type && (
                        <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs font-medium">
                            {type}
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">{title}</h3>
                <h4 className="text-base font-medium text-slate-600 mb-3">{organization}</h4>
                {description && (
                    <p className="text-slate-500 leading-relaxed max-w-2xl">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

const Timeline = ({ items, title }) => {
    return (
        <div className="mb-16">
            {title && <h2 className="text-2xl font-serif font-bold text-primary mb-8">{title}</h2>}
            <div className="pl-2">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <TimelineItem
                            {...item}
                            isLast={index === items.length - 1}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
