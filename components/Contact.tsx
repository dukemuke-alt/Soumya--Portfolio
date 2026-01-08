
import React, { useState } from 'react';
import { portfolioData } from '../data.ts';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  // Fix: socials is a property of portfolioData, not portfolioData.identity
  const { email, phone, office } = portfolioData.identity;
  const { socials } = portfolioData;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Pure frontend simulation: No backend call needed.
    setTimeout(() => {
      setFormState('submitted');
      // Reset after 5 seconds
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative bg-[#030303] overflow-hidden">
      {/* Visual Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.5em] text-neutral-500 mb-8">Inquiry</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-10">
              Let's build <br/>your <span className="font-serif italic font-normal text-neutral-500">legacy</span>.
            </h3>
            
            <div className="space-y-10 mb-16">
              <div className="group cursor-pointer">
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Primary Connection</p>
                <a href={`mailto:${email}`} className="text-xl md:text-2xl font-light hover:text-white transition-colors flex items-center gap-3">
                  {email} <ArrowUpRight size={20} className="text-neutral-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Direct Line</p>
                  <p className="text-lg font-medium">{phone}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">Headquarters</p>
                  <p className="text-lg font-medium">{office}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
              {formState === 'submitted' ? (
                <div className="py-20 flex flex-col items-center text-center animate-fade-up">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-green-500 mb-10 border border-green-500/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Connection Secured</h4>
                  <p className="text-neutral-500 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been encrypted and delivered. I personally review all communications and will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 ml-1">Identity</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your full name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 ml-1">Direct Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 ml-1">The Vision</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe the masterpiece we are building..."
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full group bg-white text-black font-bold py-8 rounded-full flex items-center justify-center gap-4 hover:bg-neutral-200 transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-4">
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Encrypting...
                      </span>
                    ) : (
                      <>
                        Initiate Partnership
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
