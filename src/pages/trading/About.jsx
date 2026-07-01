import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import { mdMessage } from '../../data/leadershipTeam';
import { differentiators } from '../../data/differentiators';
import {
  staggerContainer, cardItem, fadeUp, fadeOnly, getVariants
} from '../../lib/motionVariants';

export default function About() {
  const shouldReduce = useReducedMotion();
  const staggerVars = getVariants(shouldReduce, staggerContainer);
  const cardVars    = getVariants(shouldReduce, cardItem, fadeOnly);
  const sectionVars = getVariants(shouldReduce, fadeUp, fadeOnly);

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      <title>About Us — Femsa Global Trading</title>
      <meta name="description" content="Read about Femsa Global Trading Limited, our leadership under Managing Director Beatrice Francis, and our six core differentiators." />
      <meta property="og:title" content="About Us — Femsa Global Trading" />
      <meta property="og:description" content="Read about Femsa Global Trading Limited, our leadership under Managing Director Beatrice Francis, and our six core differentiators." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myfemsa.com/trading/about" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Header */}
      <section className="relative bg-femsa-navy text-white py-20 overflow-hidden">
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
            <div className="lg:col-span-5 relative aspect-square rounded overflow-hidden shadow-md bg-gradient-to-tr from-femsa-navy to-[#052d9a] flex items-center justify-center text-white">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%">
                  <line x1="-10%" y1="10%" x2="110%" y2="130%" stroke="#FFFFFF" strokeWidth="4" />
                  <line x1="-10%" y1="30%" x2="110%" y2="150%" stroke="#FFFFFF" strokeWidth="4" />
                  <line x1="-10%" y1="50%" x2="110%" y2="170%" stroke="#FFFFFF" strokeWidth="4" />
                </svg>
              </div>
              <span className="text-8xl font-heading font-black tracking-tighter text-white/95">
                BF
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-femsa-navy/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="font-heading font-black text-xl uppercase text-white">{mdMessage.author}</p>
                <p className="text-xs text-femsa-orange font-extrabold uppercase tracking-wider">{mdMessage.title}</p>
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
                &ldquo;{mdMessage.content}&rdquo;
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
          <motion.div
            variants={sectionVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionHeading
              title="What Makes Us Different"
              subtitle="Trading Value Proposition"
              align="center"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={staggerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {differentiators.map((diff, index) => (
              <motion.div key={index} variants={cardVars} className="p-8 bg-white border border-slate-100 rounded shadow-sm relative overflow-hidden group">
                <span className="text-4xl text-femsa-orange/20 group-hover:text-femsa-orange transition-colors duration-300 font-heading font-black block mb-4">
                  0{index + 1}
                </span>
                <h4 className="text-lg font-heading font-black text-femsa-navy mb-2 uppercase">{diff.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-body">{diff.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </div>
  );
}
