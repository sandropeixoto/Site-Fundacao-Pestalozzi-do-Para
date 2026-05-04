import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative">
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
      </div>
    </section>
  );
}
