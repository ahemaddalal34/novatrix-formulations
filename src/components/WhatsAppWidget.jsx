import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import logo from '../assets/logo.png';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919428126738";
    const companyName = "Novatrix Formulations";
    
    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="w-[360px] max-w-[90vw] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#075e54] p-5 text-white relative">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-md overflow-hidden">
                                    <img src={logo} alt="Novatrix Logo" className="w-[85%] h-auto object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">{companyName}</h3>
                                    <p className="text-white/80 text-xs mt-0.5">Typically replies within a day</p>
                                </div>
                            </div>
                        </div>

                        {/* Body / Chat Area */}
                        <div className="bg-[#e5ddd5] p-6 min-h-[140px] relative overflow-hidden">
                            {/* Pattern Overlay */}
                            <div 
                                className="absolute inset-0 opacity-[0.05]" 
                                style={{ 
                                    backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
                                    backgroundSize: '400px'
                                }}
                            ></div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="relative bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] border-l-4 border-[#25d366]"
                            >
                                <p className="text-slate-500 text-[11px] font-bold mb-1 uppercase tracking-wider">{companyName}</p>
                                <p className="text-slate-800 text-[15px] leading-relaxed">
                                    Hi there 👋 <br />
                                    How can I help you?
                                </p>
                                <p className="text-slate-400 text-[10px] text-right mt-1">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </p>
                            </motion.div>
                        </div>

                        {/* Footer Action */}
                        <div className="p-4 bg-white">
                            <a 
                                href={`https://wa.me/${phoneNumber}?text=Hi, I would like to inquire about your products.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full bg-[#25d366] hover:bg-[#128c7e] text-white py-3.5 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all active:scale-[0.98]"
                            >
                                <MessageCircle className="w-6 h-6 fill-white" />
                                Start Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white hover:bg-slate-50 text-[#25d366] pr-6 pl-4 py-3.5 rounded-full shadow-2xl border border-slate-100 flex items-center gap-3 group transition-all"
            >
                <div className="relative">
                    <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-md group-hover:bg-[#128c7e] transition-colors">
                        <MessageCircle className="w-6 h-6 fill-white" />
                    </div>
                    {/* Pulsing Notification Dot */}
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse shadow-sm"></span>
                </div>
                <span className="font-bold text-lg text-slate-800">Chat with us</span>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
