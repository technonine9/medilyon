export default function PartnersPage() {
  const manufacturers = ['Roche Diagnostics','Abbott Alinity','Siemens Healthineers','Beckman Coulter','bioMérieux','Sysmex','Mindray','Transasia Bio','Erba Mannheim','SD Biosensor','Meril Diagnostics','J. Mitra & Co.'];
  return (
    <>
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Our Network</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Trusted Partners</h1>
          <p className="text-white/60 text-lg max-w-xl">We partner with leading IVD manufacturers and serve diagnostic labs, hospitals, and clinics across India.</p>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Manufacturer Partners</div>
          <h2 className="text-3xl font-bold text-navy mb-3">World-Class Brands We Distribute</h2>
          <p className="text-slate-500 mb-10 max-w-xl">Authorized distribution partnerships with certified IVD manufacturers. All products come with full documentation and manufacturer warranties.</p>
          <div className="grid grid-cols-2 md:grid-cols-6 border border-slate-200 rounded-xl overflow-hidden">
            {manufacturers.map((m,i) => (
              <div key={m} className={`bg-white hover:bg-teal/5 p-7 flex items-center justify-center text-center text-sm font-semibold text-slate-400 hover:text-teal transition-all border-slate-100 ${i % 6 !== 5 ? 'border-r' : ''} ${i < manufacturers.length - 6 ? 'border-b' : ''}`}>{m}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Who We Serve</div>
          <h2 className="text-3xl font-bold text-navy mb-3">Our Customer Network</h2>
          <p className="text-slate-500 mb-10 max-w-xl">We supply diagnostic solutions to labs and healthcare providers across a range of settings.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[['🏥','Hospital Labs','NABL-accredited hospital laboratories requiring high-volume reagent supply and instrument support.'],['🔬','Diagnostic Centers','Standalone labs and chain pathology centers needing reliable supply and competitive pricing.'],['🏡','Clinics & Nursing Homes','Small-format providers using rapid test kits and POC devices for in-clinic diagnostics.']].map(([icon,title,desc]) => (
              <div key={title} className="bg-white border border-slate-200 rounded-xl p-7 text-center hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
