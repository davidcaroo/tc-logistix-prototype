import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Truck, Globe, BarChart3 } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "../lib/animations";
import { cn } from "../lib/utils";

const Home: React.FC = () => {
  return (
    <div className="relative bg-brand-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-accent/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.span 
              variants={fadeUpVariants}
              className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-6"
            >
              Líderes en Logística — Est. 1994
            </motion.span>
            
            <motion.h1 
              variants={fadeUpVariants}
              className="text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-display leading-[0.85] mb-8 text-brand-text"
            >
              INFRAESTRUCTURA <br />
              <span className="text-gradient-animated">EN MOVIMIENTO</span>
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="text-brand-muted text-lg max-w-lg mb-12 leading-relaxed"
            >
              Soluciones integrales de transporte y logística que impulsan el comercio exterior y la industria nacional con precisión y potencia.
            </motion.p>

            <motion.div 
              variants={fadeUpVariants}
              className="flex flex-wrap gap-6"
            >
              <button className="bg-brand-accent text-brand-bg px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-text hover:text-brand-bg transition-all duration-500 flex items-center gap-3 shadow-glow group">
                Nuestros Servicios
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border border-brand-border px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-bg-2 transition-all duration-500 text-brand-text">
                Conócenos
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block justify-self-end w-full max-w-[500px]"
          >
            <div className="relative aspect-square">
              <img
                src="https://picsum.photos/seed/logistics/800/800"
                alt="Logistics"
                className="w-full h-full object-cover grayscale brightness-50 border border-brand-border"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-brand-bg-2 border border-brand-border p-8 shadow-glow">
                <div className="flex flex-col">
                  <span className="text-brand-accent font-display text-5xl">+4500</span>
                  <span className="text-brand-muted text-[10px] uppercase tracking-widest">Afiliadas en Red</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-bg-2 border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Años de Experiencia", value: "30+" },
            { label: "Viajes Mensuales", value: "12k" },
            { label: "Sedes Nacionales", value: "8" },
            { label: "Clientes Activos", value: "500+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-brand-accent font-display text-5xl md:text-6xl mb-2">{stat.value}</span>
              <span className="text-brand-muted text-[10px] uppercase tracking-[0.2em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Excelencia Operativa</span>
              <h2 className="text-5xl md:text-7xl font-display leading-none text-brand-text">SOLUCIONES A TU <br />MEDIDA</h2>
            </div>
            <p className="text-brand-muted max-w-sm text-sm">
              Desde el transporte de carga masiva hasta el almacenamiento especializado, cubrimos cada eslabón de tu cadena de suministro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border border border-brand-border">
            {[
              { icon: Truck, title: "Carga Masiva", desc: "Transporte terrestre nacional con flota propia y fidelizada." },
              { icon: Globe, title: "Comercio Exterior", desc: "Gestión logística para importaciones y exportaciones." },
              { icon: Shield, title: "Almacenamiento", desc: "Bodegas seguras con control de inventarios WMS." },
              { icon: BarChart3, title: "Distribución", desc: "Entregas de última milla y distribución urbana." },
            ].map((service, i) => (
              <div key={i} className="bg-brand-bg p-12 hover:bg-brand-bg-2 transition-colors group cursor-pointer">
                <service.icon className="text-brand-accent mb-8 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-display mb-4 tracking-wider text-brand-text">{service.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="w-0 group-hover:w-full h-[1px] bg-brand-accent transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-brand-bg-2 border-t border-brand-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-brand-accent font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Liderazgo y Visión</span>
            <h2 className="text-5xl md:text-7xl font-display leading-none text-brand-text">NUESTRO EQUIPO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              { name: "Amaury Covo", role: "Presidente", img: "https://picsum.photos/seed/amaury/400/500" },
              { name: "Angelica De La Peña", role: "Vicepresidenta Comercial", img: "https://picsum.photos/seed/angelica/400/500" },
              { name: "Carlos Jose Covo", role: "Gerente de Negocios", img: "https://picsum.photos/seed/carlos/400/500" },
              { name: "Sergio Casij", role: "Gerente de Operaciones", img: "https://picsum.photos/seed/sergio/400/500" },
              { name: "Carmen Mendoza", role: "Gerente T. Humano", img: "https://picsum.photos/seed/carmen/400/500" },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 border border-brand-border grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="font-display text-2xl mb-1 tracking-wider text-brand-text">{member.name}</h3>
                <p className="text-brand-accent font-mono text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
                <div className="w-12 h-px bg-brand-border group-hover:w-full group-hover:bg-brand-accent transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 bg-brand-bg border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display mb-6 text-brand-text">CERTIFICACIONES QUE NOS RESPALDAN</h2>
            <p className="text-brand-muted max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Contamos con certificaciones que avalan la calidad y seguridad de nuestras operaciones, garantizando confianza y excelencia en cada servicio logístico.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Responsabilidad Integral", logo: "https://logodownload.org/wp-content/uploads/2020/11/responsabilidad-integral-logo.png" },
              { name: "BASC", logo: "https://www.wbasco.org/images/logo-basc.png" },
              { name: "ISO 9001", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/ISO_9001_Logo.svg/1200px-ISO_9001_Logo.svg.png" },
              { name: "Colfecar", logo: "https://colfecar.org.co/wp-content/uploads/2021/03/Logo-Colfecar-2021.png" },
              { name: "ANDI", logo: "https://www.andi.com.co/Home/Images/logo-andi.png" },
              { name: "RUC", logo: "https://ccs.org.co/wp-content/uploads/2021/06/Logo-RUC.png" },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center group"
              >
                <div className="h-24 w-full flex items-center justify-center p-4 bg-white/5 border border-brand-border hover:border-brand-accent/50 transition-all duration-300 grayscale group-hover:grayscale-0">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Fallback if logo fails to load
                      (e.target as HTMLImageElement).src = `https://via.placeholder.com/150x80/141414/FF6B00?text=${cert.name}`;
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="mt-4 text-[10px] text-brand-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {cert.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
