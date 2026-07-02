import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import newGalleryImage from "figma:asset/e5c77b6ee438fd07eb3dd56c896470c48c02b957.png";
import emeraldRingImage from "figma:asset/eb7244e31b1ac4397adbe9e203875cb838057076.png";
import rubyRingImage from "figma:asset/eb9f05f027f34ee771b9471d63495ca85883cde6.png";
import sapphirePendantImage from "figma:asset/06c6ce6074b7c17accfa33b48fd606bd5db4dc1d.png";
import diamondEternityBandImage from "figma:asset/3f6408e39a9678cbf226ceab87dc10fc4299c255.png";
import twoHaloRingsImage from "figma:asset/4c80f7595960183a1302e7a0d85acb08aba07e08.png";

const galleryImages = [
  {
    url: newGalleryImage,
    alt: "Diamond bracelet and ring showcasing precision setting"
  },
  {
    url: emeraldRingImage,
    alt: "Emerald cabochon ring with diamond-set band"
  },
  {
    url: rubyRingImage,
    alt: "Ruby ring with diamond pavé setting showcasing precision craftsmanship"
  },
  {
    url: sapphirePendantImage,
    alt: "Blue sapphire pendant with diamond halo setting"
  },
  {
    url: diamondEternityBandImage,
    alt: "Diamond eternity band with precision prong setting"
  },
  {
    url: twoHaloRingsImage,
    alt: "Diamond and ruby halo rings showcasing contrasting gemstone settings"
  }
];

export function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-black px-4 py-2 border border-[#071E20]/20 rounded-full inline-block text-sm tracking-wide mb-6">{t.gallery.title}</h2>
          <p className="text-xl sm:text-2xl md:text-[36px] text-gray-700">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden bg-gray-100 group cursor-pointer"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic">
            {t.gallery.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}