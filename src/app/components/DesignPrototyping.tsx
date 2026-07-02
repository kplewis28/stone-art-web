import { Gem, Hexagon, Crown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

export function DesignPrototyping() {
  const { language } = useLanguage();
  const t = translations[language];

  const capabilities = [
    {
      icon: Gem,
      title: t.design.simpleWork,
      description: t.design.simpleDescription,
    },
    {
      icon: Hexagon,
      title: t.design.intermediateWork,
      description: t.design.intermediateDescription,
    },
    {
      icon: Crown,
      title: t.design.complexWork,
      description: t.design.complexDescription,
    },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="design" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-black px-4 py-2 border border-[#071E20]/20 rounded-full inline-block text-sm tracking-wide">{t.design.subtitle.toUpperCase()}</span>
          </div>
          <h2 className="mb-6 text-black text-2xl sm:text-3xl md:text-4xl">{t.design.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            {language === 'de' ? t.design.description.replace('Präzision und ', '').replace('gewährleisten', 'gewährleistet') : t.design.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative h-[280px] lg:h-[500px] order-2 lg:order-1 overflow-hidden rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/8PQgc56wXnc?autoplay=1&mute=1&loop=1&playlist=8PQgc56wXnc&controls=0&showinfo=0&modestbranding=1"
              title="Stone setting complexity levels"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ border: 'none', width: '177.77%', height: '200%', minWidth: '177.77%' }}
            />
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 -z-10"></div>
          </div>

          {/* Capabilities List */}
          <div className="space-y-8 order-1 lg:order-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border-2 border-[#D9A441] flex items-center justify-center group-hover:bg-[#D9A441]/5 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#D9A441] transition-all duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-black mb-2">{capability.title}</h3>
                    <p className="text-gray-600">{capability.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* "Precision at Every Level" section removed */}
      </div>
    </section>
  );
}