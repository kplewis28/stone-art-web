import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { ArrowRight } from "lucide-react";
import { 
  CustomWorkIcon, 
  QualityControlIcon 
} from "./icons/SettingIcons";
import { PaveSettingIconCustom } from "./icons/PaveSettingIconCustom";
import { ProngSettingIconCustom } from "./icons/ProngSettingIconCustom";
import { ChannelSettingIconCustom } from "./icons/ChannelSettingIconCustom";
import { BezelSettingIconCustom } from "./icons/BezelSettingIconCustom";
import { CarreSettingIconCustom } from "./icons/CarreSettingIconCustom";
import ringsPattern from "figma:asset/d2fe961b464ac9bebeb6d9ef6f0000d08bfa6743.png";
import { useContactModal } from "../contexts/ContactModalContext";

export function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openModal } = useContactModal();
  
  const services = [
    {
      icon: PaveSettingIconCustom,
      title: t.services.paveSetting.title,
      description: t.services.paveSetting.description
    },
    {
      icon: ProngSettingIconCustom,
      title: t.services.prongsetting.title,
      description: t.services.prongsetting.description
    },
    {
      icon: ChannelSettingIconCustom,
      title: t.services.channelSetting.title,
      description: t.services.channelSetting.description
    },
    {
      icon: BezelSettingIconCustom,
      title: t.services.bezelsetting.title,
      description: t.services.bezelsetting.description
    },
    {
      icon: CarreSettingIconCustom,
      title: t.services.carreSetting.title,
      description: t.services.carreSetting.description
    },
    {
      icon: CustomWorkIcon,
      title: t.services.customWork.title,
      description: t.services.customWork.description
    },
    {
      icon: QualityControlIcon,
      title: t.services.qualityControl.title,
      description: t.services.qualityControl.description
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block mb-6">
            <span className="text-black px-4 py-2 border border-[#071E20]/20 rounded-full inline-block text-sm tracking-wide">{t.footer.services.toUpperCase()}</span>
          </div>
          <h2 className="mb-6 text-black text-2xl sm:text-3xl md:text-4xl hyphens-auto break-words">
            {language === 'de' ? (
              'Fassarten'
            ) : (
              t.services.title
            )}
          </h2>
          <p className="text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 mb-6">
                  <Icon className="w-full h-full text-[#d9a441]" />
                </div>
                <h3 className="text-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Custom Requests */}
        <div className="mt-16 bg-[#071E20] text-white p-16 text-center border-t-4 border-[#d9a441] relative overflow-hidden" style={{ backgroundImage: `url(${ringsPattern})`, backgroundRepeat: 'repeat', backgroundSize: '300px auto', backgroundPosition: 'center' }}>
          {/* Decorative background pattern overlay for opacity control */}
          <div className="absolute inset-0 bg-[#071E20] opacity-[0.88] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-block mb-4">
              <span className="text-[#d9a441] px-4 py-2 border border-[#d9a441]/30 rounded-full text-sm tracking-wide">{t.services.bespoke.badge}</span>
            </div>
            <h3 className="text-white mb-6 text-3xl">{t.services.bespoke.title}</h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              {t.services.bespoke.description}
            </p>
            <button 
              onClick={openModal}
              className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#d9a441] text-white px-10 py-4 rounded-full hover:bg-[#d9a441] hover:border-[#d9a441] transition-all duration-500 shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:shadow-[0_0_30px_rgba(217,164,65,0.6)] backdrop-blur-sm"
            >
              <span className="tracking-[0.5px] uppercase text-sm">{t.services.bespoke.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}