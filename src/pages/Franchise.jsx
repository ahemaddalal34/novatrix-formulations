import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ShieldCheck, Truck, BarChart3, Clock, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgContact from '../assets/bg_contact.png';
import { submitToGoogleSheets } from '../utils/googleSheets';

const FranchiseSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  city: Yup.string().required('City/State is required'),
  message: Yup.string().required('Message is required')
});

const Franchise = () => {
  return (
    <>
      <Helmet>
        <title>PCD Pharma Franchise Opportunities | Novatrix Formulations LLP</title>
        <meta name="description" content="Join the best PCD Pharma Franchise in India with Novatrix Formulations LLP. We offer monopoly rights, high-quality pharmaceutical products, and extensive marketing support for franchise partners." />
        <meta name="keywords" content="pcd pharma franchise india, pharma franchise monopoly rights, best pcd pharma company, pharmaceutical business opportunities, pharma franchise dehradun" />
        <meta property="og:title" content="Partner with Novatrix - Profitable PCD Pharma Franchise" />
        <meta property="og:description" content="Explore monopoly-based pharmaceutical franchise opportunities with comprehensive promotional support and high margins." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-24 rounded-3xl text-slate-900 overflow-hidden border border-slate-200 shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40" style={{ backgroundImage: `url(${bgContact})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[200px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6">
              <Breadcrumbs items={[{ name: 'Franchise' }]} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-balance text-slate-900 leading-tight">
               Your Future in <span className="text-primary italic">Pharmaceuticals</span> Starts Here
            </h1>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
               Partner with a **WHO-GMP certified** leader and launch your own **PCD Pharma Franchise** with exclusive monopoly rights and a peerless product portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Left Details */}
              <div className="w-full lg:w-1/2">
                 <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">Why Partner With Us?</h2>
                 <p className="text-slate-600 font-light mb-8 max-w-lg leading-relaxed">
                   We invite dedicated professionals to join our expanding network. As a Novatrix PCD franchise partner, you leverage our brand equity and robust manufacturing facilities.
                 </p>
                 <ul className="space-y-6">
                    {[
                      { title: 'Monopoly Based PCD Franchise Rights', icon: ShieldCheck },
                      { title: 'Wide Range of Quality Products', icon: Truck },
                      { title: 'Marketing & Promotional Support', icon: BarChart3 },
                      { title: 'Attractive Profit Margins', icon: DollarSign },
                      { title: 'Timely Supply & Customer Support', icon: Clock }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                         <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-full text-primary shrink-0 mt-0.5 shadow-sm">
                            <item.icon className="w-4 h-4" />
                         </div>
                         <div>
                            <h4 className="font-heading font-semibold text-slate-800">{item.title}</h4>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* Right Form */}
              <div className="w-full lg:w-1/2">
                 <div className="bg-slate-50 p-8 md:p-10 rounded-[32px] shadow-sm border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900 mb-6">Apply for PCD Franchise</h3>
                    
                    <Formik
                      initialValues={{ name: '', phone: '', email: '', city: '', message: '' }}
                      validationSchema={FranchiseSchema}
                      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                        const result = await submitToGoogleSheets(values, 'Franchise Application');
                        
                        if (result.success) {
                           // Reset form but explicitly preserve the success status
                           resetForm({
                              values: { name: '', phone: '', email: '', city: '', message: '' },
                              status: { success: true, message: 'Application submitted successfully! Our team will contact you soon.' }
                           });
                        } else {
                           setStatus({ success: false, message: 'Submission failed. Please check your connection and try again.' });
                        }
                        
                        // Keep button disabled for 10 seconds to prevent duplicates
                        setTimeout(() => {
                           setSubmitting(false);
                        }, 10000);
                      }}
                    >
                      {({ isSubmitting, status }) => (
                        <Form className="space-y-5">
                          {status && status.message && (
                            <motion.div 
                               initial={{ opacity: 0, scale: 0.95 }}
                               animate={{ opacity: 1, scale: 1 }}
                               className={`p-4 rounded-2xl text-sm font-semibold flex items-center gap-3 shadow-lg border ${status.success ? 'bg-emerald-600 text-white border-emerald-500' : 'bg-rose-600 text-white border-rose-500'}`}
                            >
                               {status.success ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                               {status.message}
                            </motion.div>
                          )}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                               <Field type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                               <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                            </div>
                            <div>
                               <Field type="text" name="phone" placeholder="Phone Number" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                               <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                               <Field type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                               <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                            </div>
                            <div>
                               <Field type="text" name="city" placeholder="City / State" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                               <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                            </div>
                          </div>

                          <div>
                             <Field as="textarea" rows="4" name="message" placeholder="Message" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors resize-none shadow-inner" />
                             <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                          </div>

                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`w-full text-white font-semibold py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'}`}
                          >
                            {isSubmitting ? (
                               <>
                                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                  Please wait (10s)...
                               </>
                            ) : 'Submit Application'}
                          </button>
                        </Form>
                      )}
                    </Formik>
                 </div>
              </div>

           </div>
        </div>
      </section>
      {/* New Section: Product Segments & Support */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               {/* Product Segments */}
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8">Therapeutic Segments for <span className="text-primary">Franchise</span></h2>
                  <p className="text-slate-600 font-light text-lg mb-10 leading-relaxed">
                     We provide a comprehensive range of formulations across multiple therapeutic areas, ensuring you can meet all regional healthcare demands as a solo distributor.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {[
                        "Anti-Infectives & Antibiotics",
                        "Gastroenterology & PPIs",
                        "Pediatric & Multi-vitamins",
                        "Orthopedic & Pain Management",
                        "Cardiovascular & Diabetic Range",
                        "Neuropsychiatry & Wellness"
                     ].map((segment, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-primary/30 transition-all">
                           <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                           <span className="text-sm font-medium text-slate-800">{segment}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Marketing Materials */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="bg-slate-900 p-10 md:p-14 rounded-[48px] text-white relative overflow-hidden shadow-2xl"
               >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full"></div>
                  <h2 className="text-3xl font-heading font-bold mb-6 relative z-10 text-white">Promotional Support Kit</h2>
                  <p className="text-white/70 font-light mb-8 relative z-10">
                     We equip our partners with high-end marketing tools to establish a strong presence in the medical community.
                  </p>
                  <ul className="space-y-4 relative z-10">
                     {[
                        "Visual Aids & Product Folders",
                        "Laminated Catch Covers & Glossy Cards",
                        "Prescription Pads & Visiting Cards",
                        "Branded Gifts & M.R. Bags",
                        "Sample Packs for Clinical Trials"
                     ].map((tool, i) => (
                        <li key={i} className="flex items-center gap-4 text-white/80 text-sm font-medium">
                           <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                              <ShieldCheck className="w-3.5 h-3.5" />
                           </div>
                           {tool}
                        </li>
                     ))}
                  </ul>
               </motion.div>
            </div>
         </div>
      </section>

      {/* New Section: Partnership Process */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Partnering with Us: <span className="text-primary italic">A Simple Process</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
               Launching your pharmaceutical business with Novatrix is a streamlined and transparent experience designed for rapid growth.
            </p>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                  { step: "01", title: "Inquiry & Territory", desc: "Submit your inquiry for your preferred territory and product range." },
                  { step: "02", title: "Agreement & Rights", desc: "Formalize the monopoly rights agreement for your designated area." },
                  { step: "03", title: "Order Selection", desc: "Choose your initial stock from our diverse portfolio of 100+ molecules." },
                  { step: "04", title: "Launch Support", desc: "Receive your stock and promotional kit to begin your market operations." }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl font-black text-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-500 mb-6 italic">
                        {item.step}
                     </div>
                     <h4 className="text-lg font-heading font-bold text-slate-900 mb-3">{item.title}</h4>
                     <p className="text-slate-500 text-sm font-light leading-relaxed">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
};

export default Franchise;
