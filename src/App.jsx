import exportComponents from "./components/exportComponents";
const { Navbar, Hero, TechStack, About, Projects, Contact, Footer } = exportComponents;

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
