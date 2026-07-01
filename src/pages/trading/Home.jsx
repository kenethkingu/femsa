import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import SectionHeading from '../../components/ui/SectionHeading';
import StripeShape from '../../components/ui/StripeShape';
import Button from '../../components/ui/Button';
import ValueCard from '../../components/ui/ValueCard';
import { tradingCoreValues } from '../../data/coreValues';
import {
  heroContainer, heroChild,
  staggerContainer, cardItem,
  fadeUp, fadeOnly, getVariants,
  EASE_OUT
} from '../../lib/motionVariants';

export default function Home() {
  const shouldReduce = useReducedMotion();
  const heroVars = getVariants(shouldReduce, heroContainer);
  const heroChildVars = getVariants(shouldReduce, heroChild, fadeOnly);
  const staggerVars = getVariants(shouldReduce, staggerContainer);
  const cardVars = getVariants(shouldReduce, cardItem, fadeOnly);
  const sectionVars = getVariants(shouldReduce, fadeUp, fadeOnly);

  return (
    <div className="bg-femsa-smoke min-h-screen pb-20">
      <title>Femsa Global Trading — B2B Sourcing &amp; Supply Chain</title>
      <meta name="description" content="Connecting worldwide manufacturers with industrial customers in Tanzania and East Africa. Sourcing machinery, packaging, parts, and consumables." />
      <meta property="og:title" content="Femsa Global Trading — Industrial Sourcing &amp; Supply Chain" />
      <meta property="og:description" content="Direct factory-to-buyer pricing on machinery, packaging, raw materials, spare parts, and MRO supplies in East Africa." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.myfemsa.com/trading" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* 1. B2B Custom Hero */}
      <section className="relative bg-femsa-navy text-white pt-24 pb-32 overflow-hidden min-h-[75vh] flex items-center">
        {/* Shards */}
        <StripeShape color="orange" count={3} position="top-right" size="large" opacity="opacity-25" />
        <StripeShape color="white" count={2} position="bottom-left" size="medium" opacity="opacity-[0.05]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            className="max-w-3xl space-y-6"
            variants={heroVars}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={heroChildVars}
              className="inline-flex items-center text-xs font-heading font-black text-femsa-orange uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded"
            >
              B2B Sourcing &amp; Supply Chain
            </motion.span>
            <motion.h1
              variants={heroChildVars}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black leading-none uppercase"
            >
              One Partner, <br />
              <span className="text-femsa-orange">Unlimited Reach</span>
            </motion.h1>
            <motion.p
              variants={heroChildVars}
              className="text-slate-300 text-base md:text-lg leading-relaxed font-body max-w-2xl"
            >
              Femsa Global Trading Limited is your dedicated partner connecting manufacturers with industrial clients across Tanzania and East Africa.
            </motion.p>
            <motion.div variants={heroChildVars} className="flex flex-wrap gap-4 pt-4">
              <Button to="/trading/services" variant="primary">
                View Sourcing Categories
              </Button>
              <Button to="/trading/contact" variant="outline-white">
                Request a Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={cardVars} className="p-8 md:p-10 bg-femsa-smoke border border-slate-100 rounded relative overflow-hidden group shadow-inner">
              <StripeShape color="orange" count={1} position="top-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-sm font-heading font-black text-femsa-orange uppercase tracking-widest block mb-2">Our Objective</span>
              <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Mission Statement</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {tradingCoreValues.mission}
              </p>
            </motion.div>

            <motion.div variants={cardVars} className="p-8 md:p-10 bg-femsa-smoke border border-slate-100 rounded relative overflow-hidden group shadow-inner">
              <StripeShape color="navy" count={1} position="bottom-right" size="small" opacity="opacity-[0.05]" />
              <span className="text-sm font-heading font-black text-femsa-orange uppercase tracking-widest block mb-2">Our Destination</span>
              <h3 className="text-2xl font-heading font-black text-femsa-navy uppercase mb-4">Vision Statement</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-body">
                {tradingCoreValues.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <SectionHeading
            title="Procurement Values"
            subtitle="B2B Sourcing Principles"
            align="center"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12"
          variants={staggerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {tradingCoreValues.values.map((val, index) => (
            <motion.div key={index} variants={cardVars}>
              <ValueCard
                index={index}
                name={val.name}
                description={val.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
