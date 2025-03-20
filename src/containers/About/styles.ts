import styled from "styled-components";

export const AboutSection = styled.section`
  height: 100%;
  text-align: center;
  justify-content: center;
  padding: 100px 20% 150px;
  position: relative;
  transition: opacity 0.5s ease-in-out;
`

export const ProfileImg = styled.img`
  height: 200px;
  border-radius: 100%;
  border: 2px solid #ffd700;
`

export const AboutTitle = styled.h2`
  color: #ffd700;
  font-size: 35px;
  margin-bottom: 35px;
`

export const AboutDescription = styled.p`
  color: var(--black);
  font-size: 18px;
  margin-bottom: 40px;
  text-align: center;
`

export const AboutButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffd700;
  color: #503A8F;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border: 1px solid #503A8F;
  border-radius: 26px;

  &:hover {
    cursor: pointer;
    background-color: #503A8F;
    color: #fff;
    border: 1px solid #ffd700;
    transition: ease 0.5s;
  }

  @media (max-width: 767px) {
    height: auto;
    padding: 60px 10%;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`

export const Technologies = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 50px;
`

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 20px;
  animation: scroll 60s linear infinite;
  width: max-content;
  padding-top: 5px;

  i {
    font-size: 40px;
    color: var(--dark-gray);
    transition: transform 450ms;
  }

  i:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
`