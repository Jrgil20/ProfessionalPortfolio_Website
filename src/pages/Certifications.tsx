import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import SearchBar from '../components/ui/SearchBar';
import FilterButton from '../components/ui/FilterButton';
import { certificationsData, providers, Certification } from '../data/certificationsData';
import { Calendar, ExternalLink } from 'lucide-react';

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('es-ES', { 
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

const Certifications = () => {
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState<Certification | null>(null);
  
  const filteredCertifications = certificationsData.filter((cert) => {
    const matchesProvider = selectedProvider === 'All' || cert.provider === selectedProvider;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesProvider && matchesSearch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleViewCertificate = (certificateUrl: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Evitar que se abra el modal solo si el evento existe
    }
    window.open(certificateUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Certifications"
            subtitle="Professional certifications and courses that have enhanced my skills and knowledge"
            centered={true}
          />
          
          <div className="mt-10 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="order-2 sm:order-1 overflow-x-auto py-2">
                <div className="flex space-x-3">
                  {providers.map((provider) => (
                    <FilterButton
                      key={provider}
                      active={selectedProvider === provider}
                      label={provider}
                      onClick={() => setSelectedProvider(provider)}
                    />
                  ))}
                </div>
              </div>
              <div className="order-1 sm:order-2">
                <SearchBar 
                  placeholder="Search certifications..."
                  onSearch={handleSearch}
                />
              </div>
            </div>
          </div>
          
          <AnimatePresence>
            <motion.div
              layout
              className="certificate-grid"
            >
              {filteredCertifications.length > 0 ? (
                filteredCertifications.map((certificate) => (
                  <motion.div
                    key={certificate.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="card group hover:shadow-lg"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <span className="inline-block px-2 py-1 bg-secondary-600 rounded-full text-xs font-medium mb-2">
                            {certificate.provider}
                          </span>
                          <h3 className="font-bold text-lg line-clamp-2">{certificate.title}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-neutral-600 text-sm mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{formatDate(certificate.date)}</span>
                      </div>
                      <p className="text-neutral-700 line-clamp-2 mb-3">{certificate.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700"
                          >
                            {skill}
                          </span>
                        ))}
                        {certificate.skills.length > 3 && (
                          <span className="inline-block px-2 py-1 bg-neutral-100 rounded-full text-xs font-medium text-neutral-700">
                            +{certificate.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-4 pt-0 flex justify-end">
                      {certificate.certificateUrl && (
                        <button
                          onClick={(e) => handleViewCertificate(certificate.certificateUrl!, e)}
                          className="inline-flex items-center text-sm text-secondary-600 hover:text-secondary-800 font-medium"
                        >
                          Ver Certificado <ExternalLink size={14} className="ml-1" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-12 text-center">
                  <p className="text-neutral-600 text-lg">No certifications found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSelectedProvider('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div className="h-64 overflow-hidden rounded-t-xl">
                <img
                  src={selectedCertificate.imageUrl}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              <button
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
                onClick={() => setSelectedCertificate(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-secondary-600 text-white rounded-full text-sm font-medium">
                      {selectedCertificate.provider}
                    </span>
                    <div className="flex items-center text-neutral-600">
                      <Calendar size={16} className="mr-1" />
                      <span>{formatDate(selectedCertificate.date)}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{selectedCertificate.title}</h3>
                  <p className="text-neutral-700 mb-6">{selectedCertificate.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-3">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1.5 bg-neutral-100 rounded-full text-sm font-medium text-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedCertificate.certificateUrl && (
                    <div className="flex justify-center mt-8">
                      <button
                        onClick={() => handleViewCertificate(selectedCertificate.certificateUrl!)}
                        className="px-6 py-3 bg-secondary-600 hover:bg-secondary-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center"
                      >
                        Ver Certificado Original <ExternalLink size={16} className="ml-2" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Certifications;