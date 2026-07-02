import { ArrowRight } from "lucide-react";
import Group1 from "../imports/Group67";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useContactModal } from "../contexts/ContactModalContext";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openModal } = useContactModal();
  
  const handleContact = () => {
    openModal();
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden group/hero" style={{ backgroundColor: '#071E20' }}>
      {/* YouTube Video Background */}
      <div className="absolute inset-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 grayscale"
          src="https://www.youtube.com/embed/IU0MugZpdz4?autoplay=1&mute=1&loop=1&playlist=IU0MugZpdz4&controls=0&showinfo=0&rel=0&modestbranding=1&start=10&enablejsapi=1&playsinline=1"
          title="stone art precision craftsmanship"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="eager"
        />
        {/* Overlay más oscuro en el centro con efecto radial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,30,32,0.75)_0%,rgba(7,30,32,0.8)_50%,rgba(7,30,32,0.9)_100%)] md:bg-[radial-gradient(circle_at_center,rgba(7,30,32,0.2)_0%,rgba(7,30,32,0.3)_50%,rgba(7,30,32,0.4)_100%)] md:group-hover/hero:bg-[radial-gradient(circle_at_center,rgba(7,30,32,0.75)_0%,rgba(7,30,32,0.8)_50%,rgba(7,30,32,0.9)_100%)] transition-all duration-700"></div>
      </div>

      {/* Animated Text Lines */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {/* Precision - Top Left */}
        <div 
          className="absolute top-[20%] left-[10%] text-amber-500 tracking-[8px] uppercase opacity-30 md:opacity-0 md:group-hover/hero:opacity-30 transition-all duration-1000 delay-100"
          style={{
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '8px',
            textShadow: '0 0 30px rgba(217, 164, 65, 0.5)',
          }}
        >
          {t.hero.keywords.precision}
        </div>
        
        {/* Quality - Right Side */}
        <div 
          className="absolute bottom-[15%] md:bottom-auto md:top-[35%] left-[10%] md:left-auto md:right-[15%] text-white tracking-[8px] uppercase opacity-25 md:opacity-0 md:group-hover/hero:opacity-25 transition-all duration-1000 delay-300"
          style={{
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '8px',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
          }}
        >
          {t.hero.keywords.quality}
        </div>
        
        {/* Experience - Bottom Right */}
        <div 
          className="absolute bottom-[25%] right-[12%] text-amber-500 tracking-[8px] uppercase opacity-30 md:opacity-0 md:group-hover/hero:opacity-30 transition-all duration-1000 delay-500"
          style={{
            fontSize: '14px',
            fontWeight: '300',
            letterSpacing: '8px',
            textShadow: '0 0 30px rgba(217, 164, 65, 0.5)',
          }}
        >
          {t.hero.keywords.experience}
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-[20%] left-[10%] w-[80px] h-[1px] bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 -translate-y-4 opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-all duration-1000 delay-100"></div>
        <div className="absolute bottom-[15%] md:bottom-auto md:top-[35%] left-[10%] md:left-auto md:right-[15%] w-[60px] h-[1px] bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-y-6 opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-all duration-1000 delay-300"></div>
        <div className="absolute bottom-[25%] right-[12%] w-[70px] h-[1px] bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 translate-y-8 opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-all duration-1000 delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center text-white flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="w-[55px] h-[55px] mb-6 sm:mb-8 rotate-[135deg] opacity-100 md:opacity-0 md:group-hover/hero:opacity-90 transition-opacity duration-700 relative">
          <Group1 />
        </div>
        
        <h1 className="mb-8 sm:mb-12 tracking-[0.5px] sm:tracking-[1.13px] text-white text-[28px] sm:text-[36px] md:text-[42.19px] leading-[40px] sm:leading-[50px] md:leading-[60px] font-light drop-shadow-[0px_25px_50px_rgba(0,0,0,0.15)] opacity-100 md:opacity-0 md:group-hover/hero:opacity-100 transition-opacity duration-700 max-w-[95%] sm:max-w-full">
          {t.hero.title.split('\\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <button 
          onClick={handleContact}
          className="group inline-flex items-center gap-3 bg-transparent border-2 border-amber-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-amber-500 hover:border-amber-500 transition-all duration-500 shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:shadow-[0_0_30px_rgba(217,164,65,0.6)] backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/hero:opacity-100"
        >
          <span className="tracking-[0.5px] uppercase text-xs sm:text-sm">{t.hero.cta}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>

      {/* Scroll Indicator - Removed for cleaner look */}
    </section>
  );
}