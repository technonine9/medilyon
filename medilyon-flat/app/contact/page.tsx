'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Get in Touch</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Request a Quote</h1>
          <p className="text-white/60 text-lg max-w-xl">Tell us what you're sourcing. We'll get back to you with availability, documentation, and pricing within 24 hours.</p>
        </div>
      </div>
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Contact Details</div>
            <h2 className="text-3xl font-bold text-navy mb-4">We're Ready to Help</h2>
            <p className="text-slate-500 mb-8">Reach out via email, phone, or fill in the form. Our team responds within one business day.</p>
            {[
              ['✉️','Email','info@medilyonhealthcare.com'],
              ['📞','Phone / WhatsApp','+91-XXXXXXXXXX'],
              ['📍','Registered Office','Hyderabad, Telangana, India'],
              ['🕐','Business Hours','Mon–Sat, 9:00 AM – 6:00 PM IST'],
            ].map(([icon,label,value]) => (
              <div key={label} className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 bg-teal/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">{icon}</div>
                <div><div className="font-semibold text-navy text-sm">{label}</div><div className="text-sm text-slate-500">{value}</div></div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-9 shadow-sm">
            <h3 className="font-bold text-navy text-xl mb-6">Request a Quote</h3>
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-semibold text-slate-800 mb-1.5">First Name *</label><input required className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" placeholder="Dr. Ramesh" /></div>
                  <div><label className="block text-sm font-semibold text-slate-800 mb-1.5">Last Name *</label><input required className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" placeholder="Kumar" /></div>
                </div>
                <div className="mb-4"><label className="block text-sm font-semibold text-slate-800 mb-1.5">Organization *</label><input required className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" placeholder="Apollo Diagnostics, Hyderabad" /></div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-sm font-semibold text-slate-800 mb-1.5">Email *</label><input required type="email" className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" placeholder="you@lab.com" /></div>
                  <div><label className="block text-sm font-semibold text-slate-800 mb-1.5">Phone *</label><input required className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/10" placeholder="+91 98765 43210" /></div>
                </div>
                <div className="mb-4"><label className="block text-sm font-semibold text-slate-800 mb-1.5">Product Category</label>
                  <select className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal">
                    <option value="">Select category…</option>
                    {['Reagents & Kits','Rapid Tests','Molecular Diagnostics','Hematology','Lab Instruments','Consumables','Multiple / Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="mb-6"><label className="block text-sm font-semibold text-slate-800 mb-1.5">Tell us what you need</label><textarea rows={4} className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-teal resize-none" placeholder="Specific products, monthly volume, existing analyzers…" /></div>
                <button type="submit" className="w-full bg-teal hover:bg-navy text-white py-3.5 rounded-xl font-semibold transition-colors">Submit Quote Request →</button>
              </form>
            ) : (
              <div className="text-center py-10 px-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-navy text-xl mb-2">Request Received!</h3>
                <p className="text-slate-500 text-sm">We'll get back to you within 24 business hours with pricing and availability.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
