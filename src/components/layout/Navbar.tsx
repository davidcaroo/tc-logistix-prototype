import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Empresa", path: "/company" },
  { name: "Servicios", path: "/services" },
  { name: "Vacantes", path: "/vacancies" },
  { name: "Contacto", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 lg:left-12 z-40 transition-all duration-500",
        isScrolled 
          ? "bg-brand-dark/80 backdrop-blur-md border-bottom border-brand-dark-border py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
            <span className="text-brand-dark font-display text-2xl font-bold">TC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl tracking-tighter leading-none">LOGISTIX</span>
            <span className="text-[8px] text-brand-grey tracking-[0.3em] uppercase leading-none">Tractocar</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-orange relative group",
                location.pathname === link.path ? "text-brand-orange" : "text-brand-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-brand-orange transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          
          <Link
            to="/quote"
            className="bg-brand-orange text-brand-dark px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors glow-orange"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark z-50 flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-display text-2xl">MENU</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-display uppercase tracking-wider hover:text-brand-orange transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-orange" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                to="/quote"
                className="w-full bg-brand-orange text-brand-dark py-4 flex items-center justify-center font-display text-xl uppercase tracking-widest"
              >
                Solicitar Cotización
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
