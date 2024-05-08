import { useEffect } from "react";
import exportComponents from "./components/exportComponents";
const { Navbar, Hero, Projects, Skills, Contact } = exportComponents;
import {Routes, Route} from "react-router-dom"
import { Toaster, toast } from 'sonner'

export default function App() {
  useEffect(() => {
    toast.info('Under Construction!',{
      description: "This Website is still under construction. Please check back later for updates.",
    })
  },[])
  return (
    <div>
      <Toaster 
      // closeButton
      position="top-right"
      />
      <Navbar />
      <Routes >
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Skills />}/>
      </Routes>
    </div>
  );
}
