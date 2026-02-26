import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-40 pb-32 px-6 max-w-4xl mx-auto">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-brand-orange font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Legal</span>
        <h1 className="text-6xl md:text-8xl font-display mb-12">POLÍTICA DE <br />PRIVACIDAD</h1>
        
        <div className="space-y-8 text-brand-grey leading-relaxed">
          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">1. INTRODUCCIÓN</h2>
            <p>
              En TC Logistix (Tractocar Logistics S.A.S.), valoramos su privacidad y nos comprometemos a proteger sus datos personales. Esta política describe cómo recopilamos, usamos y protegemos la información que usted nos proporciona a través de nuestro sitio web y servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">2. RECOPILACIÓN DE DATOS</h2>
            <p>
              Recopilamos información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo electrónico, número de teléfono y detalles de la empresa, especialmente cuando solicita una cotización o se postula a una vacante.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">3. USO DE LA INFORMACIÓN</h2>
            <p>
              La información recopilada se utiliza para:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Procesar sus solicitudes de servicios y cotizaciones.</li>
              <li>Gestionar procesos de selección de personal.</li>
              <li>Mejorar nuestros servicios y la experiencia del usuario en el sitio web.</li>
              <li>Cumplir con las obligaciones legales y regulatorias en Colombia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">4. PROTECCIÓN DE DATOS</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración. Sus datos son tratados bajo estrictos estándares de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-brand-white mb-4 tracking-wider">5. SUS DERECHOS</h2>
            <p>
              De acuerdo con la Ley 1581 de 2012 de Colombia, usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento a través de nuestros canales de contacto oficiales.
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

export default PrivacyPolicy;
