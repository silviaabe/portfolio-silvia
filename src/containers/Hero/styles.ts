import { styled } from "styled-components";

export const HeroContainer = styled.div<{bg: string; bg2: string}>`
  height: 100vh;
  position: relative;
  overflow: hidden;

  background-image: url(${(props) => props.bg});
  background-size: 100vh;
  background-position: top right;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    width: 150%;
    height: 100%;
    margin: -0px;
    background-image: url(${(props) => props.bg2});
    background-size: 30%;
    background-position: left 80%;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.5;
  }`

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  line-height: 72px;
  padding: 120px 0 110px;
  letter-spacing: 4px;
  font-family: "Sigmar", sans-serif;
  margin-left: 200px;

  span {
    font-size: 60px;
    font-weight: 400;
    font-family: "Sigmar", sans-serif;
  }
`

export const HeroSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 300;
  padding-bottom: 10px;
  letter-spacing: 1.5px;
  margin-left: 200px;
`

export const HeroSubtitle2 = styled.h3`
  font-size: 16px;
  font-weight: 300;
  color: #ffd700;
  letter-spacing: 1.5px;
  margin-left: 200px;
`