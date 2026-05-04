import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center mb-8 md:mb-10"
          >
            <div className="relative">
              <div className="absolute inset-4 bg-gradient-to-tr from-pestalozzi-blue/20 to-pestalozzi-green/20 rounded-full blur-2xl" />
              <img 
                src="/logo-simbolo.png" 
                alt="Logo Símbolo Fundação Pestalozzi do Pará" 
                className="relative h-28 md:h-36 w-auto object-contain drop-shadow-lg"
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1] font-light uppercase"
          >
            Fundação <span className="font-logo-heavy font-black tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-pestalozzi-blue to-pestalozzi-green">Pestalozzi</span><br className="hidden sm:block" /> do Pará
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl font-medium text-slate-700"
          >
            Desperte o especial que existe em você.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed"
          >
            Organização não governamental de caráter filantrópico e de utilidade pública, 
            comprometida com a educação especial desde 1955.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#programas"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-pestalozzi-red text-white text-lg font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/20"
            >
              Conheça nossos programas
              <ArrowRight size={20} strokeWidth={2} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
