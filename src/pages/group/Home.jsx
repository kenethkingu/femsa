import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StripeShape from '../../components/ui/StripeShape';
import BrandPattern from '../../components/ui/BrandPattern';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import SegmentCard from '../../components/ui/SegmentCard';
import { businessSegments } from '../../data/businessSegments';
import { groupCoreValues } from '../../data/coreValues';

export default function Home() {
  const [activeTab, setActiveTab] = useState('mission'); // 'mission' | 'vision' | 'values'
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % businessSegments.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + businessSegments.length) % businessSegments.length);
  };

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section className="relative bg-femsa-navy text-white pt-24 pb-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Sunburst Pattern Texture */}
        <BrandPattern color="white" opacity="opacity-[0.03]" />
        
        {/* Signature Diagonal Shards */}
        <StripeShape color="orange" count={3} position="top-right" size="large" opacity="opacity-20" />
        <StripeShape color="white" count={2} position="bottom-left" size="medium" opacity="opacity-[0.08]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Column */}
            <div className="space-y-8 max-w-xl">
              <span className="inline-flex items-center text-xs font-heading font-black text-femsa-orange uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded">
                Tanzanian Holding Group
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black leading-tight uppercase">
                Stronger Together. <br />
                <span className="text-femsa-orange">Always Moving</span> <br />
                Forward!
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-body">
                Femsa Group Limited empowers businesses with innovative solutions, strategic guidance, and resources, driving sustainable growth, trust, and long-term success.
              </p>

              <div className="flex flex-wrap gap-4 items-center pt-2">
                <Button to="/about" variant="primary">
                  Explore More
                </Button>
                
                {/* Circular Play Button */}
                <button
                  onClick={() => alert("Corporate video mockup presentation.")}
                  className="flex items-center gap-3 text-sm font-heading font-bold uppercase tracking-wider text-white hover:text-femsa-orange transition-colors duration-300 group"
                  aria-label="Play corporate video"
                >
                  <span className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/5 group-hover:border-femsa-orange group-hover:bg-femsa-orange/20 transition-all duration-300">
                    <svg className="w-4 h-4 text-white ml-0.5 fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span>Watch Video</span>
                </button>
              </div>
            </div>

            {/* Right Map/Globe Column */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Globe Wireframe Background Overlay */}
              <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] relative text-white/5 pointer-events-none animate-[spin_100s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-current stroke-[0.3]" fill="none">
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="45" />
                  <circle cx="50" cy="50" r="35" />
                  <circle cx="50" cy="50" r="25" />
                  {/* Grid lines */}
                  <path d="M 50,5 A 45,45 0 0,0 50,95" />
                  <path d="M 50,5 A 25,45 0 0,0 50,95" />
                  <path d="M 50,5 A 10,45 0 0,0 50,95" />
                  <path d="M 5,50 L 95,50" />
                  <path d="M 12.5,30 L 87.5,30" />
                  <path d="M 12.5,70 L 87.5,70" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Visual Sunburst Highlight */}
                <div className="w-32 h-32 bg-femsa-orange/10 filter blur-2xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. We are Femsa Group - matches design exactly */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Heading, Tabs & CTA */}
            <div className="lg:col-span-4 space-y-10">
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-femsa-navy leading-none">
                We are <br />
                Femsa Group
              </h2>

              <div className="flex flex-col">
                {[
                  { label: 'Our Mission', tab: 'mission' },
                  { label: 'Our Vision', tab: 'vision' },
                  { label: 'Our Values', tab: 'values' },
                ].map(({ label, tab }) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left py-4 font-body text-base transition-all duration-300 border-b ${
                      activeTab === tab
                        ? 'border-femsa-orange text-femsa-navy font-semibold'
                        : 'border-slate-200 text-slate-500 hover:text-femsa-navy hover:border-slate-400'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div>
                <Button to="/about" variant="primary">
                  See More &nbsp;→
                </Button>
              </div>
            </div>

            {/* Right Column - Static Descriptive Text */}
            <div className="lg:col-span-8 space-y-6 pt-2">
              <p className="text-slate-700 text-base leading-relaxed font-body text-justify">
                FEMSA Group is a dynamic and diversified organization committed to delivering innovative solutions that create lasting value for individuals, businesses, and communities. Built on a foundation of integrity, professionalism, and vision, FEMSA Group operates with the belief that sustainable growth comes from empowering people and bridging opportunities across sectors. Our focus is on providing services that drive progress, enhance trust, and support long-term development.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-body text-justify">
                At FEMSA Group, we understand the evolving needs of today's world and strive to meet them through excellence, innovation, and reliability. Whether supporting enterprises, fostering financial inclusion, or facilitating growth in local and international markets, our work is guided by a people-centered approach. We believe that true success lies in building relationships based on transparency, trust, and shared prosperity.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-body text-justify">
                With a strong commitment to impact, FEMSA Group is not just about delivering services—it is about creating meaningful change. We are driven by the mission to empower communities, strengthen businesses, and open doors to new possibilities. By combining expertise with innovation, we position ourselves as a trusted partner that clients and stakeholders can depend on to navigate challenges and unlock opportunities.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-body text-justify">
                Our vision is clear: to be a leading force in shaping a future where individuals and organizations alike thrive. Through dedication, resilience, and forward thinking, FEMSA Group continues to build a legacy of growth, empowerment, and excellence.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 3. Partners/Grayscale trust bar */}
      <section className="py-12 bg-femsa-smoke border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] uppercase font-heading font-black tracking-widest text-slate-400 mb-8">
            Featured In & Corporate Partnerships
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
            <span className="font-heading font-extrabold text-xl md:text-2xl text-slate-700">Coca-Cola</span>
            <span className="font-heading font-black text-xl md:text-2xl text-slate-700">Uber</span>
            <span className="font-heading font-extrabold text-xl md:text-2xl text-slate-700">Vodacom</span>
            <span className="font-heading font-black text-xl md:text-2xl text-slate-700">AUTOTRONICS</span>
            <span className="font-heading font-extrabold text-xl md:text-2xl text-slate-700">MULINEX</span>
          </div>
        </div>
      </section>

      {/* 4. What we Serve slider */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-16">
            <SectionHeading
              title="What we Serve"
              subtitle="Business Units"
              align="left"
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Slider content */}
            <div className="lg:col-span-5">
              <div className="transition-all duration-500 transform translate-y-0 opacity-100">
                <h3 className="text-3xl md:text-4xl font-heading font-black text-femsa-navy mb-6 leading-tight">
                  {businessSegments[currentSlide].title === 'Trading & Supply Chain'
                    ? 'Professional Global Trading Services'
                    : businessSegments[currentSlide].name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 font-body text-justify">
                  {businessSegments[currentSlide].description}
                </p>
                <Button to={businessSegments[currentSlide].link} variant="primary">
                  See More &nbsp;→
                </Button>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex gap-2.5 mt-10">
                {businessSegments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-8 bg-femsa-navy' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>


            {/* Right Graphic/Photo column */}
            <div className="lg:col-span-7 relative flex items-center justify-center min-h-[420px]">
              {/* World map watermark - matches design */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 900 500" className="w-full h-full opacity-[0.08] text-slate-400" fill="currentColor" preserveAspectRatio="xMidYMid slice">
                  {/* Simplified world map continents */}
                  <path d="M140,120 L180,100 L220,110 L250,95 L280,108 L300,95 L320,105 L330,120 L310,135 L290,130 L270,140 L240,135 L210,145 L180,135 L155,140 Z" />
                  <path d="M155,145 L185,138 L210,148 L235,138 L260,148 L280,142 L295,158 L280,172 L260,165 L240,175 L215,168 L190,175 L165,165 L155,155 Z" />
                  <path d="M310,108 L345,95 L380,102 L400,92 L420,100 L415,118 L395,128 L370,122 L345,130 L320,125 Z" />
                  <path d="M180,180 L210,172 L240,180 L260,170 L280,178 L270,200 L250,210 L230,205 L205,215 L185,205 L175,192 Z" />
                  <path d="M500,80 L540,72 L575,82 L595,72 L620,85 L610,100 L580,110 L555,105 L525,112 L500,102 Z" />
                  <path d="M495,105 L525,115 L555,108 L580,115 L595,130 L575,142 L550,138 L520,145 L498,138 L488,122 Z" />
                  <path d="M620,88 L655,78 L685,88 L695,105 L675,118 L650,112 L628,120 L615,108 Z" />
                  <path d="M720,90 L760,82 L790,95 L800,112 L780,125 L755,120 L730,128 L715,115 Z" />
                  <path d="M265,220 L295,212 L320,225 L315,248 L290,258 L268,250 L255,235 Z" />
                  <path d="M180,285 L215,278 L245,288 L238,312 L215,322 L190,315 L175,300 Z" />
                  <path d="M215,325 L242,318 L265,330 L258,355 L235,362 L212,355 L202,340 Z" />
                  <path d="M600,200 L635,192 L665,205 L658,230 L635,240 L610,232 L595,218 Z" />
                  <path d="M615,242 L645,235 L670,248 L662,272 L640,280 L618,272 L605,258 Z" />
                  <path d="M595,285 L620,278 L645,290 L638,315 L615,322 L592,315 L582,300 Z" />
                  <path d="M770,140 L800,132 L825,145 L818,168 L795,178 L772,170 L760,155 Z" />
                  <path d="M400,280 L430,272 L455,285 L448,310 L425,318 L402,310 L390,295 Z" />
                  <path d="M340,365 L365,358 L385,372 L378,395 L358,400 L338,392 L328,378 Z" />
                </svg>
              </div>

              {/* Photo */}
              <div className="relative w-full max-w-lg aspect-[4/3] rounded overflow-hidden shadow-xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=700&auto=format&fit=crop"
                  alt="Professional global trading services"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Arrow - positioned on edge like design */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg text-femsa-navy hover:bg-femsa-orange hover:text-white hover:border-femsa-orange flex items-center justify-center transition-all duration-300 z-20"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* 5. Effective Global Trading B2B Highlight Section */}
      <section className="py-24 bg-femsa-navy text-white relative overflow-hidden">
        {/* Shard vectors overlay */}
        <StripeShape color="orange" count={3} position="bottom-right" size="large" opacity="opacity-[0.15]" />
        <StripeShape color="white" count={2} position="top-left" size="medium" opacity="opacity-[0.05]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-femsa-orange font-heading font-extrabold text-sm uppercase tracking-widest block mb-3">
              Corporate Metrics
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase mb-6 leading-none">
              Effective Global <br />
              <span className="text-femsa-orange">Trading Solutions</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-12 font-body">
              Through our subsidiary, Femsa Global Trading Limited, we construct robust B2B linkages, ensuring high quality component and machinery sourcing across Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
            <div>
              <p className="text-4xl md:text-6xl font-heading font-black text-femsa-orange mb-2">5000+</p>
              <div className="h-1 w-10 bg-white mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate-300">Tons of Raw Material Sourced</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-heading font-black text-femsa-orange mb-2">98%</p>
              <div className="h-1 w-10 bg-white mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate-300">B2B Delivery Reliability</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-heading font-black text-femsa-orange mb-2">95.99%</p>
              <div className="h-1 w-10 bg-white mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate-300">Procurement Accuracy Rating</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-heading font-black text-femsa-orange mb-2">500+</p>
              <div className="h-1 w-10 bg-white mb-2" />
              <p className="text-xs uppercase tracking-wider text-slate-300">Satisfied Industrial Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section (Words From Them) */}
      <section className="py-24 bg-femsa-smoke">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Words from them"
            subtitle="Client Testimonials"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-8 font-body">
                "Femsa Global Trading consistently delivers high-quality industrial components, ensuring that our plant maintains maximum uptime. Their customer service and regulatory navigation are exceptional."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-femsa-navy/10 flex-shrink-0">
                  {/* TODO: replace with real photography */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Corporate Client avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-femsa-navy text-sm uppercase">Joseph Mlay</h4>
                  <p className="text-xs text-femsa-orange font-semibold">Chief Engineer, East Africa Cement</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic mb-8 font-body">
                "The legal guidance from Femsa Attorneys was instrumental in organizing our group structure and securing local compliance. A highly dedicated and professional legal partner in Tanzania."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-femsa-navy/10 flex-shrink-0">
                  {/* TODO: replace with real photography */}
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Corporate Client avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-femsa-navy text-sm uppercase">Amani Salum</h4>
                  <p className="text-xs text-femsa-orange font-semibold">Director, Salum Agricultural Co.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7. Get in touch Contact Form Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left column - heading + info */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-black text-femsa-navy leading-tight">
                Get In Touch <br />
                <span className="text-femsa-orange">With Us</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-body">
                Have questions about Femsa Group holdings or interested in procurement partnerships? Speak with our Dar es Salaam team today.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <span className="text-femsa-orange mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p className="text-sm text-slate-600 font-body">P.O. Box 40310, Dar es Salaam, Tanzania</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-femsa-orange mt-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <a href="mailto:info@femsa.com" className="text-sm text-femsa-orange font-bold hover:underline">info@femsa.com</a>
                </div>
              </div>
            </div>

            {/* Right column - form */}
            <div className="lg:col-span-8">
              <form
                onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your message has been received.'); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Full name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="Your basic name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="Your working mail" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Company / Organization</label>
                    <input type="text" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="Give details of name" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Position / Title</label>
                    <input type="text" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="Choose job description" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Services of Interest</label>
                  <select required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm text-slate-700 transition-colors">
                    <option value="">Select Service</option>
                    <option value="trading">Femsa Global Trading Limited (Trading & Supply Chain)</option>
                    <option value="attorneys">Femsa Attorneys (Legal Services)</option>
                    <option value="microfinance">Femsa Microfinance (Financial Services)</option>
                    <option value="healthcare">Femsa Healthcare (Health Solutions)</option>
                    <option value="education">Femsa Education (Learning & Development)</option>
                    <option value="agriculture">Femsa Agriculture (Agri-Business Solutions)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Message</label>
                  <textarea rows="5" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="Write your message details..." />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-heading font-extrabold text-slate-500 mb-2">Project Min Budget</label>
                  <input type="text" required className="w-full px-4 py-3 bg-femsa-smoke border border-slate-200 rounded focus:outline-none focus:border-femsa-orange text-sm transition-colors" placeholder="e.g. 50,000 USD" />
                </div>
                <div className="flex justify-center pt-2">
                  <Button type="submit" variant="primary" className="px-12">
                    Submit
                  </Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
