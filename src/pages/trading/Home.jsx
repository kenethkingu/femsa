import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import Button from '../../components/ui/Button';
import ValueCard from '../../components/ui/ValueCard';
import { tradingCoreValues } from '../../data/coreValues';

export default function Home() {
  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      {/* 1. B2B Custom Hero */}
      <section className="relative bg-femsa-navy text-white pt-24 pb-32 overflow-hidden min-h-[75vh] flex items-center">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        
        {/* Shards */}
        <StripeShape color="orange" count={3} position="top-right" size="large" opacity="opacity-25" />
        <StripeShape color="white" count={2} position="bottom-left" size="medium" opacity="opacity-[0.05]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center text-xs font-heading font-black text-femsa-orange uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded">
              B2B Sourcing & Supply Chain
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black leading-none uppercase">
              One Partner, <br />
              <span className="text-femsa-orange">Unlimited Reach</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-body max-w-2xl">
              Femsa Global Trading Limited is your dedicated partner connecting manufacturers with industrial clients across Tanzania and East Africa.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/trading/services" variant="primary">
                View Sourcing Categories
              </Button>
              <Button to="/trading/contact" variant="outline-white">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 md:p-10 bg-femsa-smoke border border-slate-100 rounded relative overflow-hidden group shadow-inner">
              <StripeShape color="orange" count={1} position="top-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-sm font-heading font-black text-femsa-orange uppercase tracking-widest block mb-2">Our Objective</span>
              <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Mission Statement</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {tradingCoreValues.mission}
              </p>
            </div>

            <div className="p-8 md:p-10 bg-femsa-smoke border border-slate-100 rounded relative overflow-hidden group shadow-inner">
              <StripeShape color="navy" count={1} position="bottom-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-sm font-heading font-black text-femsa-orange uppercase tracking-widest block mb-2">Our Destination</span>
              <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Vision Statement</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {tradingCoreValues.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Procurement Values"
          subtitle="B2B Sourcing Principles"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {tradingCoreValues.values.map((val, index) => (
            <ValueCard
              key={index}
              index={index}
              name={val.name}
              description={val.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
