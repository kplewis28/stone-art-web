import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useContactModal } from "../contexts/ContactModalContext";

export function Workflow() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openModal } = useContactModal();
  
  const steps = [
    {
      number: "01",
      icon: CheckCircle2,
      title: t.workflow.step1.title,
      description: t.workflow.step1.description
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: t.workflow.step2.title,
      description: t.workflow.step2.description
    },
    {
      number: "03",
      icon: CheckCircle2,
      title: t.workflow.step3.title,
      description: t.workflow.step3.description
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: t.workflow.step4.title,
      description: t.workflow.step4.description
    },
    {
      number: "05",
      icon: CheckCircle2,
      title: t.workflow.step5.title,
      description: t.workflow.step5.description
    }
  ];

  return (
    <section id="workflow" className="py-16 text-white relative overflow-hidden" style={{ backgroundColor: '#071E20' }}>
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 border border-[#D9A441]/30 rounded-full mb-4">
            <span className="text-[#D9A441] text-xs tracking-[2px] uppercase">{t.workflow.title}</span>
          </div>
          <h2 className="text-white mb-3 text-2xl sm:text-3xl md:text-[36px]">{t.workflow.subtitle}</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div 
                key={index} 
                className="group relative"
              >
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+20px)] w-[calc(100%-40px)] h-[1px] bg-gradient-to-r from-[#D9A441]/30 to-transparent"></div>
                )}
                
                <div className="relative text-center">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full border border-[#D9A441]/20 bg-black/30 group-hover:border-[#D9A441] group-hover:bg-[#D9A441]/10 group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#D9A441]/50 group-hover:text-[#D9A441] transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-sm mb-2 text-[#D9A441]/40 group-hover:text-[#D9A441] transition-colors duration-300">
                    {step.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white mb-2 text-sm group-hover:text-[#D9A441] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[rgb(194,196,200)] text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={openModal}
            className="group inline-flex items-center gap-3 bg-transparent border-2 border-[#D9A441] text-white px-10 py-4 rounded-full hover:bg-[#D9A441] hover:border-[#D9A441] transition-all duration-500 shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:shadow-[0_0_30px_rgba(217,164,65,0.6)] backdrop-blur-sm"
          >
            <span className="tracking-[0.5px] uppercase text-sm">{t.workflow.ctaButton}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}