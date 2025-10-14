import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import Landing from "./components/landing/Landing";
import Collections from "./components/Collections";
import HowToUse from "./components/howToUse/HowToUse";

function App() {
  return (
    <>
      {/* fondo animado como elemento hermano */}
      <div className="app-background" aria-hidden="true" />

      {/* contenido principal */}
      <div className="app-overlay">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/how-to-use" element={<HowToUse />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
