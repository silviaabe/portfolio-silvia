import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
