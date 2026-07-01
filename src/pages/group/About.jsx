import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import ValueCard from '../../components/ui/ValueCard';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import { groupCoreValues } from '../../data/coreValues';

export default function About() {
  return (
    <div className="bg-femsa-smoke min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            About the Group
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Driven by Excellence, <span className="text-femsa-orange">Built for You</span>
          </h1>
        </div>
      </section>

      {/* Mission & Vision Row */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Box */}
            <div className="p-8 md:p-10 border border-slate-100 bg-femsa-smoke rounded shadow-inner relative overflow-hidden group">
              <StripeShape color="orange" count={1} position="top-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-4xl text-femsa-orange opacity-40 font-heading font-black block mb-4">01.</span>
              <h2 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Our Mission</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {groupCoreValues.mission}
              </p>
            </div>

            {/* Vision Box */}
            <div className="p-8 md:p-10 border border-slate-100 bg-femsa-smoke rounded shadow-inner relative overflow-hidden group">
              <StripeShape color="navy" count={1} position="bottom-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-4xl text-femsa-orange opacity-40 font-heading font-black block mb-4">02.</span>
              <h2 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Our Vision</h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {groupCoreValues.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-femsa-smoke relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Our Core Values"
            subtitle="Guiding Principles"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {groupCoreValues.values.map((val, index) => (
              <ValueCard
                key={index}
                index={index}
                name={val.name}
                description={val.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Governance & Board"
                subtitle="Holding Leadership"
                align="left"
              />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-body">
                Femsa Group maintains strict adherence to international best practices in corporate governance, ensuring risk compliance, auditing, and structured management models across all our 6 operational segments.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-body">
                Our board of directors brings together experienced Tanzanian and international professionals from law, engineering, logistics, agriculture, and finance to guide our subsidiary teams.
              </p>
            </div>
            
            <div className="p-8 bg-femsa-navy text-white rounded relative overflow-hidden shadow-2xl">
              <StripeShape color="orange" count={2} position="bottom-right" size="medium" opacity="opacity-20" />
              <h3 className="text-2xl font-heading font-black uppercase mb-4 text-femsa-orange">Corporate Structure</h3>
              <ul className="space-y-4 text-sm font-body">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Group Advisory Board</span>
                  <span className="text-femsa-orange font-bold font-heading">Active</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Legal & Regulatory Committee</span>
                  <span className="text-femsa-orange font-bold font-heading">Femsa Attorneys</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Audit & Risk Management</span>
                  <span className="text-femsa-orange font-bold font-heading">Quarterly</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Environmental Sustainability Council</span>
                  <span className="text-femsa-orange font-bold font-heading">Established</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
