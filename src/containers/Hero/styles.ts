import { styled } from "styled-components";

export const HeroSection = styled.section<{bg: string; bg2: string}>`
  height: 100vh;
  position: relative;
  overflow: hidden;
  /* display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: clamp(40px, 5vw, 100px); */

  background-image: url(${(props) => props.bg});
  background-size: clamp(60%, 20vw, 100%);
  background-position: right top;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    inset: 0;
    background-image: url(${(props) => props.bg2});
    background-size: clamp(15%, 8vw, 35%);
    background-position: clamp(10%, 8vw, 17%) clamp(45%, 40vw, 60%);
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.5;
  }
  
`

export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  line-height: clamp(2.5rem, 6vw, 4.5rem);
  font-family: "Sigmar", sans-serif;
  letter-spacing: clamp(2px, 1vw, 4px);
  padding: 100px 0 100px;
  margin-left: clamp(50px, 20vw, 200px);

  span {
    font-size: clamp(2.5rem, 6vw, 3.6rem);
    font-family: "Sigmar", sans-serif;
    color: ${({ theme }) => theme.colors.textLight};
  }
`

export const HeroSubtitle = styled.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  letter-spacing: clamp(1px, 1vw, 1.5px);
  margin-bottom: clamp(4px, 1vw, 8px);
  margin-left: clamp(50px, 20vw, 200px);
`

export const HeroSubtitle2 = styled.h3`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: clamp(1px, 1vw, 1.5px);
  margin-left: clamp(50px, 20vw, 200px);
`