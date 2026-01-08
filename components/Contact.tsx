
import React, { useState } from 'react';
import { portfolioData } from '../data';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const { email, phone, location, office } = portfolioData.identity;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('submitted');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#030303]">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-6">Contact</h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              Let's craft the <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700 italic font-serif font-normal">future</span> together.
            </h3>
            <p className="text-lg text-neutral-400 font-light leading-relaxed mb-12 max-w-md">
              Whether you have a groundbreaking idea or a complex technical challenge, I'm ready to bring world-class precision to your project.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-1">Email</p>
                  <a href={`mailto:${email}`} className="text-lg font-medium hover:text-neutral-400 transition-colors">{email}</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-1">Phone</p>
                  <p className="text-lg font-medium">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-1">Office</p>
                  <p className="text-lg font-medium">{office}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
              {formState === 'submitted' ? (
                <div className="py-20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-green-500 mb-8 border border-green-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Message Sent</h4>
                  <p className="text-neutral-500 max-w-xs mx-auto">
                    Thank you for reaching out. I'll personally review your inquiry and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-neutral-500 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-neutral-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-[0.2em] text-neutral-500 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-neutral-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-neutral-500 ml-1">Subject</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all appearance-none cursor-pointer">
                      <option className="bg-neutral-900">Project Inquiry</option>
                      <option className="bg-neutral-900">Speaking / Workshop</option>
                      <option className="bg-neutral-900">General Collaboration</option>
                      <option className="bg-neutral-900">Technical Advice</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.2em] text-neutral-500 ml-1">Your Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell me about your vision..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-neutral-700 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full group bg-white text-black font-bold py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Processing...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
        {portfolioData.socials.map((social) => (
          <a 
            key={social.name}
            href={social.url}
            className="text-[10px] uppercase tracking-[0.5em] font-medium hover:text-white transition-colors"
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;