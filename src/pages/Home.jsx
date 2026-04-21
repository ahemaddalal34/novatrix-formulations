import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, ThumbsUp, Activity, ArrowRight, Microscope, Pill, Syringe, GlassWater, MapPin, Phone } from 'lucide-react';
import heroImg from '../assets/hero.png';
import bgAbout from '../assets/bg_about.png';
import syrupImg from '../assets/syrup.png';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 overflow-hidden relative text-slate-900 bg-white">
      <Helmet>
        <title>Novatrix Formulations | Best PCD Pharma Franchise & Third Party Manufacturing in India</title>
        <meta name="description" content="Novatrix Formulations LLP is India's leading WHO-GMP certified pharmaceutical manufacturer offering premium third-party contract manufacturing and monopoly PCD pharma franchises." />
        <meta name="keywords" content="pharma franchise company, third party pharma manufacturing india, WHO-GMP manufacturers, top pharma companies in india, PCD pharma franchise" />
        <meta property="og:title" content="Novatrix Formulations | Leading Pharma Manufacturer in India" />
        <meta property="og:description" content="Premium third-party contract manufacturing and PCD pharma franchises from a WHO-GMP certified Indian clinical leader." />
      </Helmet>

      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Top Image Banner */}
      <div className="bg-slate-50 mt-4 mb-16 mx-4 xl:mx-auto max-w-7xl py-20 rounded-3xl text-slate-900 relative border border-slate-200 overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.65] mix-blend-multiply" style={{ backgroundImage: `url(${bgAbout})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-transparent"></div>
        <div className="relative z-10 w-full lg:w-2/3 px-8 lg:px-16 flex flex-col justify-center h-full">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="inline-flex gap-3 mb-6">
            <span className="px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-semibold tracking-wide shadow-sm flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-emerald-400" /> WHO-GMP Certified</span>
            <span className="px-3 md:px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-semibold shadow-sm tracking-wide">ISO 9001:2015</span>
          </motion.div>
          <motion.h2 variants={fadeUp} initial="hidden" animate="visible" className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Innovating Healthcare.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Empowering Lives.</span>
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-slate-600 text-lg md:text-xl font-light mb-10 max-w-xl leading-relaxed">
            Delivering high-quality pharmaceutical solutions worldwide with a commitment to innovation, safety, and excellence.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-4">
            <Link to="/products" className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full shadow-[0_10px_20px_-10px_rgba(14,165,233,0.5)] transition-all font-semibold inline-flex items-center gap-2 hover:scale-105">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/franchise" className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-3.5 rounded-full transition-all font-semibold shadow-sm hover:scale-105">
              Become a Partner
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 lg:my-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <motion.div variants={fadeUp} className="px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-6 hover:bg-slate-50 transition-colors">
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Top Pharma Manufacturer in India</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight text-balance">
              Pioneering Clinical<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">Excellence Globally.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-10 max-w-lg font-light leading-relaxed">
              Partner with India's leading WHO-GMP certified pharmaceutical manufacturer. We specialize in premium <strong className="text-slate-900 font-medium">Third-Party Manufacturing</strong> and monopoly-based <strong className="text-slate-900 font-medium">PCD Pharma Franchises</strong> to elevate healthcare access nationwide.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/products" className="bg-primary hover:bg-secondary text-white px-8 py-3.5 rounded-full shadow-[0_10px_30px_-5px_rgba(14,165,233,0.4)] transition-all font-semibold inline-flex items-center gap-2 hover:scale-105">
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/franchise" className="border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 px-8 py-3.5 rounded-full transition-all font-semibold shadow-sm hover:scale-105">
                Become a Partner
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 border-[1px] border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 border-[1px] border-primary/20 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8 bg-white/50 rounded-full backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(14,165,233,0.2)]">
                <img src={syrupImg} alt="Novatrix Syrup Bottle" className="relative z-10 object-contain h-4/5 hover:scale-110 transition-transform duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="border-y border-slate-200 bg-slate-50 py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-10 md:gap-20"
          >
            {[
              { icon: ShieldCheck, text: "WHO-GMP Certified" },
              { icon: Award, text: "ISO 9001:2015 Certified" },
              { icon: Activity, text: "DCGI Approved" },
              { icon: ThumbsUp, text: "Quality Assured" }
            ].map((cert, idx) => (
              <motion.div variants={fadeUp} key={idx} className="flex items-center gap-4 group">
                <div className="bg-white p-3 rounded-full border border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-primary/30 transition-all">
                  <cert.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-heading font-medium tracking-wide text-sm md:text-base text-slate-700">{cert.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid: About */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Committed to Quality,<br /><span className="text-slate-400">Driven by Innovation</span></h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light">Novatrix Formulations LLP is dedicated to manufacturing and marketing high-quality, affordable medicines that improve lives across India.</p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main feature box */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-white border border-slate-200 rounded-[32px] p-10 relative overflow-hidden group hover:border-primary/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.1)] transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity"><Microscope className="w-48 h-48 text-slate-900" /></div>
            <div className="relative z-10">
              <div className="bg-slate-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-slate-200 text-primary">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 text-lg font-light max-w-md">To provide effective, safe, and affordable medicines to patients while adhering to the highest global quality standards.</p>
            </div>
          </motion.div>

          {/* Side box 1 */}
          <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:border-primary/30 transition-all hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.1)] flex flex-col justify-between">
            <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 border border-slate-200 text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 text-base font-light">To be a trusted and leading HealthTech and Pharma provider in India.</p>
            </div>
          </motion.div>

          {/* Side box 2 */}
          <motion.div variants={fadeUp} className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:border-primary/30 transition-all hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.1)] flex flex-col justify-between">
            <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 border border-slate-200 text-primary">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">Our Values</h3>
              <p className="text-slate-600 text-base font-light">Quality, Integrity, Innovation & strict Customer Focus.</p>
            </div>
          </motion.div>

          {/* Large Image Box */}
          <motion.div variants={fadeUp} className="md:col-span-2 bg-slate-900 rounded-[32px] overflow-hidden relative min-h-[300px] h-full group transition-all shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
            <img src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Lab Scientist" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-2xl font-bold text-white mb-2">State-of-the-Art Labs</h3>
              <p className="text-white/80 font-light">Equipped with highly advanced analytical instrumentation.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid: Products */}
      <section className="py-24 relative overflow-hidden text-center bg-slate-50 border-t border-slate-200">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Our Core Products</h2>
            <p className="text-slate-600 font-light text-lg">Delivering high-quality formulations across specialized segments</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { name: 'Injectables', icon: Syringe, desc: 'Premium sterile injections ensuring rapid action and safety.', img: 'https://placehold.co/300x300/e2e8f0/0f172a?text=VIAL' },
              { name: 'Tablets & Capsules', icon: Pill, desc: 'Highly bioavailable oral solid dosage forms.', img: 'https://placehold.co/300x300/e2e8f0/0f172a?text=PILLS' },
              { name: 'Syrups', icon: GlassWater, desc: 'Paediatric therapies formulated with care.', img: syrupImg }
            ].map((cat, idx) => (
              <motion.div variants={fadeUp} key={idx} className="bg-white border border-slate-200 p-8 rounded-[32px] hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.15)] hover:border-primary/30 transition-all duration-300 group flex flex-col items-center shadow-sm">
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 text-primary rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <cat.icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                </div>
                <img src={cat.img} alt={cat.name} className="w-40 h-40 object-contain mb-8 group-hover:-translate-y-4 transition-transform duration-500 drop-shadow-xl rounded-full border border-slate-100" />
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 text-center tracking-tight">{cat.name}</h3>
                <p className="text-slate-600 text-sm text-center font-light leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-16 text-center">
            <Link to="/products" className="inline-flex items-center bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-8 py-3.5 rounded-full shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] transition-all font-semibold hover:scale-105">
              View Full Catalog <ArrowRight className="ml-2 w-4 h-4 text-primary" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* High-SEO Capabilities Section */}
      <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 blur-[200px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="prose prose-lg text-slate-600 font-light pr-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-8 leading-tight">Your Trusted Partner for Contract Pharma Manufacturing in India</h2>
              <p className="leading-relaxed mb-6">
                As one of the fastest-growing <strong className="text-slate-900 font-medium">pharmaceutical companies in Dhoraji, Gujarat, India</strong>, Novatrix Formulations LLP brings unparalleled expertise to the table. Our state-of-the-art facilities strictly adhere to World Health Organization Good Manufacturing Practices (<strong className="text-slate-900 font-medium">WHO-GMP</strong>), assuring absolute product safety and clinical efficacy for every manufactured dosage.
              </p>
              <p className="leading-relaxed mb-6">
                We proudly offer highly profitable <strong className="text-slate-900 font-medium">PCD Pharma Franchise</strong> opportunities with sweeping monopoly rights. Our franchise partners benefit seamlessly from high-margin products, marketing collateral, and continuous logistical support, empowering them to rapidly dominate their local healthcare markets.
              </p>
              <p className="leading-relaxed">
                Additionally, our specialized <strong className="text-primary font-medium">Third-Party Manufacturing</strong> division expertly handles massive scale bulk production. If you need flawless, end-to-end manufacturing for tablets, syrups, drops, or injectables under your own label, Novatrix delivers on strict deadlines with uncompromising scientific rigor.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { stat: "WHO-GMP", label: "Certified Facilities" },
                { stat: "500+", label: "Target Formulations" },
                { stat: "A-Grade", label: "Third-Party Mfg." },
                { stat: "100%", label: "Monopoly PCD" }
              ].map((block, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-slate-50 p-8 rounded-[32px] border border-slate-200 shadow-sm flex flex-col items-start hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)] transition-all duration-300">
                  <h4 className="text-3xl font-heading font-bold text-primary mb-3 tracking-tight">{block.stat}</h4>
                  <span className="text-slate-500 font-medium text-sm uppercase tracking-widest">{block.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] border border-slate-200 bg-white">

          {/* Left Panel: Why Choose Novatrix */}
          <div className="w-full lg:w-[60%] bg-gradient-to-br from-slate-50 to-white p-10 lg:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-3 tracking-tight">Why Choose Novatrix?</h2>
              <p className="text-slate-600 font-light mb-10 max-w-md leading-relaxed">We are committed to excellence in every product we deliver.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, text: "WHO-GMP Certified Plant" },
                { icon: Activity, text: "Premium Quality Formulations" },
                { icon: Pill, text: "Wide Product Range" },
                { icon: MapPin, text: "Strong Distribution Network" },
                { icon: Award, text: "Attractive PCD Franchise Opportunity" },
                { icon: Phone, text: "Timely Supply & Customer Support" }
              ].map((item, idx) => (
                <motion.div variants={fadeUp} key={idx} className="bg-white border border-slate-200 hover:bg-slate-50 hover:border-primary/40 transition-all duration-300 p-4 rounded-2xl flex items-center gap-4 group cursor-default shadow-sm hover:shadow-md">
                  <div className="bg-slate-100 p-2.5 rounded-xl border border-slate-200 group-hover:scale-110 transition-transform text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Panel: Partner With Us */}
          <div className="w-full lg:w-[40%] relative flex flex-col justify-center p-10 lg:p-14 min-h-[500px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-[#0f172a]/95 backdrop-blur-[1px]"></div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative z-10 h-full flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4 tracking-tight">Partner With Novatrix</h2>
              <p className="text-white/90 font-light mb-10 leading-relaxed text-lg">Start your profitable pharma business with our trusted products and support.</p>

              <ul className="space-y-6 mb-12 flex-grow">
                {[
                  "Monopoly Rights",
                  "Marketing & Promotional Support",
                  "High-Margin Quality Products"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-cyan-400/20 border border-cyan-400/30 p-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                    </div>
                    <span className="text-white text-lg font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/franchise" className="bg-white text-primary hover:bg-slate-50 px-8 py-4 rounded-xl transition-all font-bold shadow-[0_10px_20px_rgba(0,0,0,0.1)] block text-center hover:-translate-y-1 transform w-full text-lg border border-slate-100">
                Start Your Business Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Terms & Conditions CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="bg-white rounded-[40px] p-10 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden text-center"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-3xl rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
              <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 shadow-inner group">
                <ShieldCheck className="w-10 h-10 text-primary transition-transform group-hover:scale-110" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 tracking-tight">
                Our Commitment to <span className="text-primary">Legal Trust</span>
              </h2>
              
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
                At Novatrix Formulations LLP, we prioritize transparency and ethical business practices. Our operations are fully compliant with Indian pharmaceutical regulations and global quality standards. Explore our detailed terms to understand our commitment to partners and patients.
              </p>
              
              <Link 
                to="/terms" 
                className="inline-flex items-center gap-2 bg-slate-900 text-white hover:bg-slate-800 px-10 py-4 rounded-xl transition-all font-bold shadow-2xl hover:-translate-y-1"
              >
                View Terms & Conditions <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
