import { FooterContainer } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <p>{currentYear} &copy; Silvia Abe - Todos os direitos reservados</p>
      <div className="socials">
        <a href="https://linkedin.com/in/silviaabe" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/silviaabe" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </FooterContainer>
  )
}
export default Footer