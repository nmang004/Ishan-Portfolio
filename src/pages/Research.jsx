import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ResearchCard from '../components/ui/ResearchCard';
import { research } from '../data/content';
import { Search } from 'lucide-react';

const Research = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Journal Article', 'Research in Progress', 'Poster/Presentation'];

  const filteredItems = research.filter(item => {
    const matchesFilter = filter === 'All' || item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.authors && item.authors.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.journal.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-surface-alt min-h-screen">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Research & Publications
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Exploring the frontiers of neurosurgery through rigorous scientific inquiry and dissemination.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
                  } `}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search research..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ResearchCard {...item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No research items found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Research;
