import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselImages = [
  './carrossel/DSC08765.jpg',
  './carrossel/DSC08946.jpg',
  './carrossel/DSC09017.jpg'
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="sobre" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Primeira instituição especializada em Educação Especial do Pará
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 prose prose-lg prose-slate mx-auto text-slate-600 leading-relaxed"
          >
            <p>
              Desde 1955, desenvolvemos um programa diversificado e multidisciplinar 
              através da Unidade Especializada Lourenço Filho. Nosso objetivo é 
              promover a inclusão, a aprendizagem e o desenvolvimento de pessoas 
              com deficiência cognitiva, intelectual e múltiplas deficiências, visando 
              uma vida autônoma, mais independente e feliz.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 max-w-5xl mx-auto relative group"
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9] bg-slate-100 shadow-xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentIndex}
                src={carouselImages[currentIndex]}
                alt={`Imagem ${currentIndex + 1} da Fundação Pestalozzi`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md text-white transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  index === currentIndex
                    ? "w-8 h-2.5 bg-white shadow-md"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir para a imagem ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
