import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-row">
      {/* Optional: Sidebar or Rail text as per Recipe 11/12 */}
      <div className="hidden lg:flex fixed left-0 top-0 h-full w-12 items-center justify-center border-r border-brand-dark-border bg-brand-dark z-50">
        <span className="rail-text text-brand-grey text-[10px] whitespace-nowrap">
          TC LOGISTIX — INFRAESTRUCTURA EN MOVIMIENTO — EST. 1994
        </span>
      </div>
      
      <div className="flex-1 flex flex-col lg:pl-12">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>

      <style>{`
        .rail-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default Layout;
