import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import SegmentCard from '../../components/ui/SegmentCard';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import { businessSegments } from '../../data/businessSegments';

export default function Businesses() {
  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      {/* Header section */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Holding Divisions
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            Our Business <span className="text-femsa-orange">Segments</span>
          </h1>
        </div>
      </section>

      {/* Grid segment list */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading
            title="Diversified Impact"
            subtitle="Industry Coverage"
            align="center"
          />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
            Femsa Group maintains active leadership positions across 6 strategic business segments in Tanzania and East Africa, helping build sustainable communities and efficient trade connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {businessSegments.map((segment) => (
            <SegmentCard key={segment.id} segment={segment} />
          ))}
        </div>
      </section>
    </div>
  );
}
