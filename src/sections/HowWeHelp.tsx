import { motion } from 'motion/react';
import { HeartPulse } from 'lucide-react';

export default function HowWeHelp() {
  return (
    <section id="como-ajudamos" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-pestalozzi-blue/10 rounded-2xl mb-6 text-pestalozzi-blue">
              <HeartPulse size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Acolhimento e Avaliação
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atendemos pessoas com deficiência a partir dos 7 anos de idade. Ao chegar na 
              Fundação, o aluno passa por uma avaliação detalhada para ser direcionado ao 
              programa pedagógico mais adequado às suas necessidades.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 h-48 bg-pestalozzi-blue/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pestalozzi-blue text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Chegada</h4>
                  <p className="text-slate-500 mt-1">Primeiro contato com nossa equipe multidisciplinar.</p>
                </div>
              </div>
              <div className="ml-5 w-0.5 h-6 bg-slate-100"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pestalozzi-green text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Avaliação Detalhada</h4>
                  <p className="text-slate-500 mt-1">Análise cuidadosa das necessidades individuais.</p>
                </div>
              </div>
              <div className="ml-5 w-0.5 h-6 bg-slate-100"></div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pestalozzi-red text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Direcionamento</h4>
                  <p className="text-slate-500 mt-1">Inserção no(s) programa(s) pedagógico(s) ideal.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
