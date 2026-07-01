import React, { useState } from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import Button from '../../components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Contact <span className="text-femsa-orange">Femsa Group</span>
          </h1>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              title="Let's Connect"
              subtitle="Tanzanian Headquarters"
              align="left"
            />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
              Our holding headquarters is located in Dar es Salaam. Get in touch with our operations desk, corporate relations, or advisory teams.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-3 bg-white rounded text-femsa-orange border border-slate-100 shadow-sm mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-extrabold text-femsa-navy text-sm uppercase">Office Address</h4>
                  <p className="text-slate-500 text-sm font-body">P.O. Box 40310, Dar es Salaam, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-3 bg-white rounded text-femsa-orange border border-slate-100 shadow-sm mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-extrabold text-femsa-navy text-sm uppercase">Email Inbox</h4>
                  <a href="mailto:info@femsa.com" className="text-femsa-orange text-sm font-bold font-body hover:underline">
                    info@femsa.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative border border-slate-200 rounded overflow-hidden aspect-[16/10] bg-slate-100 flex items-center justify-center shadow-inner">
              <div className="absolute inset-0 bg-slate-200" />
              <div className="relative z-10 text-center p-4">
                <svg className="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-xs uppercase tracking-wider font-heading font-black text-slate-500">Google Map Placeholder</p>
                <p className="text-[10px] text-slate-400 font-body">Dar es Salaam Center, Tanzania</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-slate-100 rounded shadow-md relative overflow-hidden min-h-[420px] flex flex-col justify-center">
            <StripeShape color="orange" count={1} position="top-right" size="medium" opacity="opacity-[0.03]" />
            
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8 relative z-10">
                <span className="text-5xl text-femsa-orange block font-heading font-black">✓ SUCCESS</span>
                <h3 className="text-2xl font-heading font-black uppercase text-femsa-navy">Message Sent</h3>
                <p className="text-slate-600 font-body text-sm max-w-md mx-auto leading-relaxed">
                  Thank you! Your message has been successfully delivered. Our relations manager will review your submission and reply shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="primary" className="mt-4 text-xs py-2.5 px-8">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors duration-200"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={form.company || ''}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors duration-200"
                        placeholder="e.g. Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors duration-200"
                        placeholder="e.g. john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone || ''}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors duration-200"
                        placeholder="+255 700 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows="5"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors duration-200"
                      placeholder="Write your query details..."
                    />
                  </div>

                  <div className="pt-2 flex justify-center">
                    <Button type="submit" variant="primary" className="px-12">
                      Send Message
                    </Button>
                  </div>
                </form>
              </>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
