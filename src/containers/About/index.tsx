import ProfilePhoto from "../../assets/images/profile.jpg"
import { AboutAll, AboutButton, AboutDescription, AboutTitle, ProfileImg, Technologies, TechnologiesWrapper } from "./styles"

const About = () => {
  return (
    <AboutAll id="about">
      <ProfileImg src={ProfilePhoto} alt="Profile" />
      <div>
        <AboutTitle>Sobre mim</AboutTitle>
        <AboutDescription>Sou Desenvolvedora Front-End especializada em criar interfaces visuais fluidas, interativas e responsivas, utilizando as principais e mais modernas tecnologias web.</AboutDescription>
        <Technologies>
          <TechnologiesWrapper>
            <i className="fa-brands fa-html5 icon" title="HTML5"></i>
            <i className="fa-brands fa-css3-alt icon" title="CSS"></i>
            <i className="fa-brands fa-js icon" title="JavaScript"></i>
            <i className="fa-brands fa-github icon" title="GitHub"></i>
            <i className="fa-brands fa-git-alt icon" title="Git"></i>
            <i className="devicon-bootstrap-plain icon" title="Bootstrap"></i>
            <i className="devicon-jquery-plain icon" title="jQuery"></i>
            <i className="devicon-sass-original icon" title="SASS"></i>
            <i className="devicon-less-plain-wordmark icon" title="LESS"></i>
            <i className="devicon-gulp-plain icon" title="Gulp"></i>
            <i className="devicon-grunt-plain icon" title="Grunt"></i>
            <i className="devicon-typescript-plain icon" title="TypeScript"></i>
            <i className="devicon-vuejs-plain icon" title="VueJS"></i>
            <i className="devicon-react-original icon" title="ReactJS"></i>
            <i className="devicon-canva-original icon" title="Canva"></i>
            <i className="devicon-eslint-plain icon" title="ESLint"></i>
            <i className="devicon-figma-plain icon" title="Figma"></i>
            <i className="devicon-json-plain icon" title="JSON"></i>
            <i className="devicon-nextjs-original-wordmark icon" title="NextJS"></i>
            <i className="devicon-nodejs-plain icon" title="NodeJS"></i>
            <i className="devicon-powershell-plain icon" title="PowerShell"></i>
            <i className="devicon-vscode-plain icon" title="VSCode"></i>
            <i className="devicon-vitejs-plain icon" title="ViteJS"></i>
            <i className="devicon-vercel-original icon" title="Vercel"></i>
            <i className="devicon-postman-plain icon" title="Postman"></i>
            <i className="devicon-mongodb-plain icon" title="MongoDB"></i>
            <i className="devicon-babel-plain icon" title="Babel"></i>
            <i className="devicon-redux-original icon" title="Redux"></i>
          </TechnologiesWrapper>
        </Technologies>
        <AboutButton href="https://github.com/silviaabe/my_portfolio/blob/main/assets/images/CV%20Silvia%20Abe.pdf" target="_blank">Baixar CV</AboutButton>
      </div>
    </AboutAll>
  )
}

export default About