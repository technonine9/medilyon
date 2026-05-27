export default function AboutPage() {
  return (
    <>
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Our Story</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Empowering Diagnostics<br />Across India</h1>
          <p className="text-white/60 text-lg max-w-xl">Medilyon was built on a simple belief: every laboratory deserves access to quality IVD products, delivered on time, with the support to use them well.</p>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Mission & Vision</div>
            <h2 className="text-3xl font-bold text-navy mb-4">Making Diagnostics Better, Together</h2>
            <p className="text-slate-500 mb-4">Our mission is to be the most reliable IVD distribution partner in India — connecting certified manufacturers with the labs and providers that need their products.</p>
            <p className="text-slate-500 mb-8">We believe fast, accurate diagnostics save lives, and that every lab — from a 500-bed hospital to a rural clinic — deserves the same quality of supply and support.</p>
            <div className="space-y-4">
              {[['🎯','Quality First','We only source from certified manufacturers with full documentation.'],['🤝','Partner-Centric','Your success is our success. We invest in relationships, not transactions.'],['🚀','Execution Excellence','We do what we say, on time, with no surprises.']].map(([icon,title,desc]) => (
                <div key={title} className="flex gap-4">
                  <div className="w-9 h-9 bg-teal/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{icon}</div>
                  <div><div className="font-semibold text-navy text-sm">{title}</div><p className="text-sm text-slate-500">{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">Our Journey</div>
            <div className="border-l-2 border-slate-200 pl-6 space-y-7">
              {[['2020','Founded in Hyderabad','Medilyon incorporated with a focus on IVD distribution in Telangana and AP.'],['2021','First 25 Labs Onboarded','Rapid expansion. Added molecular diagnostics during the COVID-19 surge.'],['2022','Pan-India Distribution','Expanded to 10+ states. Signed 3 new international distribution agreements.'],['2023','50+ Partner Milestone','Surpassed 50 active partner labs. Launched dedicated account management.'],['2024–25','100+ SKUs & Growing','Expanded catalog to 100+ SKUs across all major IVD categories.']].map(([year,title,desc]) => (
                <div key={year} className="relative">
                  <div className="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-teal border-2 border-white shadow-[0_0_0_2px_#0EA5E9]" />
                  <div className="text-xs font-bold text-teal tracking-wide uppercase">{year}</div>
                  <div className="font-semibold text-navy mt-1 mb-1">{title}</div>
                  <p className="text-sm text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="bg-navy py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          {[['100+','Product SKUs'],['50+','Partner Labs'],['10+','States Served'],['5+','Years of Service']].map(([n,l]) => (
            <div key={l} className="text-center py-6 px-4"><div className="text-4xl font-black text-white">{n}</div><div className="text-sm text-white/40 mt-2">{l}</div></div>
          ))}
        </div>
      </div>
    </>
  );
}
