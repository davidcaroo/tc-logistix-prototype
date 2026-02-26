import React from "react";
import { motion } from "motion/react";
import { fadeUpVariants } from "../lib/animations";
import { ContactoDirectorio } from "../components/sections/ContactoDirectorio";

const Contact: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="text-brand-orange font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Contacto</span>
          <h1 className="text-6xl md:text-8xl font-display mb-12">ESTAMOS EN <br />CONTACTO</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="text-brand-grey text-lg mb-12">
                ¿Tienes alguna duda o requerimiento especial? Nuestro equipo de expertos está listo para asesorarte.
              </p>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-display text-xl mb-2">SEDE PRINCIPAL</h4>
                  <p className="text-brand-grey">Cartagena, Zona Industrial Mamonal Km 5</p>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">TELÉFONO</h4>
                  <p className="text-brand-grey">+57 (605) 668 5000</p>
                </div>
                <div>
                  <h4 className="font-display text-xl mb-2">EMAIL</h4>
                  <p className="text-brand-grey">contacto@tractocar.com</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-dark-alt border border-brand-dark-border aspect-square overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.003891533398!2d-75.53946162520062!3d10.408181089719067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f6506eede83%3A0xfd76e638c89c1862!2sCl.%2025%20%23%2024A%20%E2%80%93%2016%2C%20Manga%2C%20Cartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e1!3m2!1ses-419!2sco!4v1771984336736!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Directorio Section */}
      <ContactoDirectorio />
    </div>
  );
};

export default Contact;
