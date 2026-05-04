import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl tracking-tight text-white mb-6 uppercase font-light">Fundação <span className="font-logo-heavy font-black tracking-normal">Pestalozzi</span><br/> do Pará</h3>
            <p className="text-sm text-slate-400">
              Desperte o especial que existe em você.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contato</h4>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-slate-500 shrink-0 mt-0.5" />
              <p className="text-sm">Av. Almirante Barroso, 3814<br />Bairro do Marco, Belém - PA</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-slate-500 shrink-0" />
              <p className="text-sm">(91) 3085-3263</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Redes Sociais</h4>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Instagram size={20} />
              @fundacaopestalozzidopara
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
            Julho 2023 | Fundação Pestalozzi do Pará. Todos os direitos reservados.
          </p>

          <a 
            href="https://nano.net.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-bold tracking-wider text-emerald-400 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          >
            Desenvolvido por NANO
          </a>
        </div>
      </div>
    </footer>
  );
}
