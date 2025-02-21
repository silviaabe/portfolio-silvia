import styled from "styled-components";

export const AboutAll = styled.div`
  height: 110vh;
  text-align: center;
  justify-content: center;
  padding: 100px 20%;
  position: relative;
  transition: opacity 0.5s ease-in-out;
`

export const ProfileImg = styled.img`
  height: 200px;
  border-radius: 100%;
  border: 2px solid var(--dark-gray);
`

export const AboutTitle = styled.h2`
  color: var(--dark-gray);
  font-size: 35px;
  margin-bottom: 25px;
`

export const AboutDescription = styled.p`
  color: var(--black);
  font-size: 18px;
  font-family: "Nunito Sans", serif;
  margin-bottom: 30px;
  text-align: center;
`

export const AboutButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--black);
  color: var(--white);
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 26px;

  a:hover {
    cursor: pointer;
    background-color: var(--light-gray);
    color: var(--black);
    border: 1px solid var(--black);
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
  justify-content: flex-start;
  /* align-items: center; */
  flex-wrap: nowrap;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  gap: 10px;
  padding-bottom: 50px;

  ::-webkit-scrollbar {
  display: none;
}
`

export const TechnologiesWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  transition: transform 9s linear;

  i {
    font-size: 40px;
    margin-right: 5px;
    color: var(--dark-gray);
    /* display: flex;
    align-items: center;
    justify-content: center; */
    object-fit: contain;
    max-height: 120px;
    transition: transform 450ms;
    animation: moveIcons 60s linear infinite; 
  }

  i:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`

