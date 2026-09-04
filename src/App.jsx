import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Institutional from "./pages/Institutional";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Workshops from "./pages/Workshops";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institutional />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/recursos" element={<Resources />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/talleres" element={<Workshops />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;