import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Company = React.lazy(() => import("./pages/Company"));
const Services = React.lazy(() => import("./pages/Services"));
const Vacancies = React.lazy(() => import("./pages/Vacancies"));
const Quote = React.lazy(() => import("./pages/Quote"));
const Contact = React.lazy(() => import("./pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./pages/TermsAndConditions"));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="grain-overlay" />
        <React.Suspense fallback={<div className="h-screen w-full bg-brand-dark flex items-center justify-center text-brand-orange font-display text-4xl animate-pulse">TC LOGISTIX</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="company" element={<Company />} />
              <Route path="services" element={<Services />} />
              <Route path="vacancies" element={<Vacancies />} />
              <Route path="quote" element={<Quote />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            </Route>
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
