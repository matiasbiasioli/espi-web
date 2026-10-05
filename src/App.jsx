import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import ScrollToTop from "./components/utils/ScrollToTop";
import Home from "./pages/Home";
import Institutional from "./pages/Institutional";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/institucional" element={<Institutional />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/recursos" element={<Resources />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/talleres" element={<Workshops />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <AnimatedRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;