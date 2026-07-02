import { Award, Laptop, Shield, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

// Swiss Cross Icon Component
const SwissCross = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="9" y="4" width="6" height="16" fill="currentColor" />
    <rect x="4" y="9" width="16" height="6" fill="currentColor" />
  </svg>
);

export function ValueProposition() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    {
      icon: Target,
      title: t.value.precision.title,
      description: t.value.precision.description
    },
    {
      icon: Award,
      title: t.value.expertise.title,
      description: t.value.expertise.description
    },
    {
      icon: Laptop,
      title: t.value.technology.title,
      description: t.value.technology.description
    },
    {
      icon: Shield,
      title: t.value.reliability.title,
      description: t.value.reliability.description
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-[#D9A441]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#071E20]/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 border border-[#D9A441]/30 rounded-full mb-4">
            <span className="text-[#D9A441] text-xs tracking-[2px] uppercase">{t.value.badge}</span>
          </div>
          <h2 className="text-black text-2xl sm:text-3xl md:text-[36px]">{t.value.title}</h2>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-lg border border-gray-100 hover:border-[#D9A441]/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full border border-[#D9A441]/20 bg-gray-50/50 flex items-center justify-center transition-all duration-300 group-hover:border-[#D9A441]/40 group-hover:bg-[#D9A441]/5">
                    <Icon className="w-6 h-6 text-[#D9A441] transition-all duration-300 group-hover:scale-105" />
                  </div>
                </div>
                
                <h3 className="text-black mb-2 text-center text-base transition-colors duration-300 group-hover:text-[#D9A441]">{value.title}</h3>
                <p className="text-gray-500 text-center text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* Card 1 - 30+ Years */}
          <div className="group relative text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#D9A441]/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#D9A441]/10 hover:-translate-y-2">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D9A441]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#D9A441] via-[#D9A441] to-[#c99335] tracking-tighter transition-all duration-500 group-hover:scale-110" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 300 }}>20</div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D9A441]/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></div>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D9A441]/40"></div>
              </div>
              <p className="text-gray-900 tracking-[1px] uppercase mb-1.5" style={{ fontSize: '11px' }}>{t.value.stats.yearsOfExcellence}</p>
            </div>
          </div>
          
          {/* Card 2 - 100% Quality - DESTACADA */}
          <div className="group relative text-center p-12 bg-gradient-to-br from-[#071E20] via-[#0a2628] to-[#071E20] rounded-2xl border-2 border-[#D9A441] transition-all duration-500 overflow-hidden shadow-2xl shadow-[#D9A441]/30 hover:shadow-[0_20px_60px_rgba(217,164,65,0.4)] hover:scale-105 md:-translate-y-4">
            {/* Premium effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(217,164,65,0.1),transparent)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,164,65,0.05),transparent)]"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-4 right-4 w-20 h-20 border border-[#D9A441]/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-[#D9A441]/20 rounded-full"></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="text-8xl text-[#D9A441] tracking-tighter transition-all duration-500 group-hover:scale-110" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 200, textShadow: '0 0 40px rgba(217,164,65,0.3)' }}>100<span className="text-6xl">%</span></div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent"></div>
              </div>
              <p className="text-white tracking-[2px] uppercase mb-2" style={{ fontSize: '12px', letterSpacing: '2px' }}>{t.value.stats.qualityGuarantee}</p>
            </div>
          </div>
          
          {/* Card 3 - 50+ Brands */}
          <div className="group relative text-center p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#D9A441]/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#D9A441]/10 hover:-translate-y-2">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D9A441]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-br from-[#D9A441] via-[#D9A441] to-[#c99335] tracking-tighter transition-all duration-500 group-hover:scale-110" style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 300 }}>50+</div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D9A441]/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]"></div>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D9A441]/40"></div>
              </div>
              <p className="text-gray-900 tracking-[1px] uppercase mb-1.5" style={{ fontSize: '11px' }}>{t.value.stats.luxuryBrands}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}