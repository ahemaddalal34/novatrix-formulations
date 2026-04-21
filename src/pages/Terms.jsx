import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileText, AlertCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import bgAbout from '../assets/bg_about.png';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Novatrix Formulations LLP</title>
        <meta name="description" content="Read the terms and conditions of Novatrix Formulations LLP. Legal information regarding our pharmaceutical services and website usage." />
      </Helmet>

      {/* Header */}
      <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-16 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
         <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-multiply" style={{ backgroundImage: `url(${bgAbout})` }}></div>
         <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3">
           <div className="mb-6">
              <Breadcrumbs items={[{ name: 'Terms & Conditions' }]} />
           </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-slate-900 leading-tight tracking-tight">Terms & <span className="text-primary italic">Conditions</span></h1>
          <p className="text-slate-600 text-lg font-light max-w-xl">
             Please read these terms carefully before using our services or accessing our website information.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="prose prose-slate max-w-none">
              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <FileText className="text-primary w-6 h-6" />
                    1. Acceptance of Terms
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light">
                    By accessing or using the website of **Novatrix Formulations LLP**, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, you are not authorized to use the site or its services.
                 </p>
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-primary w-6 h-6" />
                    2. Use of Information
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light mb-4">
                    The medical information provided on this site is for general educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
                 </p>
                 <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl italic text-slate-700 font-light">
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                 </div>
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Scale className="text-primary w-6 h-6" />
                    3. Intellectual Property
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light">
                    All content, including text, graphics, logos, images, and software, is the property of Novatrix Formulations LLP or its content suppliers and is protected by Indian and international copyright and trademark laws. Unauthorized use of any material on this site is strictly prohibited.
                 </p>
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <AlertCircle className="text-primary w-6 h-6" />
                    4. Limitation of Liability
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light mb-4">
                    Novatrix Formulations LLP makes no warranties or representations about the accuracy or completeness of this site's content. We shall not be liable for any direct, incidental, consequential, indirect, or punitive damages arising out of access to or use of any content on this site.
                 </p>
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    5. Product Availability
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light">
                    Our pharmaceutical products are subject to regulatory approvals and may not be available in all geographical areas. Reference to a product on this site does not imply that such product is available in your location.
                 </p>
              </div>

              <div className="mb-12">
                 <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6 flex items-center gap-3">
                    6. Governing Law
                 </h2>
                 <p className="text-slate-600 leading-relaxed font-light">
                    These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Rajkot, Gujarat.
                 </p>
              </div>

              <div className="pt-8 border-t border-slate-200">
                 <p className="text-xs text-slate-400 font-light italic text-center">
                    Last Updated: April 2026
                 </p>
              </div>
           </div>

        </div>
      </section>
    </>
  );
};

export default Terms;
