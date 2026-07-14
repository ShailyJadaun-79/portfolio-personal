import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

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
      .then((result) => {
        setStatus('Message sent successfully!');
        setLoading(false);
        setFormFields({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please verify your config or try again.');
        setLoading(false);
        console.error('EmailJS Error:', error);
      });
  };

  return (
    <section id="contact" className="py-24 bg-background px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Details Column */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-primaryText mb-6">Get In Touch</h3>
              <p className="text-secondaryText text-sm leading-relaxed mb-10">
                Have an opening or a dashboard design project in mind? Feel free to reach out directly through the form or using the details below.
              </p>

              {/* Direct Links */}
              <div className="flex flex-col gap-6">
                <a
                  href="tel:+917060913917"
                  className="flex items-center gap-4 text-secondaryText hover:text-accent transition duration-200"
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Call Me</span>
                    <span className="text-sm font-semibold">+91 7060913917</span>
                  </div>
                </a>

                <a
                  href="mailto:shailyjadaun2007@gmail.com"
                  className="flex items-center gap-4 text-secondaryText hover:text-accent transition duration-200"
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">Email</span>
                    <span className="text-sm font-semibold">shailyjadaun2007@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/shaily-jadaun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-secondaryText hover:text-accent transition duration-200"
                >
                  <div className="p-3 bg-white border border-slate-100 rounded-xl">
                    <FaLinkedin size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 block uppercase">LinkedIn</span>
                    <span className="text-sm font-semibold">linkedin.com/in/shaily-jadaun</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtle Footer branding */}
            <p className="hidden lg:block text-xs text-slate-400 mt-12 font-medium">
              &copy; {new Date().getFullYear()} Shaily Jadaun. All rights reserved.
            </p>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2 bg-surface p-8 md:p-10 rounded-2xl border border-slate-100 shadow-[0_4px_25px_rgba(0,0,0,0.015)]">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-secondaryText block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formFields.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-background border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-accent focus:bg-white text-sm transition duration-200"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-secondaryText block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formFields.email}
                  onChange={handleInputChange}
                  required
                  placeholder="yourmail@example.com"
                  className="w-full bg-background border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-accent focus:bg-white text-sm transition duration-200"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-secondaryText block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formFields.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder="Hi Shaily, let's discuss dashboard opportunities..."
                  className="w-full bg-background border border-slate-200 p-3 rounded-xl focus:outline-none focus:border-accent focus:bg-white text-sm transition duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-accent text-white py-3.5 px-6 rounded-xl hover:bg-blue-700 disabled:bg-blue-300 transition duration-200 font-semibold text-sm mt-2 shadow-sm"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <FaPaperPlane size={12} />
              </button>

              {status && (
                <div className={`text-xs mt-4 text-center font-medium p-3 rounded-lg ${status.includes('successfully')
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'bg-rose-50 text-rose-700 border border-rose-100'
                  }`}>
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer branding for mobile screens */}
        <p className="block lg:hidden text-center text-xs text-slate-400 mt-16 font-medium">
          &copy; {new Date().getFullYear()} Shaily Jadaun. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
