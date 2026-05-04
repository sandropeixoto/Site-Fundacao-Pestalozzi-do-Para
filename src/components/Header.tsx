import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Como Ajudamos', href: '#como-ajudamos' },
    { name: 'Programas', href: '#programas' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-pestalozzi-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#programas"
              className="px-5 py-2.5 rounded-full bg-pestalozzi-red text-white text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm"
            >
              Conheça os Programas
            </a>
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-pestalozzi-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
