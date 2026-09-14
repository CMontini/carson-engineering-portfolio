import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Charger4 from "./pages/Charger4";
import Charger5 from "./pages/Charger5";
import Ace from "./pages/Ace";
import PersonalProjects from "./pages/PersonalProjects";
import Mission from "./pages/Mission";
import RSX from "./pages/RSX";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/charger-4" element={<Charger4 />} />
        <Route path="/projects/charger-5" element={<Charger5 />} />
        <Route path="/projects/ace" element={<Ace />} />
        <Route path="/personal-projects" element={<PersonalProjects />} />
        <Route path="/personal-projects/mission" element={<Mission />} />
        <Route path="/personal-projects/rsx" element={<RSX />} />
      </Routes>
    </>
  );
}
