import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import Contact from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import SparqalLogin from "./pages/Admin/Login";
import SparqalDashboard from "./pages/Admin/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"; // Import your global styles
import LeadsComponent from "./pages/Admin/Leads";
import PortfolioComponent from "./pages/Admin/Portfolio";
import { Toaster, toast } from "sonner";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster
        position="bottom-left"
        theme="custom"
        toastOptions={{
          unstyled: true,
          className:
            "w-[90vw] max-w-sm mx-auto rounded-xl px-4 py-3 text-sm sm:text-base shadow-md flex items-center gap-3",
        }}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SparqalLogin />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route element={<SparqalDashboard />}>
            <Route index element={<LeadsComponent />} />
            <Route path="leads" element={<LeadsComponent />} />
            <Route path="portfolio" element={<PortfolioComponent />} />
          </Route>
        </Route>

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
