import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Como Ajudamos', href: '#como-ajudamos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Galeria', href: '#galeria' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="./logo-simbolo.png" alt="Logo Símbolo Fundação Pestalozzi do Pará" className="h-10 w-auto object-contain" />
            <div className="flex flex-col justify-center">
              <span className="text-xl tracking-tight text-slate-900 font-light uppercase leading-none">
                Fundação <span className="font-logo-heavy font-black tracking-normal text-pestalozzi-blue">Pestalozzi</span>
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-[0.2em] font-medium mt-1">
                do Pará
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors relative py-2 ${
                    isActive
                      ? 'text-pestalozzi-blue'
                      : 'text-slate-600 hover:text-pestalozzi-blue'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-pestalozzi-blue rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <motion.a
              href="https://doacoes.fundacaopestalozzidopara.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              animate={{
                scale: [1, 1.04, 1],
                boxShadow: [
                  "0 4px 6px -1px rgba(225, 29, 72, 0.15), 0 2px 4px -1px rgba(225, 29, 72, 0.1)",
                  "0 0 0 10px rgba(225, 29, 72, 0.25)",
                  "0 4px 6px -1px rgba(225, 29, 72, 0.15), 0 2px 4px -1px rgba(225, 29, 72, 0.1)"
                ]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-pestalozzi-red text-white text-sm font-medium hover:bg-rose-700 transition-colors shadow-md"
            >
              <Heart size={16} className="fill-current" />
              Doar
            </motion.a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-slate-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-pestalozzi-blue'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-pestalozzi-blue'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 px-3">
              <a
                href="https://doacoes.fundacaopestalozzidopara.org.br/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-pestalozzi-red text-white text-base font-medium hover:bg-rose-700 transition-colors shadow-md shadow-rose-500/20"
              >
                <Heart size={18} className="fill-current" />
                Doar
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
