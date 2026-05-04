import { motion } from 'motion/react';
import { Users, Heart, History } from 'lucide-react';

export default function Differentials() {
  const items = [
    {
      title: 'Equipe Especializada',
      description: 'Professores preparados e qualificados para o atendimento multidisciplinar.',
      icon: <Users size={28} strokeWidth={1.5} />,
    },
    {
      title: 'Gratuidade',
      description: 'Atendimento realizado sem nenhum custo para o usuário.',
      icon: <Heart size={28} strokeWidth={1.5} />,
    },
    {
      title: 'Experiência',
      description: 'Referência em educação especial no estado há mais de 70 anos.',
      icon: <History size={28} strokeWidth={1.5} />,
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Nossos Diferenciais
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center"
            >
              <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-pestalozzi-blue mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
