import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 5%;
    flex-direction: column;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ProfileImg = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  object-fit: cover;
  flex-shrink: 0;
`

export const AboutContent = styled.div`
  max-width: 600px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
`

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`

export const AboutButton = styled.a`
  display: inline-block;
  padding: 12px 28px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`

export const Technologies = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 30px 0 50px;
`

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: 20px;
  animation: scroll 60s linear infinite;
  width: max-content;

  i {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.darkGray};
    transition: transform 450ms;
  }

  i:hover {
    transform: scale(1.1);
  }

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`