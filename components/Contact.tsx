import React, { useState } from 'react';
import { portfolioData } from '../data.ts';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { email, phone, office } = portfolioData.identity;
  const { socials } = portfolioData;
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Construct WhatsApp message
    const whatsappNumber = '916371034325';
    const text = `*New Inquiry from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    setTimeout(() => {
      setFormState('submitted');
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6 relative bg-[#030303] overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/[0.02] blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-6">Inquiry</h2>
            <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
              Let's craft <br/><span className="font-serif italic font-normal text-neutral-500">your future</span>.
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="group cursor-pointer block active:scale-95 transition-transform">
                <p className="text-[9px] uppercase tracking-widest text-neutral-600 mb-2">Connect Directly</p>
                <a href={`mailto:${email}`} className="text-lg md:text-2xl font-light hover:text-white transition-colors flex items-center gap-2">
                  {email} <ArrowUpRight size={18} className="text-neutral-700" />
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-600 mb-2">Mobile</p>
                  <p className="text-base font-medium">{phone}</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-600 mb-2">Studio</p>
                  <p className="text-base font-medium">{office}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 items-center">
              {socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold py-2"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden border border-white/10 shadow-3xl">
              {formState === 'submitted' ? (
                <div className="py-16 flex flex-col items-center text-center animate-fade-up">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-green-500 mb-8 border border-green-500/20">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Redirecting...</h4>
                  <p className="text-neutral-500 max-w-xs mx-auto text-sm leading-relaxed">
                    Opening WhatsApp to continue our conversation. If it doesn't open, please check your browser settings.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 ml-1">Your Name</label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text" 
                        placeholder="e.g. James Bond"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800 text-sm md:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 ml-1">Email Address</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="contact@agency.com"
                        className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800 text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 ml-1">Tell me about your project</label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share your vision..."
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-all placeholder:text-neutral-800 resize-none text-sm md:text-base"
                    ></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full group bg-white text-black font-bold py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-neutral-200 active:scale-[0.97] transition-all disabled:opacity-50 text-xs md:text-sm uppercase tracking-widest"
                  >
                    {formState === 'submitting' ? (
                      <span className="flex items-center gap-3">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Initiating...
                      </span>
                    ) : (
                      <>
                        Initiate Connection
                        <Send size={16} />
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