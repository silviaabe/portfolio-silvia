import styled from "styled-components";

export const FooterContainer  = styled.footer`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 16px 0;
  margin-top: 32px;
  font-size: 0.9rem;

  .socials {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    gap: 16px;

    a {
      color: ${({ theme }) => theme.colors.darkGray};
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    svg {
      font-size: 1.5rem;
    }
  }
`