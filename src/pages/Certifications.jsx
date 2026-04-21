import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Award, Activity, ThumbsUp, CheckCircle, Target, Globe, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgCert from '../assets/bg_cert.png';

const Certifications = () => {
  return (
    <>
      <Helmet>
        <title>WHO-GMP & ISO Certifications | Novatrix Formulations LLP Quality Standards</title>
        <meta name="description" content="Explore Novatrix Formulations' clinical certifications including WHO-GMP, ISO 9001:2015, and DCGI approvals. We maintain the highest benchmarks for pharmaceutical manufacturing quality in India." />
        <meta name="keywords" content="WHO-GMP certified pharma, ISO 9001:2015 pharmaceutical company, DCGI approved products, pharma quality assurance india, pharmaceutical manufacturing excellence" />
        <meta property="og:title" content="Certifications & Quality Benchmarks | Novatrix Formulations" />
        <meta property="og:description" content="Discover our commitment to quality through international WHO-GMP and ISO standards." />
      </Helmet>

      {/* Header */}
      <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-16 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
         <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${bgCert})` }}></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Breadcrumbs items={[{ name: 'Certifications' }]} />
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-slate-900 leading-tight">Certifications & <span className="text-primary font-heading italic">Quality Standards</span></h1>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We operate under the most stringent regulatory frameworks to ensure every medication that leaves our plant meets peerless safety and efficacy benchmarks.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Globally Recognized Benchmarks</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-lg">
                 Our facility is regularly audited by international regulatory bodies to maintain our reputation as a leader in **pharmaceutical manufacturing excellence**.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
             {[
               { title: "WHO-GMP Certified", desc: "Rigorous adherence to World Health Organization Good Manufacturing Practices, ensuring safety and clinical consistency across all dosage forms.", icon: ShieldCheck, color: "text-primary" },
               { title: "ISO 9001:2015", desc: "Committed to a robust Quality Management System (QMS) that streamlines every phase of product development and distribution.", icon: Award, color: "text-amber-500" },
               { title: "DCGI Approved", desc: "Full compliance with the Drug Controller General of India guidelines for clinical trials and pharmaceutical manufacturing approvals.", icon: Activity, color: "text-emerald-500" },
               { title: "GLP Standards", desc: "Good Laboratory Practices (GLP) followed in our advanced R&D centers to deliver scientific accuracy in testing.", icon: Microscope, color: "text-purple-500" }
             ].map((cert, idx) => (
                <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="bg-slate-50 p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 border border-slate-200 text-left flex flex-col group"
                >
                   <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 border border-slate-100 shadow-sm ${cert.color} group-hover:scale-110 transition-transform duration-500`}>
                     <cert.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 tracking-tight">{cert.title}</h3>
                   <p className="text-slate-600 font-light text-sm leading-relaxed mb-4">{cert.desc}</p>
                   <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More <Globe className="w-3 h-3" />
                   </div>
                </motion.div>
             ))}
           </div>

           <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8 leading-tight">Total Quality Management <span className="text-primary">(TQM)</span> Framework</h2>
                  <p className="text-slate-600 font-light text-lg mb-6 leading-relaxed">
                     Our commitment to **High-Quality Pharmaceutical Manufacturing** is reinforced by our extensive TQM framework. We ensure that every tablet, injectable, and syrup undergoes multi-level screening before reaching the healthcare market.
                  </p>
                  <ul className="space-y-4">
                     {[
                        "Rigorous Raw Material Validation",
                        "In-Process Quality Checks (IPQC)",
                        "Stability Testing & Shelf-life Analysis",
                        "Post-Marketing Surveillance Compliance"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                           <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              <CheckCircle className="w-3 h-3" />
                           </div>
                           {item}
                        </li>
                     ))}
                  </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-10 md:p-14 rounded-[40px] relative overflow-hidden text-white shadow-2xl"
              >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full"></div>
                  <h2 className="text-3xl font-heading font-bold mb-6 relative z-10">Our Regulatory Pledge</h2>
                  <p className="text-white/70 font-light text-lg leading-relaxed mb-8 relative z-10">
                     At Novatrix Formulations LLP, certifications are not just milestones; they are our **Pledge to Patient Safety**. Every process meets the global benchmarks required for reliable healthcare therapy.
                  </p>
                  <div className="grid grid-cols-2 gap-6 relative z-10">
                     <div className="border-l border-white/20 pl-6">
                        <span className="block text-3xl font-bold mb-1">100%</span>
                        <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Compliance Rate</span>
                     </div>
                     <div className="border-l border-white/20 pl-6">
                        <span className="block text-3xl font-bold mb-1">Zero</span>
                        <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Defect Goal</span>
                     </div>
                  </div>
              </motion.div>
           </div>

           {/* New Section: The Quality Journey */}
           <div className="mt-32">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">The Quality Journey: <span className="text-primary italic">Source to Success</span></h2>
                 <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed text-lg text-balance">
                    Our multi-stage quality control protocol ensures that every formulation adheres to international clinical standards.
                 </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { step: "01", title: "Raw Material Testing", desc: "Rigorous biological and chemical assay testing of all active ingredients before processing." },
                    { step: "02", title: "In-Process Control", desc: "Real-time monitoring of granulation, compression, and coating parameters." },
                    { step: "03", title: "Stability Studies", desc: "Accelerated and real-time stability testing to ensure shelf-life efficacy." },
                    { step: "04", title: "Final Validation", desc: "Comprehensive clinical validation and microbial testing before the final dispatch." }
                 ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative p-8 bg-slate-50 rounded-[32px] border border-slate-200 group hover:bg-white hover:shadow-lg transition-all"
                    >
                       <span className="text-5xl font-heading font-black text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors uppercase italic">{item.step}</span>
                       <h4 className="text-lg font-heading font-bold text-slate-900 mb-3 relative z-10">{item.title}</h4>
                       <p className="text-slate-500 text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* New Section: R&D and Instrumentation */}
           <div className="mt-32 bg-slate-50 rounded-[48px] p-8 md:p-16 border border-slate-200 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1579154212601-f258c17a3b2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.03] grayscale"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                 >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight tracking-tight">Advanced R&D & <span className="text-primary italic">Testing Instrumentation</span></h2>
                    <p className="text-slate-600 font-light text-lg mb-8 leading-relaxed">
                       Our certifications are backed by a state-of-the-art laboratory environment, equipped with the latest **analytical instrumentation** to detect even the smallest discrepancies.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                          "HPLC & Gas Chromatography",
                          "UV-Vis Spectrophotometry",
                          "FTIR Analysis",
                          "Dissolution Testing Apparatus",
                          "Microbiological Assays",
                          "Stability Chambers"
                       ].map((tech, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                             {tech}
                          </div>
                       ))}
                    </div>
                 </motion.div>
                 
                 <div className="relative group overflow-hidden rounded-[32px] shadow-2xl border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1581093192536-1e4e13768f53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Testing Lab" className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                 </div>
              </div>
           </div>

           {/* New Section: Regulatory Alignment */}
           <div className="mt-32 text-center pb-12">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                 <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8 opacity-40" />
                 <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6 tracking-tight">Alignment with Global Regulatory Bodies</h2>
                 <p className="text-slate-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                    Novatrix Formulations LLP proactively aligns its manufacturing protocols with several global regulatory guidelines, ensuring that our **Third-Party Pharma Manufacturing** and **PCD Franchise** partners can trade with absolute confidence in both domestic and international markets.
                 </p>
                 <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                    <span className="text-xl font-heading font-bold tracking-widest text-slate-600">WHO</span>
                    <span className="text-xl font-heading font-bold tracking-widest text-slate-600">UNICEF</span>
                    <span className="text-xl font-heading font-bold tracking-widest text-slate-600">MSF</span>
                    <span className="text-xl font-heading font-bold tracking-widest text-slate-600">MOH</span>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
