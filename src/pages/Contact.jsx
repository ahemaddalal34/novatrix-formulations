import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import bgContact from '../assets/bg_contact.png';
import { submitToGoogleSheets } from '../utils/googleSheets';

const ContactSchema = Yup.object().shape({
   name: Yup.string().required('Name is required'),
   phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Phone is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   message: Yup.string().required('Message is required')
});

const Contact = () => {
   return (
      <>
         <Helmet>
            <title>Contact Us | Novatrix Formulations LLP - Enquiry & Partnerships</title>
            <meta name="description" content="Reach out to Novatrix Formulations LLP for PCD Pharma Franchise inquiries, Third-Party Manufacturing, and export consultations. Located in Dhoraji, Rajkot, we serve global healthcare partners." />
            <meta name="keywords" content="pharma contact rajkot, pcd pharma franchise enquiry, third party manufacturing india contact, pharmaceutical export helpdesk, novatrix formulations dhoraji" />
            <meta property="og:title" content="Contact Novatrix Formulations | Pharmaceutical Manufacturing Excellence" />
            <meta property="og:description" content="Connect with our experts in Rajkot for specialized pharmaceutical partnership queries and distribution opportunities." />
         </Helmet>

         {/* Header */}
         <div className="bg-slate-50 mt-32 mb-12 mx-4 xl:mx-auto max-w-7xl py-16 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: `url(${bgContact})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:w-2/3">
               <div className="mb-6">
                  <Breadcrumbs items={[{ name: 'Contact Us' }]} />
               </div>
               <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-slate-900 leading-tight">Get in Touch with <span className="text-primary italic">Our Experts</span></h1>
               <p className="text-slate-600 text-lg font-light max-w-xl">
                  Whether you are looking for **PCD Pharma Franchise opportunities** or **Third-Party Manufacturing** solutions, our team is ready to assist you in scaling your healthcare business.
               </p>
            </div>
         </div>

         <section className="py-20 bg-white relative -mt-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="bg-slate-50 rounded-[32px] shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row relative z-20">

                  {/* Left Contact Info */}
                  <div className="w-full lg:w-2/5 p-10 lg:p-14 relative overflow-hidden bg-slate-50 border-r border-slate-200">
                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
                     <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4 relative z-10">Get in Touch</h2>
                     <p className="text-slate-600 font-light mb-10 relative z-10 leading-relaxed">
                        We are here to help you. Reach out to us for enquiries, partnerships or product information.
                     </p>

                     <div className="space-y-8 relative z-10">
                        <div className="flex items-start gap-5">
                           <div className="bg-white border border-slate-200 text-primary p-3.5 rounded-2xl shadow-sm">
                              <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-heading font-semibold text-slate-800 mb-1">Address</h4>
                              <p className="text-slate-500 text-sm leading-relaxed font-light">GF, NO. 2, SR.NO. 561P1, Plot No. 2,<br />JAMNAVAD ROAD,<br />AT.TA. DHORAJI, RAJKOT - 360410</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-5">
                           <div className="bg-white border border-slate-200 text-primary p-3.5 rounded-2xl shadow-sm">
                              <Phone className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-heading font-semibold text-slate-800 mb-1">Phone</h4>
                              <p className="text-slate-500 text-sm font-light">+91 94281 26738</p>
                           </div>
                        </div>

                        <div className="flex items-start gap-5">
                           <div className="bg-white border border-slate-200 text-primary p-3.5 rounded-2xl shadow-sm">
                              <Mail className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="font-heading font-semibold text-slate-800 mb-1">Email</h4>
                              <p className="text-slate-500 text-sm font-light">info@novatrixformulations.com</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Form */}
                  <div className="w-full lg:w-3/5 p-10 lg:p-14 border-t lg:border-t-0 bg-white">

                     <Formik
                        initialValues={{ name: '', phone: '', email: '', message: '' }}
                        validationSchema={ContactSchema}
                        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                           const result = await submitToGoogleSheets(values, 'Contact Request');
                           
                           if (result.success) {
                              // Reset form but explicitly preserve the success status
                              resetForm({
                                 values: { name: '', phone: '', email: '', message: '' },
                                 status: { success: true, message: 'Your inquiry has been sent successfully! Our team will reach out to you shortly.' }
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
                           <Form className="space-y-6">
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
                              <div>
                                 <Field type="text" name="name" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                                 <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                                    <Field type="text" name="phone" placeholder="Phone Number" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                                 </div>
                                 <div>
                                    <Field type="email" name="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors shadow-inner" />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                                 </div>
                              </div>

                              <div>
                                 <Field as="textarea" rows="5" name="message" placeholder="Your Message" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 placeholder-slate-400 transition-colors resize-none shadow-inner" />
                                 <ErrorMessage name="message" component="div" className="text-red-500 text-xs mt-1 font-medium px-1" />
                              </div>

                              <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className={`w-full text-white font-semibold py-4 rounded-xl shadow-md transition-all active:scale-[0.98] text-lg flex items-center justify-center gap-2 ${isSubmitting ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-secondary'}`}
                              >
                                 {isSubmitting ? (
                                    <>
                                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                       Please wait (10s)...
                                    </>
                                 ) : 'Send Inquiry'}
                              </button>
                           </Form>
                        )}
                     </Formik>

                  </div>
               </div>
            </div>
         </section>

         {/* New Section: Departmental Contacts & FAQ */}
         <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                  {/* Departmental Info */}
                  <div className="lg:col-span-1">
                     <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Regional Support</h2>
                     <p className="text-slate-500 font-light mb-8 leading-relaxed">
                        Our logistics and supply chain network covers the entire Indian subcontinent and several international markets.
                     </p>
                     <div className="space-y-6">
                        {[
                           { dept: "PCD Franchise Dept.", email: "pcd@novatrixformulations.com" },
                           { dept: "Export Queries", email: "export@novatrixformulations.com" },
                           { dept: "Institutional Sales", email: "sales@novatrixformulations.com" }
                        ].map((item, i) => (
                           <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200">
                              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">{item.dept}</h4>
                              <p className="text-primary text-sm font-medium">{item.email}</p>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="lg:col-span-2">
                     <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">Frequently Asked <span className="text-primary italic">Inquiries</span></h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                           { q: "What is the turnaround time for manufacturing?", a: "Depending on the dosage form and order volume, our standard lead time is 25-30 days after design approval." },
                           { q: "Do you provide promotional material for franchises?", a: "Yes, we provide high-quality visual aids, LBLs, catch covers, and other promotional tools to all our PCD partners." },
                           { q: "Are all your products DCGI approved?", a: "Absolutely. Every formulation in our catalog is strictly audited and approved by the Drug Controller General of India (DCGI)." },
                           { q: "How can I check sample availability?", a: "Please fill out the contact form with your specific requirements, and our sales team will coordinate for samples." }
                        ].map((faq, i) => (
                           <div key={i} className="p-6">
                              <h4 className="font-heading font-bold text-slate-900 mb-3 flex items-center gap-3">
                                 <span className="w-2 h-2 rounded-full bg-primary" />
                                 {faq.q}
                              </h4>
                              <p className="text-slate-500 text-sm font-light leading-relaxed">{faq.a}</p>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Map Section */}
         <section className="w-full h-[500px] relative">
            <iframe
               title="Address Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14828.98399581636!2d70.4298088!3d21.7262367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581e1bd4fe1c71%3A0x814c3799aa6f3a51!2sJamnavad%20Rd!5e0!3m2!1sen!2sin!4v1713426573357!5m2!1sen!2sin"
               className="w-full h-full border-0 absolute inset-0 contrast-110 opacity-90"
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </section>
      </>
   );
};

export default Contact;
