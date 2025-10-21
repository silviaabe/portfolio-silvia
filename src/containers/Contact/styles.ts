import styled from "styled-components";

export const ContactSection = styled.section`
  position: relative;
  transition: opacity 0.5s ease-in-out;
  padding: 80px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px){
    padding: 60px 5%;
  }
`

export const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.2rem;
  margin-bottom: 40px;
  text-align: center;
`

export const ContactLinks = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0;
  margin: 0;
`

export const ContactLink = styled.li`
  width: 100%;
`

export const ContactIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  i {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.8rem;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }

  span {
    word-break: break-word;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textLight};
    transform: translateX(5px);

    i {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;

    i {
      font-size: 1.4rem;
      width: 38px;
      height: 38px;
    }
  }
`