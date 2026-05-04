import { motion } from 'motion/react';
import { Droplet, BookOpen, Star } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      id: 'pei',
      title: 'PEI – Programa de Estimulação Inicial',
      focus: 'Estímulos básicos para interação social, atenção, concentração e desenvolvimento motor.',
      activities: [
        'Psicopedagogia e Psicomotricidade',
        'Brinquedoteca e Estimulação Sensorial',
        'Atividades da Vida Autônoma',
        'Atividades Aquáticas'
      ],
      objective: 'Desenvolver competências cognitivas, sensoriais e de autocuidado nas atividades diárias.',
      colorClass: 'border-pestalozzi-blue',
      bgClass: 'bg-pestalozzi-blue/5',
      textClass: 'text-pestalozzi-blue',
      icon: <Droplet size={32} strokeWidth={1.5} />
    },
    {
      id: 'pec',
      title: 'PEC – Programa de Estimulação Continuada',
      focus: 'Aprimoramento das habilidades acadêmicas e cognitivas.',
      activities: [
        'Alfabetização e Letramento',
        'Letramento Digital',
        'Matemática, Artes e Música',
        'Atividades Rítmicas e Esportes'
      ],
      objective: 'Desenvolver a cognição e fortalecer a base educacional do aluno.',
      colorClass: 'border-pestalozzi-red',
      bgClass: 'bg-pestalozzi-red/5',
      textClass: 'text-pestalozzi-red',
      icon: <BookOpen size={32} strokeWidth={1.5} />
    },
    {
      id: 'pml',
      title: 'PML – Programa de Multi Letramento',
      focus: 'Preparação direta para a vida autônoma.',
      profile: 'Direcionado a alunos que já desenvolveram maior independência e funcionalidade.',
      objective: 'Fomentar a autonomia e a independência prática.',
      activities: [],
      colorClass: 'border-pestalozzi-green',
      bgClass: 'bg-pestalozzi-green/5',
      textClass: 'text-pestalozzi-green',
      icon: <Star size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section id="programas" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Nossos Programas Pedagógicos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Uma trilha completa de desenvolvimento adaptada às necessidades de cada aluno.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col overflow-hidden border-t-4 ${program.colorClass}`}
            >
              <div className="p-8 flex-grow flex flex-col">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${program.bgClass} ${program.textClass}`}>
                  {program.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">{program.title}</h3>
                
                <div className="space-y-4 mb-6 flex-grow">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Foco</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{program.focus}</p>
                  </div>

                  {program.profile && (
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-1">Perfil</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{program.profile}</p>
                    </div>
                  )}

                  {program.activities && program.activities.length > 0 && (
                     <div>
                       <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Atendimentos</h4>
                       <ul className="text-slate-600 leading-relaxed text-sm space-y-1 ml-4 list-disc marker:text-slate-300">
                         {program.activities.map((act, i) => (
                           <li key={i}>{act}</li>
                         ))}
                       </ul>
                     </div>
                  )}
                </div>

                <div className={`mt-auto pt-4 border-t border-slate-100`}>
                  <p className="text-sm font-medium text-slate-800">
                    <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Objetivo Final</span>
                    {program.objective}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
