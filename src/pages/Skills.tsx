import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div 
          className="bg-primary-600 h-2.5 rounded-full" 
          style={{ width: `${level * 20}%` }}
        />
      </div>
    );
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Habilidades y Tecnologías"
          subtitle="Un resumen detallado de mis competencias técnicas, proyectos y certificaciones"
          centered={true}
        />
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">{category.name}</h3>
                <motion.div 
                  className="space-y-8"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} variants={item} className="border-b border-neutral-200 pb-6 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xl font-semibold text-neutral-800">{skill.name}</span>
                        <span className="text-neutral-600 text-sm">
                          {['Principiante', 'Básico', 'Intermedio', 'Avanzado', 'Experto'][skill.level - 1]}
                        </span>
                      </div>
                      {renderSkillLevel(skill.level)}
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-lg text-primary-700 mb-3">Proyectos Relacionados</h4>
                          <ul className="space-y-3">
                            {skill.projects.map((project, idx) => (
                              <li key={idx} className="bg-neutral-50 p-3 rounded-lg">
                                <p className="font-medium text-neutral-800">{project.name}</p>
                                <p className="text-sm text-neutral-600 mt-1">{project.description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-lg text-primary-700 mb-3">Certificaciones</h4>
                          <ul className="space-y-3">
                            {skill.certifications.map((cert, idx) => (
                              <li key={idx} className="bg-neutral-50 p-3 rounded-lg">
                                <p className="font-medium text-neutral-800">{cert.name}</p>
                                <div className="text-sm text-neutral-600 mt-1">
                                  <p>{cert.issuer}</p>
                                  <p className="mt-1">
                                    <span className="inline-block px-2 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mr-2">
                                      {cert.type}
                                    </span>
                                    <span className="inline-block px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                                      {cert.level}
                                    </span>
                                  </p>
                                  <p className="mt-1">{cert.date}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;