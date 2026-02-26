import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Target, Eye, History, ShieldCheck, TrendingUp } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "../lib/animations";
import { PoliticasSection } from "../components/sections/PoliticasSection";

const Company: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TC Logistix - TRACTOCAR LOGISTICS S.A.S.',
    url: 'https://tractocar.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cl. 25 #24A-16, Manga',
      addressLocality: 'Cartagena',
      addressRegion: 'Bolívar',
      addressCountry: 'CO',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'RUC' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'BASC' },
    ],
  };

  return (
    <div className="relative bg-brand-bg">
      <Helmet>
        <title>Empresa | TC Logistix — Políticas Corporativas y Gobierno</title>
        <meta name="description" content="Conoce las políticas de calidad, HSE, seguridad vial y no alcohol de TC Logistix. Más de 30 años comprometidos con estándares que cuidan personas y operaciones logísticas en Colombia." />
        <meta name="keywords" content="TC Logistix políticas, política de calidad logística Colombia, política HSE transporte, seguridad vial empresa logística, TRACTOCAR LOGISTICS" />
        <meta property="og:title" content="Políticas Corporativas | TC Logistix" />
        <meta property="og:description" content="Estándares que cuidan a las personas y la operación logística en Colombia." />
        <meta property="og:url" content="https://tractocar.com/company" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-6 block"
          >
            Nuestra Historia
          </motion.span>
          <motion.h1 
            variants={fadeUpVariants}
            className="text-6xl md:text-8xl font-display mb-12 leading-none text-brand-text"
          >
            MÁS DE 3 DÉCADAS <br />DE TRAYECTORIA
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeUpVariants} className="space-y-6">
              <p className="text-brand-muted text-lg leading-relaxed">
                Fundada originalmente en 1992, TC Logistix ha evolucionado de ser una empresa de transporte local a convertirse en un referente nacional en logística integral. Nuestra sede principal en Cartagena nos posiciona estratégicamente para el comercio exterior.
              </p>
              <div className="p-8 bg-brand-bg-2 border-l-4 border-brand-accent">
                <p className="italic text-brand-text text-xl font-light">
                  "Infraestructura en movimiento para conectar a Colombia con el mundo."
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpVariants} className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-brand-surface border border-brand-border p-6 flex flex-col justify-between group hover:border-brand-accent transition-colors">
                <History className="text-brand-accent" size={32} />
                <div>
                  <span className="block text-3xl font-display text-brand-text">1992</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">Fundación</span>
                </div>
              </div>
              <div className="aspect-square bg-brand-surface border border-brand-border p-6 flex flex-col justify-between group hover:border-brand-accent transition-colors">
                <ShieldCheck className="text-brand-accent" size={32} />
                <div>
                  <span className="block text-3xl font-display text-brand-text">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-brand-muted">Seguridad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Corporate Presentation */}
      <section className="py-24 bg-brand-bg-2 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <span className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Quiénes Somos</span>
              <h2 className="text-4xl md:text-5xl font-display mb-8 text-brand-text">PRESENTACIÓN CORPORATIVA</h2>
              <TrendingUp className="text-brand-accent/20" size={120} />
            </div>
            
            <div className="lg:col-span-2 space-y-8 text-brand-muted leading-relaxed text-lg">
              <p>
                Nos constituimos como una solución segura dinámica y eficiente a partir del <span className="text-brand-text font-medium">20 de octubre de 1992</span>, iniciando operaciones desde enero de 1993 movilizando mercancías de nuestro primer cliente nacional <span className="text-brand-accent">DEXTON S.A.</span>
              </p>
              <p>
                En abril de 1997 se fortaleció el crecimiento de la compañía con la entrada de nuevos socios capitalistas lo que impulso las inversiones realizadas en nuevos equipos, capacitación del personal y sistemas de control.
              </p>
              <p>
                <span className="text-brand-text font-medium">TRACTOCAR LOGISTICS</span> posee reconocimiento a nivel nacional por parte de las compañías de seguros debido a su capacidad logística y las medidas de seguridad que rigen sus operaciones, lo que nos ha permitido ampliar permanentemente el parque automotor y por tanto cubrir las necesidades de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-brand-surface border border-brand-border group hover:border-brand-accent transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-brand-text">
                <Target size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center rounded-sm mb-8">
                  <Target className="text-brand-accent" size={24} />
                </div>
                <h3 className="text-4xl font-display mb-6 tracking-wider text-brand-text">MISIÓN</h3>
                <p className="text-brand-muted leading-relaxed mb-6">
                  En <span className="text-brand-text">TRACTOCAR LOGISTICS S.A.S.</span> brindamos soluciones especializadas y económicas en el transporte de carga terrestre a nivel nacional y local, almacenamiento y distribución urbana, con énfasis en el cumplimiento de pedidos, seguridad, protección a la carga y agilidad en las entregas.
                </p>
                <p className="text-brand-muted leading-relaxed">
                  Nuestro desarrollo es de vital importancia para nuestros empleados, comunidades vecinas y la sociedad colombiana.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-brand-surface border border-brand-border group hover:border-brand-accent transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-brand-text">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-accent/10 flex items-center justify-center rounded-sm mb-8">
                  <Eye className="text-brand-accent" size={24} />
                </div>
                <h3 className="text-4xl font-display mb-6 tracking-wider text-brand-text">VISIÓN</h3>
                <p className="text-brand-muted leading-relaxed text-xl italic">
                  "Ser la alternativa preferida en el transporte de carga en las principales ciudades del país."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Políticas Section */}
      <PoliticasSection />
    </div>
  );
};

export default Company;
