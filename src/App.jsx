import exportComponents from "./components/exportComponents";
const { Navbar, Hero, Projects, Skills, Contact } = exportComponents;
import {Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </div>
  );
}
