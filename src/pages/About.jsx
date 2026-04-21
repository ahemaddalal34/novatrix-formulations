import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Target, Lightbulb, Users, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgAbout from '../assets/bg_about.png';

const About = () => {
   return (
      <>
         <Helmet>
            <title>About Us - Top Pharmaceutical Manufacturing Company in India | Novatrix Formulations</title>
            <meta name="description" content="Novatrix Formulations LLP is a WHO-GMP certified leading pharmaceutical company in India specializing in third-party manufacturing and PCD pharma franchise opportunities." />
            <meta name="keywords" content="pharmaceutical company India, WHO-GMP pharma manufacturer, third party manufacturing, PCD pharma franchise, Novatrix Formulations, Dhoraji pharmaceutical" />
            <meta property="og:title" content="About Novatrix Formulations - Leading Pharma Manufacturer" />
            <meta property="og:description" content="Partner with a WHO-GMP certified pharmaceutical leader for manufacturing and franchise opportunities in India." />
         </Helmet>

         {/* Page Header */}
         <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-16 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${bgAbout})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[200px] rounded-full pointer-events-none mt-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3 text-left">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 font-medium"
               >
                  <Breadcrumbs items={[{ name: 'About Us' }]} />
               </motion.div>
               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="text-5xl md:text-7xl font-heading font-bold mb-6 text-slate-900 tracking-tight leading-[1.1]"
               >
                  Pioneering the Future<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 pb-2 inline-block">of Healthcare</span>
               </motion.h1>
               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="text-slate-600 max-w-2xl text-lg md:text-xl font-light leading-relaxed"
               >
                  Committed to quality, driven by innovation, and dedicated to enriching lives globally through advanced pharmaceutical formulations.
               </motion.p>
            </div>
         </div>

         {/* Company Overview */}
         <section className="py-24 bg-white relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col lg:flex-row gap-20 items-center">

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-200 group"
                     >
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-black/20 to-transparent z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Laboratory" className="w-full h-[600px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-xl border border-white p-6 rounded-[24px] shadow-lg transition-transform hover:-translate-y-2 duration-300">
                           <div className="flex items-center gap-4 mb-2">
                              <ShieldCheck className="w-8 h-8 text-primary" />
                              <h4 className="text-3xl font-heading font-bold text-slate-900 leading-none">100%</h4>
                           </div>
                           <p className="text-slate-600 text-sm font-light leading-relaxed">WHO-GMP Certified Quality Manufacturing Standard exclusively enforced globally.</p>
                        </div>
                     </motion.div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:w-1/2 relative z-10">
                     <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                     >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-10 leading-tight">Elevating Global<br />Healthcare Standards</h2>
                        <div className="prose prose-lg text-slate-600 font-light">
                           <p className="text-2xl font-normal text-slate-800 mb-8 leading-relaxed tracking-wide border-l-2 border-primary pl-6 bg-gradient-to-r from-primary/5 to-transparent py-2">
                              Novatrix Formulations LLP is an innovative enterprise dedicated to transcend conventional health paradigms.
                           </p>
                           <p className="mb-6 leading-relaxed">
                              We specialize in the complex manufacturing and strategic marketing of premium, life-saving medicines. Our meticulously curated portfolio spans critical therapeutic segments, ensuring profound care for patients comprehensively.
                           </p>
                           <p className="leading-relaxed">
                              Rooted in unwavering ethics and a relentless pursuit of clinical excellence, we stand as a beacon of reliability. Operating exclusively within robustly certified facilities, every pill promises uncompromised assurance.
                           </p>
                        </div>

                        {/* Micro Stats */}
                        <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-200">
                           <div>
                              <h4 className="text-5xl font-heading font-bold text-slate-900 mb-2 tracking-tighter">50<span className="text-primary">+</span></h4>
                              <p className="text-primary font-medium text-xs tracking-widest uppercase">Premium Formulations</p>
                           </div>
                           <div>
                              <h4 className="text-5xl font-heading font-bold text-slate-900 mb-2 tracking-tighter">99<span className="text-primary">%</span></h4>
                              <p className="text-primary font-medium text-xs tracking-widest uppercase">Global Client Retention</p>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </section>

         {/* Mission Vision Values */}
         <section className="py-24 bg-slate-50 relative">
            <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-primary/10 blur-[200px] rounded-full pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

               <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Our Core Philosophy</h2>
                  <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">The unyielding principles that drive every molecule we manufacture.</p>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Mission - Left Column (large) */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="lg:col-span-1 lg:row-span-2 bg-white p-10 lg:p-14 rounded-[32px] shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-500 flex flex-col group relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-[0.03] transform group-hover:scale-110 transition-transform duration-700">
                        <Target className="w-64 h-64 text-slate-900" />
                     </div>
                     <div className="w-20 h-20 bg-primary/10 border border-primary/20 text-primary rounded-3xl flex items-center justify-center mb-10 relative z-10">
                        <Target className="w-10 h-10" />
                     </div>
                     <h3 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-8 relative z-10">Our Mission</h3>
                     <p className="text-slate-600 font-light leading-relaxed text-lg flex-grow relative z-10">
                        To universally provide incredibly effective, safe, and dramatically affordable medicines that intensely address critical unmet medical needs worldwide. We forcefully strive to elevate quality of life through absolute innovation and an uncompromising dedication to patient wellness across all borders.
                     </p>
                  </motion.div>

                  {/* Vision - Top Right */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                     className="lg:col-span-2 bg-white/90 p-10 lg:p-12 rounded-[32px] shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start gap-10 group backdrop-blur-sm"
                  >
                     <div className="w-20 h-20 shrink-0 bg-primary/10 border border-primary/20 text-primary rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Lightbulb className="w-10 h-10" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-heading font-bold text-slate-900 mb-4">Our Vision</h3>
                        <p className="text-slate-600 font-light leading-relaxed text-lg">
                           To be undeniably acknowledged as the vanguard of global pharmaceutical manufacturing, celebrated for democratizing advanced healthcare solutions and embedding lasting physiological value across all diverse communities globally.
                        </p>
                     </div>
                  </motion.div>

                  {/* Values - Bottom Right (multiple columns) */}
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-white p-10 lg:p-12 rounded-[32px] shadow-sm border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-500 flex flex-col justify-center relative overflow-hidden"
                  >
                     <div className="absolute bottom-0 right-0 p-8 opacity-[0.03] text-slate-900 pointer-events-none">
                        <ShieldCheck className="w-48 h-48" />
                     </div>
                     <h3 className="text-2xl font-heading font-bold text-slate-900 mb-10 flex items-center gap-4 relative z-10">
                        <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                        Our Values
                     </h3>

                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                        <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                           <div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0 shadow-sm"></div>
                           <div>
                              <strong className="block text-slate-900 mb-1 font-medium tracking-wide">Quality Obsession</strong>
                              <span className="text-slate-500 text-sm font-light">Absolute zero compromise in processing.</span>
                           </div>
                        </div>
                        <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                           <div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0 shadow-sm"></div>
                           <div>
                              <strong className="block text-slate-900 mb-1 font-medium tracking-wide">Clinical Integrity</strong>
                              <span className="text-slate-500 text-sm font-light">Unwavering ethical transparency in data.</span>
                           </div>
                        </div>
                        <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                           <div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0 shadow-sm"></div>
                           <div>
                              <strong className="block text-slate-900 mb-1 font-medium tracking-wide">Relentless Innovation</strong>
                              <span className="text-slate-500 text-sm font-light">Continuously driving progressive science.</span>
                           </div>
                        </div>
                        <div className="flex items-start gap-4 hover:-translate-y-1 transition-transform">
                           <div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0 shadow-sm"></div>
                           <div>
                              <strong className="block text-slate-900 mb-1 font-medium tracking-wide">Patient Centricity</strong>
                              <span className="text-slate-500 text-sm font-light">The patient is our singular focal point.</span>
                           </div>
                        </div>
                     </div>
                  </motion.div>

               </div>
            </div>
         </section>

         {/* Commitment */}
         <section className="py-24 bg-white text-slate-900 border-t border-slate-200 overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 blur-[100px] -z-10 rounded-full"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
               <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
               >
                  <Activity className="w-20 h-20 text-primary mx-auto mb-10 filter" />
               </motion.div>
               <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-slate-900">Our Commitment to Quality</h2>
               <p className="text-2xl text-primary font-light leading-relaxed mb-8 font-heading">
                  Quality is the cornerstone of Novatrix.
               </p>
               <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                  From meticulously sourcing the finest active ingredients to enforcing precision in final packaging, every tier of our manufacturing process is heavily scrutinized. We guarantee every formulation bearing the Novatrix insignia is exceptionally safe, exceedingly potent, and unequivocally pure.
               </p>
            </div>
         </section>

         {/* SEO Strategic Capabilities Section */}
         <section className="py-24 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1 relative z-10">
                     <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">Leading Pharma PCD Franchise & Third-Party Manufacturing in India</h2>
                     <div className="prose prose-blue text-slate-600 font-light">
                        <p className="leading-relaxed mb-6">
                           Operating from the pharmaceutical hub of Gujarat <strong className="text-slate-900">Novatrix Formulations LLP</strong> is fundamentally recognized as one of the <em className="not-italic text-primary font-medium">best pharmaceutical manufacturing companies in India</em>. We provide highly sought-after <strong className="text-slate-900">PCD Pharma Franchise</strong> opportunities and lucrative monopoly-based distribution rights to ambitious healthcare professionals across the nation.
                        </p>
                        <p className="leading-relaxed mb-6">
                           Beyond franchise networks, our WHO-GMP certified facilities universally excel in <strong className="text-slate-900">Third-Party Contract Manufacturing</strong>. From complex tablets and advanced capsules to premium syrups and critical injectables, we supply profound grade bulk pharmaceutical formulations.
                        </p>
                        <p className="leading-relaxed">
                           Our stringent QA/QC analysis, fiercely competitive B2B pricing, and robust pan-India logistics networks systematically make us the definitive healthcare partner for reliable bulk medical supplies. Whether you are looking for pharma manufacturing services or a trusted PCD franchise, Novatrix guarantees unparalleled scaling infrastructure.
                        </p>
                     </div>
                  </div>
                  <div className="order-1 md:order-2 grid grid-cols-2 gap-6 relative z-10">
                     <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                        <h4 className="text-primary text-xl font-bold font-heading mb-3">Third-Party Manufacturing</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">End-to-end bulk manufacturing solutions completely backed by dedicated regulatory support and GMP standards.</p>
                     </div>
                     <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm mt-12 hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                        <h4 className="text-primary text-xl font-bold font-heading mb-3">PCD Franchise</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">Monopoly rights, vast product portfolios, and extensive promotional materials for our dedicated franchise partners.</p>
                     </div>
                     <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm -mt-12 hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                        <h4 className="text-primary text-xl font-bold font-heading mb-3">Global Exports</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">Aggressively expanding our international footprint with ethically manufactured and strictly verified medicines.</p>
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300">
                        <h4 className="text-primary text-xl font-bold font-heading mb-3">R&D Innovation</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">Continuous product development and stability testing ensuring the highest market competitiveness.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
};

export default About;
