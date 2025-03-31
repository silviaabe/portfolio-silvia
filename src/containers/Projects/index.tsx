import Automóveis from "../../assets/images/Projeto EBAC Motors.png"
import Calculadora from "../../assets/images/Projeto Calculadora.png"
import Chocolateria from "../../assets/images/Projeto Chocolateria.png"
import DisneyPlus from "../../assets/images/Projeto Disney Plus.png"
import EPlay from "../../assets/images/Projeto Eplay2.png"
import Lacrei from "../../assets/images/Projeto Lacrei Saúde.png"
import Neflix from "../../assets/images/Projeto Netflix2.png"
import Papelaria from "../../assets/images/Projeto Papelaria.png"
import PrimeVideo from "../../assets/images/Projeto Prime Video.png"
import Spotify from "../../assets/images/Projeto Spotify.png"
import { GridContainer, GridItem, ProjectsButton, ProjectsButtons, ProjectsDescription, ProjectsImg, ProjectsSection, ProjectsTitle, TechTags } from "./styles"

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsTitle>Projetos relevantes</ProjectsTitle>
      <GridContainer>
        <GridItem>
          <h3>Lacrei Saúde</h3>
          <a href="https://lacreisaude-one.vercel.app/" target="_blank">
            <ProjectsImg src={Lacrei} alt=""/>
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://lacreisaude-one.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/lacrei_saude" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
            <i className="devicon-nextjs-original-wordmark tag-icon" title="NextJS"></i>
            <i className="devicon-typescript-plain tag-icon" title="TypeScript"></i>
            <i className="devicon-jest-plain tag-icon" title="Jest"></i>
            <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Netflix</h3>
          <a href="https://netflix-clone-21s3nsmri-silvia-abes-projects.vercel.app/" target="_blank">
            <ProjectsImg src={Neflix} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://netflix-clone-21s3nsmri-silvia-abes-projects.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/netflix_clone" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="fa-brands fa-js tag-icon" title="JavaScript"></i>
              <i className="devicon-react-original tag-icon" title="ReactJS"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Spotify</h3>
          <a href="https://spotify-alura-brown.vercel.app/" target="_blank">
            <ProjectsImg src={Spotify} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://spotify-alura-brown.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/spotify_alura" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="fa-brands fa-js tag-icon" title="JavaScript"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Chocolateria</h3>
          <a href="https://chocolateria-bootstrap.vercel.app/" target="_blank">
            <ProjectsImg src={Chocolateria} alt=""/>
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://chocolateria-bootstrap.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/chocolateria_bootstrap" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="devicon-bootstrap-plain tag-icon" title="Bootstrap"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Papelaria</h3>
          <a href="https://site-papelaria-pi.vercel.app/" target="_blank">
            <ProjectsImg src={Papelaria} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://site-papelaria-pi.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/site_papelaria" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Eplay</h3>
          <a href="https://site-eplay-klfkvdwy5-silvia-abes-projects.vercel.app/" target="_blank">
            <ProjectsImg src={EPlay} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://site-eplay-klfkvdwy5-silvia-abes-projects.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/site_eplay" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="devicon-typescript-plain tag-icon" title="TypeScript"></i>
              <i className="devicon-react-original tag-icon" title="ReactJS"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>      
        <GridItem>
          <h3>Disney+</h3>
          <a href="https://clone-disneyplus-psi-sable.vercel.app/" target="_blank">
            <ProjectsImg src={DisneyPlus} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://clone-disneyplus-psi-sable.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/clone_disneyplus" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="devicon-sass-original tag-icon" title="SASS"></i>
              <i className="fa-brands fa-js tag-icon" title="JavaScript"></i>
              <i className="devicon-gulp-plain tag-icon" title="Gulp"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Automóveis</h3>
          <a href="https://jquery-automoveis.vercel.app/" target="_blank">
            <ProjectsImg src={Automóveis} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://jquery-automoveis.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/jquery_automoveis" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="fa-brands fa-js tag-icon" title="JavaScript"></i>
              <i className="devicon-jquery-plain tag-icon" title="jQuery"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Prime Video</h3>
          <a href="https://clone-primevideo--phi.vercel.app/" target="_blank">
            <ProjectsImg src={PrimeVideo} alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://clone-primevideo--phi.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/clone_primevideo" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="devicon-sass-original tag-icon" title="SASS"></i>
              <i className="devicon-gulp-plain tag-icon" title="Gulp"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
        <GridItem>
          <h3>Calculadora</h3>
          <a href="https://projeto-calculadora-gamma.vercel.app/" target="_blank">
            <ProjectsImg src={Calculadora}  alt="" />
          </a>
          <ProjectsDescription>
            <ProjectsButtons>
              <ProjectsButton href="https://projeto-calculadora-gamma.vercel.app/" target="_blank">Projeto</ProjectsButton>
              <ProjectsButton href="https://github.com/silviaabe/projeto_calculadora" target="_blank">Repositório</ProjectsButton>
            </ProjectsButtons>
            <TechTags>
              <i className="fa-brands fa-html5 tag-icon" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt tag-icon" title="CSS"></i>
              <i className="fa-brands fa-js tag-icon" title="JavaScript"></i>
              <i className="devicon-vercel-original tag-icon" title="Vercel"></i>
            </TechTags>
          </ProjectsDescription>
        </GridItem>
      </GridContainer>
    </ProjectsSection>
  )
}

export default Projects