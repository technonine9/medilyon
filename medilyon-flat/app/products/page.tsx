'use client';
import { useState } from 'react';
import { PRODUCTS, CATEGORY_ICONS, CATEGORY_LABELS } from '@/lib/staticData';
import Link from 'next/link';

const CATS = ['all','reagents','rapid','molecular','hematology','instruments','consumables'];

export default function ProductsPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);
  return (
    <>
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Our Portfolio</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Diagnostic Products</h1>
          <p className="text-white/60 text-lg max-w-xl">Browse our complete catalog of IVD products — certified, quality-verified, and available for pan-India delivery.</p>
        </div>
      </div>
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2.5 flex-wrap mb-10">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${active === cat ? 'bg-teal border-teal text-white' : 'bg-white border-slate-200 text-slate-600 hover:border-teal hover:text-teal'}`}>
                {cat === 'all' ? 'All Products' : CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {filtered.map(product => (
              <div key={product._id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-1 hover:border-teal transition-all">
                <div className="h-40 bg-slate-50 flex items-center justify-center text-5xl">{CATEGORY_ICONS[product.category]}</div>
                <div className="p-5">
                  <span className="text-xs font-bold tracking-wide uppercase text-teal bg-teal/10 px-2.5 py-1 rounded-full">{CATEGORY_LABELS[product.category]}</span>
                  <h4 className="font-semibold text-navy mt-3 mb-2">{product.name}</h4>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {product.certifications.map(c => (
                      <span key={c} className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-14 p-8 bg-teal/8 border border-teal/20 rounded-xl text-center">
            <h3 className="font-bold text-navy text-lg mb-2">Don't see what you need?</h3>
            <p className="text-slate-500 mb-5">We source 100+ SKUs. Tell us what you need — we'll check availability within 24 hours.</p>
            <Link href="/contact" className="bg-teal hover:bg-teal-2 text-white px-6 py-3 rounded-xl font-semibold transition-colors inline-block">Request a Specific Product →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
