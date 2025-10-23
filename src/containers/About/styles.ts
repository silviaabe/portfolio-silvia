import styled from "styled-components";

export const AboutSection = styled.section`
  min-height: 100vh;
  padding: clamp(60px, 8vw, 100px) clamp(5%, 8vw, 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 40px 5%;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: clamp(30px, 5vw, 60px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImg = styled.img`
  width: clamp(120px, 18vw, 220px);
  height: clamp(120px, 18vw, 220px);
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  object-fit: cover;
  flex-shrink: 0;
`;

export const AboutContent = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: clamp(1.5rem, 2vw, 2rem);
`;

export const AboutDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: clamp(1rem, 1.2vw, 1.1rem);
  line-height: 1.6;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
`;

export const AboutButton = styled.a`
  display: inline-block;
  padding: clamp(10px, 1vw, 12px) clamp(20px, 2vw, 28px);
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 26px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: clamp(0.9rem, 1vw, 1rem);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const Technologies = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: clamp(20px, 4vw, 30px) 0 clamp(30px, 5vw, 50px);
`;

export const TechnologiesWrapper = styled.div`
  display: flex;
  gap: clamp(12px, 2vw, 20px);
  animation: scroll 60s linear infinite;
  width: max-content;

  i {
    font-size: clamp(28px, 3vw, 40px);
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
`;
