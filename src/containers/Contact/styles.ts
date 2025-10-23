import styled from "styled-components";

export const ContactSection = styled.section`
  position: relative;
  transition: opacity 0.5s ease-in-out;
  padding: clamp(60px, 8vw, 100px) clamp(5%, 8vw, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}){
    padding: 40px 5%;
  }
`

export const ContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: clamp(1.5rem, 2vw, 2rem);
  text-align: center;
  line-height: 3rem;
`

export const ContactLinks = styled.ul`
  list-style: none;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 8px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;

    i {
      font-size: 1.4rem;
      width: 38px;
      height: 38px;
    }
  }
`