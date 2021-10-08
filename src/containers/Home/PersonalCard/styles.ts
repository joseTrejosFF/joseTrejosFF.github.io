import styled from "styled-components";
import { FlexColContainer, LinkRowContainer } from "components/GlobalStyles";

export const PersonalCardContainer = styled(FlexColContainer)`
  .personal-pic > img {
    height: 15rem;
  }

  .full-name {
    padding: 0.5rem 0;
  }

  .job-title {
    padding: 1rem 0;
  }

  .my-location {
    padding-bottom: 1rem;
  }

  .phone,
  .email {
    padding-bottom: 1rem;
  }

  .phone > p > span,
  .email > p > span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding-bottom: 3rem;

    .full-name {
      padding-top: 2rem;
    }
  }
`;

export const LinkRowSection = styled(LinkRowContainer)`
  a {
    font-size: 2rem;
  }
`;
