import { ThemeProvider } from "styled-components";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";
import Projects from "./containers/Projects";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header role="banner"><Hero /></header>
        <main id="main-content">
          <About />
          <Projects />
          <Contact />
        </main>
        <footer role="contentinfo">
          <Footer />
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
