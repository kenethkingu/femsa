import React, { useState } from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import Button from '../../components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({
    company: '',
    contactPerson: '',
    email: '',
    phone: '',
    category: 'equipment-machinery',
    specification: '',
    quantity: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setForm({
      company: '',
      contactPerson: '',
      email: '',
      phone: '',
      category: 'equipment-machinery',
      specification: '',
      quantity: ''
    });
  };

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Request B2B Quote
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Contact <span className="text-femsa-orange">Global Trading</span>
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              title="Request a Sourcing Quote"
              subtitle="Specialized B2B Support"
              align="left"
            />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
              Femsa Global Trading Limited helps industrial operations across East Africa source high quality supplies directly from global manufacturers. Submit your specifications to receive a detailed cost quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <span className="p-3 bg-white rounded text-femsa-orange border border-slate-100 shadow-sm mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-extrabold text-femsa-navy text-sm uppercase">Direct Phone Line</h4>
                  <p className="text-slate-500 text-sm font-body">+255 761 351 371</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-3 bg-white rounded text-femsa-orange border border-slate-100 shadow-sm mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-extrabold text-femsa-navy text-sm uppercase">Procurement Email</h4>
                  <a href="mailto:info@myfemsa.com" className="text-femsa-orange text-sm font-bold font-body hover:underline">
                    info@myfemsa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <span className="p-3 bg-white rounded text-femsa-orange border border-slate-100 shadow-sm mr-4 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-heading font-extrabold text-femsa-navy text-sm uppercase">Trading Address</h4>
                  <p className="text-slate-500 text-sm font-body">Femsa Global Trading Limited, P.O. Box 40310 Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-slate-100 rounded shadow-md relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            <StripeShape color="orange" count={1} position="top-right" size="medium" opacity="opacity-[0.03]" />
            
            {isSubmitted ? (
              <div className="text-center space-y-4 py-8 relative z-10">
                <span className="text-5xl text-femsa-orange block font-heading font-black">✓ SUCCESS</span>
                <h3 className="text-2xl font-heading font-black uppercase text-femsa-navy">RFQ Request Sent</h3>
                <p className="text-slate-600 font-body text-sm max-w-md mx-auto leading-relaxed">
                  Thank you! Your B2B procurement request has been successfully submitted. Our industrial sourcing coordinators will review your specifications and issue a formal quote within 24 business hours.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="primary" className="mt-4 text-xs py-2.5 px-8">
                  Submit Another RFQ
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-6">Request RFQ</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. Industrial Ltd"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Contact Person
                      </label>
                      <input
                        type="text"
                        required
                        value={form.contactPerson}
                        onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. Salim Khalfan"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. salim@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. +255 761..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                      Procurement Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm text-slate-700"
                    >
                      <option value="equipment-machinery">Equipment & Machinery</option>
                      <option value="raw-materials-packaging">Raw Materials & Packaging</option>
                      <option value="spare-parts-components">Spare Parts & Components</option>
                      <option value="consumables-supplies">Consumables & Plant Supplies</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="sm:col-span-1">
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        required
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. 50 Tons / 2 Units"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">
                        Required Specifications / Custom Requirements
                      </label>
                      <input
                        type="text"
                        required
                        value={form.specification}
                        onChange={(e) => setForm({ ...form, specification: e.target.value })}
                        className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm"
                        placeholder="e.g. Grade A, ASTM standard, PET resin pellets..."
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" className="w-full">
                      Submit RFQ Request
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
