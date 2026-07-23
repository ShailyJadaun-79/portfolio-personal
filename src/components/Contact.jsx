import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending your message...');

    // Load keys from environment variables (.env)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      name: formFields.name,
      email: formFields.email,
      reply_to: formFields.email,
      from_email: formFields.email,
      message: formFields.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    )
      .then((_result) => {
        setStatus('Message sent successfully!');
        setLoading(false);
        setFormFields({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please verify your config or try again.');
        setLoading(false);
        console.error('EmailJS Error:', error);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent px-6 md:px-12 lg:px-24 relative">
      {/* Background glow blobs */}
      <div className="absolute top-[40%] right-[-10%] w-[320px] h-[320px] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute bottom-[5%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accentBlue/4 blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '-6s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >

          {/* Contact Details Column */}
          <div className="lg:col-span-1 flex flex-col justify-between gap-10">
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6"
              >
                Get In Touch <span className="inline-block w-2 h-2 rounded-full bg-accent ml-1"></span>
              </motion.h3>
              <motion.p 
                variants={itemVariants}
                className="text-secondaryText text-xs leading-relaxed mb-10 font-normal"
              >
                Have an opening or a dashboard design project in mind? Feel free to reach out directly through the form or using the details below.
              </motion.p>

              {/* Direct Links */}
              <div className="flex flex-col gap-4">
                <motion.a
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.25)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  href="tel:+917060913917"
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 transition-colors duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                  >
                    <FaPhoneAlt size={14} />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Call Me</span>
                    <span className="text-sm font-semibold text-slate-200">+91 7060913917</span>
                  </div>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(59, 130, 246, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  href="mailto:shailyjadaun2007@gmail.com"
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 transition-colors duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-accentBlue/10 border border-accentBlue/20 text-accentBlue flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.1)]"
                  >
                    <FaEnvelope size={14} />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Email</span>
                    <span className="text-sm font-semibold text-slate-200">shailyjadaun2007@gmail.com</span>
                  </div>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(168, 85, 247, 0.25)', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  href="https://linkedin.com/in/shaily-jadaun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-4 rounded-xl flex items-center gap-4 transition-colors duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                  >
                    <FaLinkedin size={14} />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider mb-0.5">LinkedIn</span>
                    <span className="text-sm font-semibold text-slate-200">linkedin.com/in/shaily-jadaun</span>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Subtle Footer branding */}
            <motion.p 
              variants={itemVariants}
              className="hidden lg:block text-xs text-slate-500 mt-12 font-medium"
            >
              &copy; {new Date().getFullYear()} Shaily Jadaun. All rights reserved.
            </motion.p>
          </div>

          {/* Form Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 glass-panel p-8 md:p-10 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 relative z-10">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formFields.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 rounded-xl focus:outline-none focus:border-accent focus:bg-accent/5 text-slate-200 text-sm transition-all duration-300 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formFields.email}
                  onChange={handleInputChange}
                  required
                  placeholder="yourmail@example.com"
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 rounded-xl focus:outline-none focus:border-accent focus:bg-accent/5 text-slate-200 text-sm transition-all duration-300 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-slate-300 block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formFields.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder="Hi Shaily, let's discuss dashboard opportunities..."
                  className="w-full bg-white/[0.02] border border-white/10 p-3.5 rounded-xl focus:outline-none focus:border-accent focus:bg-accent/5 text-slate-200 text-sm transition-all duration-300 placeholder:text-slate-500 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="btn-gradient inline-flex items-center justify-center gap-2 text-white py-3.5 px-6 rounded-xl disabled:opacity-50 transition-all duration-300 font-bold text-sm mt-2 shadow-lg shadow-accent/25 cursor-pointer"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <FaPaperPlane size={11} className="ml-1 animate-float-slow" />
              </motion.button>

              {status && (
                <div className={`text-xs mt-4 text-center font-medium p-3 rounded-lg ${status.includes('successfully')
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}>
                  {status}
                </div>
              )}
            </form>
          </motion.div>

        </motion.div>

        {/* Footer branding for mobile screens */}
        <p className="block lg:hidden text-center text-xs text-slate-500 mt-16 font-medium">
          &copy; {new Date().getFullYear()} Shaily Jadaun. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
