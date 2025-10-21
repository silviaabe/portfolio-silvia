import { styled } from "styled-components";

export const HeroSection = styled.section<{bg: string; bg2: string}>`
  height: 100vh;
  position: relative;
  overflow: hidden;

  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    inset: 0;
    background-image: url(${(props) => props.bg2});
    background-size: 30%;
    background-position: left 80%;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.5;
  }
  
  
  @media (max-width: 768px) {
    background-size: 60%;
    background-position: right top;

    &::before {
      background-size: 25%;
      background-position: 22% 72%;
    }
  }
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 72px;
  font-family: "Sigmar", sans-serif;
  letter-spacing: 4px;
  padding: 120px 0 110px;
  margin-left: 200px;
  margin-bottom: 32px;

  span {
    font-size: 3.6rem;
    font-family: "Sigmar", sans-serif;
    color: ${({ theme }) => theme.colors.textLight};
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.6;
    margin-top: 70px;

    span {
      font-size: 2.6rem;
    }
  }
`

export const HeroSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  margin-left: 200px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export const HeroSubtitle2 = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 1.5px;
  margin-left: 200px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`