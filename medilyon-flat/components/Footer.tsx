import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-teal to-teal-2 rounded-lg flex items-center justify-center font-black text-white text-lg">M</div>
              <span className="font-bold text-white text-lg">Medi<span className="text-teal">lyon</span></span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 mb-5">Where Accuracy Meets Innovation. Reliable IVD supply across India.</p>
            <a href="mailto:info@medilyonhealthcare.com" className="text-sm text-white/50 hover:text-teal transition-colors">✉ info@medilyonhealthcare.com</a>
          </div>
          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Company</h5>
            <div className="flex flex-col gap-2.5">
              {[['/', 'Home'], ['/about', 'About Us'], ['/partners', 'Partners'], ['/contact', 'Contact']].map(([href, label]) => (
                <Link key={href} href={href} className="text-sm text-white/40 hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Products</h5>
            <div className="flex flex-col gap-2.5">
              {['Reagents & Kits', 'Rapid Tests', 'Molecular', 'Instruments'].map(p => (
                <Link key={p} href="/products" className="text-sm text-white/40 hover:text-white transition-colors">{p}</Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Legal</h5>
            <div className="flex flex-col gap-2.5">
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
                <a key={l} href="#" className="text-sm text-white/40 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-xs text-white/30">© 2026 Medilyon Healthcare Pvt Ltd. All rights reserved.</p>
          <p className="text-xs text-white/30">Where Accuracy Meets Innovation.</p>
        </div>
      </div>
    </footer>
  );
}
