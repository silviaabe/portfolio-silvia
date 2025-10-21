import ProfilePhoto from "../../assets/images/profile.webp"
import { 
  AboutButton, 
  AboutContainer, 
  AboutContent, 
  AboutDescription, 
  AboutSection, 
  AboutTitle, 
  ProfileImg,
  Technologies, 
  TechnologiesWrapper 
} from "./styles"

const About = () => {
  const icons = [
    { className: "devicon-html5-plain", title: "HTML5" },
    { className: "devicon-css3-plain", title: "CSS3" },
    { className: "devicon-javascript-plain", title: "JavaScript" },
    { className: "devicon-github-original", title: "GitHub" },
    { className: "devicon-git-plain", title: "Git" },
    { className: "devicon-bootstrap-plain", title: "Bootstrap" },
    { className: "devicon-jquery-plain", title: "jQuery" },
    { className: "devicon-sass-original", title: "SASS" },
    { className: "devicon-less-plain-wordmark", title: "LESS" },
    { className: "devicon-gulp-plain", title: "Gulp" },
    { className: "devicon-grunt-plain", title: "Grunt" },
    { className: "devicon-typescript-plain", title: "TypeScript" },
    { className: "devicon-vuejs-plain", title: "VueJS" },
    { className: "devicon-react-original", title: "ReactJS" },
    { className: "devicon-canva-original", title: "Canva" },
    { className: "devicon-eslint-plain", title: "ESLint" },
    { className: "devicon-figma-plain", title: "Figma" },
    { className: "devicon-json-plain", title: "JSON" },
    { className: "devicon-nextjs-original-wordmark", title: "Next.js" },
    { className: "devicon-nodejs-plain", title: "Node.js" },
    { className: "devicon-powershell-plain", title: "PowerShell" },
    { className: "devicon-vscode-plain", title: "VSCode" },
    { className: "devicon-vitejs-plain", title: "ViteJS" },
    { className: "devicon-vercel-original", title: "Vercel" },
    { className: "devicon-postman-plain", title: "Postman" },
    { className: "devicon-mongodb-plain", title: "MongoDB" },
    { className: "devicon-babel-plain", title: "Babel" },
    { className: "devicon-redux-original", title: "Redux" }
  ]

  return (
    <AboutSection id="about" aria-labelledby="about-heading">
      <AboutContainer>
        <ProfileImg src={ProfilePhoto} alt="Foto de perfil de Silvia Abe" />
        <AboutContent>
          <AboutTitle id="about-heading">Sobre mim</AboutTitle>
          <AboutDescription>
            Sou Desenvolvedora Front-End apaixonada por transformar ideias em interfaces acessíveis e intuitivas. Tenho experiência com React, TypeScript e metodologias ágeis, e adoro aprender novas tecnologias.
          </AboutDescription>

          <Technologies aria-label="Principais tecnologias">
            <TechnologiesWrapper>
              {[...icons, ...icons].map((icon, index) => (
                <i 
                  key={index} 
                  className={`${icon.className} icon`} 
                  title={icon.title}
                  aria-hidden="true"
                />
              ))}
            </TechnologiesWrapper>
          </Technologies>

          <AboutButton 
            href="https://github.com/silviaabe/portfolio-silvia/blob/main/src/assets/images/CV%20Silvia%20Abe.pdf" 
            rel="noopener noreferrer" 
            target="_blank"
            aria-label="Baixar currículo de Silvia Abe (abre em nova aba)"
          >
            Baixar CV
          </AboutButton>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default About