import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, Send, Sparkles, ArrowDownToLine, Info, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';
import { downloadResume } from '../utils/resumeGenerator';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadResume();
  };

  const validate = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please enter a message';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setFormSubmitted(true);
    }
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      actionText: 'Send Email'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kattadeepthi',
      href: PERSONAL_INFO.linkedinUrl,
      actionText: 'View Profile'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Deepthi7890',
      href: PERSONAL_INFO.githubUrl,
      actionText: 'Explore Repos'
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`,
      actionText: 'Call Directly'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-transparent relative border-t border-zinc-900/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-purple-400 font-semibold">
              GET IN TOUCH
            </span>
            <div className="h-[1px] w-8 bg-purple-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light max-w-2xl leading-relaxed">
            I am open to internship opportunities, entry-level opportunities, AI/ML projects, Data Analytics roles, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Methods & Resume CTA (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-lg font-display font-bold text-white mb-4">
              Direct Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isCopied = copiedField === method.id;

                return (
                  <Tilt3D
                    key={method.id}
                    id={`contact-card-${method.id}`}
                    maxTilt={10}
                    glareOpacity={0.35}
                    scale={1.02}
                    borderRadius="1rem"
                    className="h-full"
                  >
                    <div className="p-5 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900/90 border border-zinc-800 hover:border-purple-500/50 backdrop-blur-md transition-all flex flex-col justify-between group shadow-xl shadow-black/40 h-full">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-lg bg-purple-950/70 text-purple-400 border border-purple-500/30">
                            <Icon className="w-4 h-4" />
                          </div>
                          <button
                            onClick={() => handleCopy(method.value, method.id)}
                            title="Copy to clipboard"
                            className="text-zinc-500 hover:text-purple-300 transition-colors p-1 cursor-pointer"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>

                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                          {method.label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-200 transition-colors break-all">
                          {method.value}
                        </span>
                      </div>

                      <div className="pt-4 mt-4 border-t border-zinc-850">
                        <a
                          href={method.href}
                          target={method.id === 'linkedin' || method.id === 'github' ? '_blank' : undefined}
                          rel={method.id === 'linkedin' || method.id === 'github' ? 'noopener noreferrer' : undefined}
                          className="text-xs font-mono font-medium text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
                        >
                          <span>{method.actionText}</span>
                          <span>&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </Tilt3D>
                );
              })}
            </div>

            {/* Resume Download CTA Box with Direct Download */}
            <Tilt3D maxTilt={6} glareOpacity={0.3} scale={1.01} borderRadius="1rem">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/50 via-violet-950/40 to-zinc-900/70 border border-purple-500/40 backdrop-blur-md shadow-xl shadow-purple-950/30 relative">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <h4 className="font-display font-bold text-white text-base">
                        Curriculum Vitae / Resume
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-300 font-light">
                      Click to download / print Katta Deepthi's complete resume in PDF format.
                    </p>
                  </div>

                  <button
                    onClick={handleResumeClick}
                    id="contact-download-resume-btn"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 border border-purple-400/40 transition-all shadow-md shadow-purple-950/60 cursor-pointer shrink-0 active:scale-95"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </Tilt3D>

          </div>

          {/* Right Column: Contact UI Form with Specular Glare (6 Cols) */}
          <div className="lg:col-span-6">
            <Tilt3D maxTilt={6} glareOpacity={0.25} scale={1.01} borderRadius="1rem">
              <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-800">
                  <h3 className="text-lg font-display font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">Interface</span>
                </div>

                {formSubmitted ? (
                  <div className="space-y-4 py-4 animate-in fade-in duration-300">
                    <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 flex items-start gap-3 text-purple-200">
                      <Info className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">Message Prepared</h4>
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          Your message is ready to be sent. Click below to launch your email client with your message pre-filled to <code className="text-purple-300">{PERSONAL_INFO.email}</code>.
                        </p>
                      </div>
                    </div>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Portfolio Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 transition-colors shadow-lg shadow-purple-950"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch in Mail Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="w-full py-2.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Reset Form
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090910] border border-zinc-750 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090910] border border-zinc-750 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                        Message / Project Scope *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Deepthi, I'd like to discuss an opportunity regarding..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090910] border border-zinc-750 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                      />
                      {formErrors.message && (
                        <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 transition-all shadow-lg shadow-purple-950/60 active:scale-98 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Message</span>
                    </button>

                    <p className="text-[11px] text-zinc-500 text-center font-mono">
                      Direct communication preferred via Email & LinkedIn
                    </p>
                  </form>
                )}
              </div>
            </Tilt3D>
          </div>

        </div>

      </div>
    </section>
  );
};
