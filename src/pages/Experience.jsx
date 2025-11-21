import { motion } from 'framer-motion';
import Timeline from '../components/ui/Timeline';
import { education, experience, community, affiliations } from '../data/content';

const Experience = () => {
  // Transform data to match TimelineItem props
  const educationItems = education.map(item => ({
    year: item.year,
    title: item.degree,
    organization: item.institution,
    description: item.details,
    type: "Education"
  }));

  const experienceItems = experience.map(item => ({
    year: item.period,
    title: item.role,
    organization: item.organization,
    description: item.description,
    type: item.type
  }));

  const communityItems = community.map(item => ({
    year: item.period,
    title: item.role,
    organization: item.organization,
    description: item.description,
    type: "Service"
  }));

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Experience & Education
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A timeline of my academic journey, clinical training, and professional contributions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Timeline title="Education" items={educationItems} />
          <Timeline title="Professional Experience" items={experienceItems} />
          <Timeline title="Community Service & Leadership" items={communityItems} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">Professional Affiliations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {affiliations.map((affiliation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{affiliation}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
