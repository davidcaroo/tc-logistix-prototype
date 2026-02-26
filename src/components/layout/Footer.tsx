import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark-alt border-t border-brand-dark-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange flex items-center justify-center rounded-sm">
              <span className="text-brand-dark font-display text-xl font-bold">TC</span>
            </div>
            <span className="font-display text-xl tracking-tighter">LOGISTIX</span>
          </div>
          <p className="text-brand-grey text-sm leading-relaxed max-w-xs">
            Líderes en soluciones logísticas integrales con más de 30 años de experiencia en el mercado colombiano.
          </p>
          <div className="flex gap-4">
            {[Instagram, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-brand-dark-border flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-brand-dark transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-display text-lg mb-6 tracking-widest">Navegación</h4>
          <ul className="flex flex-col gap-4">
            {["Inicio", "Empresa", "Servicios", "Vacantes", "Contacto"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Inicio" ? "/" : `/${item.toLowerCase()}`}
                  className="text-brand-grey text-sm hover:text-brand-orange transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="font-display text-lg mb-6 tracking-widest">Servicios</h4>
          <ul className="flex flex-col gap-4">
            {["Carga Masiva", "Comercio Exterior", "Almacenamiento", "Distribución"].map((item) => (
              <li key={item}>
                <a href="#" className="text-brand-grey text-sm hover:text-brand-orange transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-display text-lg mb-6 tracking-widest">Contacto</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-3">
              <MapPin className="text-brand-orange shrink-0" size={18} />
              <span className="text-brand-grey text-sm">Cartagena, Colombia<br />Zona Industrial Mamonal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-brand-orange shrink-0" size={18} />
              <span className="text-brand-grey text-sm">+57 (605) 668 5000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-brand-orange shrink-0" size={18} />
              <span className="text-brand-grey text-sm">contacto@tractocar.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-brand-dark-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-brand-grey text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} TC LOGISTIX. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="text-brand-grey text-[10px] uppercase tracking-widest hover:text-brand-orange transition-colors">Política de Privacidad</Link>
          <Link to="/terms-and-conditions" className="text-brand-grey text-[10px] uppercase tracking-widest hover:text-brand-orange transition-colors">Términos y Condiciones</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
