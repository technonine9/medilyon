import Link from 'next/link';
import { PRODUCTS, CATEGORY_ICONS, CATEGORY_LABELS } from '@/lib/staticData';

const CATEGORIES = ['reagents','rapid','molecular','hematology','instruments','consumables'];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 text-teal text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              🧬 IVD Distribution · Pan-India Coverage
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Empowering Diagnostics.<br /><span className="text-teal">Where Accuracy Meets Innovation.</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Trusted distribution partner for high-quality IVD solutions. We help laboratories and healthcare providers source certified products with reliable logistics and responsive support.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/products" className="bg-teal hover:bg-teal-2 text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal/30">Explore Products →</Link>
              <Link href="/contact" className="bg-white/8 hover:bg-white/14 text-white px-7 py-3.5 rounded-xl font-semibold border border-white/15 transition-all">Request a Quote</Link>
            </div>
            <div className="flex gap-10 mt-12 pt-8 border-t border-white/8">
              {[['100+', 'Product SKUs'],['50+','Partner Labs'],['10+','States Served']].map(([n,l]) => (
                <div key={l}><div className="text-3xl font-black text-white">{n}</div><div className="text-xs text-white/40 mt-1">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-5">
        <div className="max-w-6xl mx-auto px-6 flex gap-8 items-center justify-center flex-wrap">
          {['ISO/CE-aligned sourcing','Pan-India distribution','99% order accuracy','Dedicated support','Fast fulfillment'].map(t => (
            <div key={t} className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />{t}
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-navy py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {[['100+','Product SKUs'],['50+','Partner Labs & Clinics'],['10+','States Served'],['99%','Order Accuracy']].map(([n,l]) => (
            <div key={l} className="text-center py-6 px-4">
              <div className="text-4xl font-black text-white">{n}</div>
              <div className="text-sm text-white/40 mt-2">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">What You Get</div>
          <h2 className="text-3xl font-bold text-navy mb-3">Built for Modern Laboratories</h2>
          <p className="text-slate-500 mb-12 max-w-xl">Everything a diagnostics provider needs — quality, speed, and support under one reliable partner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ['📦','Reliable Supply','Consistent availability across chemistry, hematology, immunoassay, and molecular diagnostics categories.'],
              ['🏅','Quality Verification','Documentation readiness and certified sourcing for smooth audits and compliance requirements.'],
              ['⚡','Fast Logistics','Clear communication from PO to delivery, with real-time updates and on-time execution.'],
              ['🤝','Dedicated Support','Product onboarding, training coordination, and issue resolution — backed by a responsive team.'],
            ].map(([icon,title,desc]) => (
              <div key={title} className="border border-slate-200 rounded-xl p-8 hover:border-teal hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center text-2xl mb-5">{icon}</div>
                <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Our Portfolio</div>
          <h2 className="text-3xl font-bold text-navy mb-3">Diagnostic Solutions We Distribute</h2>
          <p className="text-slate-500 mb-12 max-w-xl">A focused portfolio for modern laboratories — built for performance, compliance, and value.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {CATEGORIES.map(cat => (
              <Link key={cat} href={`/products?cat=${cat}`} className="bg-white border border-slate-200 hover:border-teal rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{CATEGORY_ICONS[cat]}</div>
                <h4 className="font-semibold text-navy text-sm">{CATEGORY_LABELS[cat]}</h4>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="bg-teal hover:bg-teal-2 text-white px-7 py-3 rounded-xl font-semibold transition-colors inline-block">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-br from-teal/15 to-teal-2/8 border border-teal/20 rounded-2xl p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Reliable IVD Supply Partner?</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">Tell us what you're sourcing — category, monthly volume, city. We'll share availability, documentation, and pricing quickly.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="bg-teal hover:bg-teal-2 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors">Request Quote →</Link>
              <Link href="/contact" className="bg-white/8 hover:bg-white/14 text-white px-7 py-3.5 rounded-xl font-semibold border border-white/15 transition-colors">Talk to Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
