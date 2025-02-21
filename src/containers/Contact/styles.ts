import styled from "styled-components";

export const ContactSection = styled.section`
  height: 70vh;
  position: relative;
  transition: opacity 0.5s ease-in-out;
  padding: 0 10%;
  justify-content: center;

  @media (max-width: 480px){
    height: auto;
  }
`

export const ContactTitle = styled.h2`
  color: var(--dark-gray);
  font-size: 35px;
  margin-bottom: 25px;
  text-align: center;
`

export const ContactLinks = styled.div`
  color: var(--dark-gray);
  text-align: left;
  grid-gap: 20px;
  padding: 70px 20px 20px;
`

export const ContactLink = styled.div`
  margin-bottom: 20px;
`

export const ContactIcon = styled.a`
  align-items: center;
  text-decoration: none;
  display: inline-flex;

  .social-link {
    display: flex;
  }

  i {
    background-color: var(--light-gray);
    color: var(--black);
    margin-right: 10px;
    font-size: 30px;
  }

  h3 {
        color: var(--dark-gray);
        font-size: 20px;
      }
`