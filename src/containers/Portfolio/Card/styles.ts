import styled from "styled-components";
import { LinkRowContainer, FlexRowContainer } from "components/GlobalStyles";

export const CardContainer = styled(FlexRowContainer)`
  padding: 3rem 0;
  justify-content: space-between;
  width: 100%;

  .info-container {
    width: 40%;
  }

  .title {
    text-align: left;
  }

  .description {
    padding: 1rem 0 2rem 0;
  }

  .link-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .link-section > a {
    font-size: 2rem;
    color: ${({ theme }) => theme.primary_text_color};
  }

  img {
    height: auto;
    width: 35vw;
    max-width: 30rem;
    display: block;
  }

  @media (max-width: 991px) {
    flex-direction: column;

    .pic-container {
      padding-top: 3rem;
    }

    img {
      width: 100%;
    }
    .info-container {
      width: 100%;
    }
  }
`;

export const LinkRowSection = styled(LinkRowContainer)`
  a {
    font-size: 2rem;
  }
`;
