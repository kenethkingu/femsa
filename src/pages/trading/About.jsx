import React from 'react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import LeadershipCard from '../../components/ui/LeadershipCard';
import { leadershipTeam, mdMessage } from '../../data/leadershipTeam';
import { differentiators } from '../../data/differentiators';

export default function About() {

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        <StripeShape color="orange" count={3} position="top-right" size="medium" opacity="opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block mb-2">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight">
            About <span className="text-femsa-orange">Global Trading</span>
          </h1>
        </div>
      </section>

      {/* MD Message Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Placeholder Left Column */}
            <div className="lg:col-span-5 relative aspect-square bg-slate-100 rounded overflow-hidden shadow-md">
              {/* TODO: replace with real photography */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                alt="Beatrice Francis MD & CEO of Femsa Global Trading Limited"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-femsa-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-heading font-bold text-lg">{mdMessage.author}</p>
                <p className="text-xs text-femsa-orange font-semibold">{mdMessage.title}</p>
              </div>
            </div>

            {/* Message Right Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-femsa-orange font-heading font-extrabold text-xs uppercase tracking-widest block">
                MD Message
              </span>
              <h2 className="text-3xl font-heading font-black text-femsa-navy uppercase">
                A Message from the MD
              </h2>
              <blockquote className="text-slate-600 text-base md:text-lg leading-relaxed italic border-l-4 border-femsa-orange pl-6 font-body">
                "{mdMessage.content}"
              </blockquote>
              <p className="text-right text-sm font-heading font-black text-femsa-navy uppercase">
                — {mdMessage.author}, <span className="text-femsa-orange">{mdMessage.title}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-femsa-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Makes Us Different"
            subtitle="Trading Value Proposition"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {differentiators.map((diff, index) => (
              <div key={index} className="p-8 bg-white border border-slate-100 rounded shadow-sm relative overflow-hidden group">
                <span className="text-4xl text-femsa-orange/20 group-hover:text-femsa-orange transition-colors duration-300 font-heading font-black block mb-4">
                  0{index + 1}
                </span>
                <h4 className="text-lg font-heading font-black text-femsa-navy mb-2 uppercase">{diff.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-body">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Leadership Team"
            subtitle="Corporate Advisory Board"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadershipTeam.map((member, index) => (
              <LeadershipCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
