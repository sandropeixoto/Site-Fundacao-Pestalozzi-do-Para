import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: './galeria/DSC08940.jpg', name: 'DSC08940.jpg' },
  { src: './galeria/DSC08929.jpg', name: 'DSC08929.jpg' },
  { src: './galeria/DSC08933.jpg', name: 'DSC08933.jpg' },
  { src: './galeria/DSC08936.jpg', name: 'DSC08936.jpg' },
  { src: './galeria/DSC08991.jpg', name: 'DSC08991.jpg' },
  { src: './galeria/DSC09005.jpg', name: 'DSC09005.jpg' },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex! + 1) % galleryImages.length);
    }
  };

  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prevIndex) => (prevIndex! === 0 ? galleryImages.length - 1 : prevIndex! - 1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Clean up overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section id="galeria" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light tracking-tight text-slate-900 mb-4"
          >
            Nossa <span className="font-semibold text-pestalozzi-blue">Galeria</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Acompanhe nossos momentos, atividades e o dia a dia na Fundação Pestalozzi do Pará.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] bg-slate-200 shadow-sm"
            >
              <img 
                src={image.src} 
                alt={`Galeria ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg">
                    <Eye size={32} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-[110] text-slate-300 hover:text-white transition-colors p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md focus:outline-none"
              aria-label="Fechar galeria"
            >
              <X size={28} />
            </button>

            <button 
              onClick={goToPrevious}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[110] text-slate-300 hover:text-white transition-colors p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full hover:scale-110 focus:outline-none"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={36} />
            </button>

            <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].name}
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-8 left-0 right-0 text-center flex flex-col items-center pointer-events-none"
              >
                <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-sm font-medium tracking-wider text-white">
                    {selectedIndex + 1} de {galleryImages.length}
                  </span>
                </div>
              </motion.div>
            </div>

            <button 
              onClick={goToNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[110] text-slate-300 hover:text-white transition-colors p-3 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full hover:scale-110 focus:outline-none"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
