import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-brand-orange font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Legal</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12">TÉRMINOS Y <br />CONDICIONES</h1>
        
        <div className="space-y-8 text-brand-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">1. ACEPTACIÓN DE TÉRMINOS</h2>
            <p>
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">2. PROPIEDAD INTELECTUAL</h2>
            <p>
              Todo el contenido de este sitio, incluyendo textos, gráficos, logotipos, iconos e imágenes, es propiedad de TC Logistix o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual colombianas e internacionales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">3. USO DEL SITIO</h2>
            <p>
              El uso de este sitio web es para fines informativos y de gestión de servicios logísticos. Queda prohibido el uso del sitio para actividades ilícitas o que puedan dañar la infraestructura tecnológica de TC Logistix.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">4. LIMITACIÓN DE RESPONSABILIDAD</h2>
            <p>
              TC Logistix se esfuerza por mantener la información actualizada y precisa, pero no garantiza la ausencia de errores o interrupciones en el servicio del sitio web. No nos hacemos responsables de daños directos o indirectos derivados del uso del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">5. SERVICIOS LOGÍSTICOS</h2>
            <p>
              La prestación de servicios de transporte, almacenamiento y comercio exterior se rige por contratos específicos y la normativa vigente del Ministerio de Transporte de Colombia y la DIAN, los cuales prevalecen sobre la información general de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">6. LEY APLICABLE</h2>
            <p>
              Estos términos se rigen e interpretan de acuerdo con las leyes de la República de Colombia. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción de los tribunales competentes en la ciudad de Cartagena, Bolívar.
            </p>
          </section>

          <section className="pt-10 border-t border-brand-dark-border">
            <p className="text-xs uppercase tracking-widest">Última actualización: Febrero 2026</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
