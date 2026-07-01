import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import ServiceCard from '../../components/ui/ServiceCard';
import { tradingServices } from '../../data/tradingServices';

export default function Services() {
  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      <title>Sourcing Portfolio & Services — Femsa Global Trading</title>
      <meta name="description" content="Explore our four B2B procurement categories: Equipment & Machinery, Raw Materials & Packaging, Spare Parts & Components, and Consumables & Plant Supplies." />
      <meta property="og:title" content="Sourcing Portfolio & Services — Femsa Global Trading" />
      <meta property="og:description" content="Explore our four B2B procurement categories: Equipment & Machinery, Raw Materials & Packaging, Spare Parts & Components, and Consumables & Plant Supplies." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myfemsa.com/trading/services" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Sourcing Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Procurement & <span className="text-femsa-orange">Supply Services</span>
          </h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Industrial Categories"
            subtitle="Procurement Scope"
            align="center"
          />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
            Femsa Global Trading Limited partners with verified worldwide manufacturers to secure stable, high-quality, and cost-efficient supply streams for the local manufacturing and processing sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {tradingServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
