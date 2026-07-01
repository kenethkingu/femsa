import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import { manufacturerBenefits, customerBenefits } from '../../data/whyPartner';

export default function WhyPartner() {

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      <title>Why Partner With Us — Femsa Global Trading</title>
      <meta name="description" content="Discover how we optimize procurement for industrial customers and open East African markets for global manufacturers." />
      <meta property="og:title" content="Why Partner With Us — Femsa Global Trading" />
      <meta property="og:description" content="Discover how we optimize procurement for industrial customers and open East African markets for global manufacturers." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myfemsa.com/trading/why-partner" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Partnership Value
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Why Partner <span className="text-femsa-orange">With Us?</span>
          </h1>
        </div>
      </section>

      {/* Benefits Columns Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Manufacturers Column */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 rounded shadow-md relative overflow-hidden group">
            <StripeShape color="orange" count={1} position="top-right" size="small" opacity="opacity-[0.04]" />
            <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase border-b-2 border-femsa-orange pb-4 mb-6">
              Benefits for <span className="text-femsa-orange font-heading font-black">Manufacturers</span>
            </h3>
            <ul className="space-y-4">
              {manufacturerBenefits.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-femsa-orange mr-3 mt-1.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed font-body">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrial Customers Column */}
          <div className="bg-white p-8 md:p-12 border border-slate-100 rounded shadow-md relative overflow-hidden group">
            <StripeShape color="navy" count={1} position="bottom-right" size="small" opacity="opacity-[0.04]" />
            <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase border-b-2 border-femsa-navy pb-4 mb-6">
              Benefits for <span className="text-femsa-orange font-heading font-black">Industrial Customers</span>
            </h3>
            <ul className="space-y-4">
              {customerBenefits.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-femsa-navy mr-3 mt-1.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-700 leading-relaxed font-body">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* KPI Banner */}
        <div className="bg-femsa-navy text-white rounded p-8 md:p-16 relative overflow-hidden shadow-xl text-center">
          <StripeShape color="orange" count={3} position="bottom-right" size="large" opacity="opacity-20" />
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block">
              Our Core Metric
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-black uppercase leading-tight">
              Our primary KPI is simple yet powerful: ensuring that every client achieves higher profitability by partnering with us.
            </h3>
            <div className="h-1.5 w-20 bg-femsa-orange mx-auto rounded-full" />
            <p className="text-xs uppercase tracking-wider text-slate-300 font-heading font-extrabold">
              Driven by Excellence, Built for You
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
