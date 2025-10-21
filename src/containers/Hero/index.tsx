import HeroImage from "../../assets/images/bg-word.webp"
import HeroImage2 from "../../assets/images/brush-yellow.webp"
import * as S from "./styles";

const Hero = () => {
  return (
    <S.HeroSection bg={HeroImage} bg2={HeroImage2}>
      <div className="hero-content">
        <S.HeroTitle>
          Olá, <br/> meu <br/> nome <br/> é <span>S</span>ilvia!
        </S.HeroTitle>
        <S.HeroSubtitle>Sou Desenvolvedora Front-End</S.HeroSubtitle>
        <S.HeroSubtitle2>e esse é o meu portfólio...</S.HeroSubtitle2>
      </div>
    </S.HeroSection>
  );
};

export default Hero;
