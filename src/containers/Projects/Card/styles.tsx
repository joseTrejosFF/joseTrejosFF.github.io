import styled from "styled-components";
import { FlexRowContainer, FlexColContainer } from "components/GlobalStyles";

export const ProjectContainer = styled(FlexColContainer)`
  .heading-1 {
  }

  .heading-2 {
    padding-bottom: 2rem;
  }

  img {
    width: 30vw;
  }
`;

export const IntroContainer = styled.div`
  padding: 12vh 0 5rem 0;

  .h-main-title {
  }

  .p-intro {
    margin: 4rem 0;
  }

  .img-intro {
    width: 100% !important;
    max-width: 1100px;
  }
`;

export const RowSectionContainer = styled(FlexRowContainer)`
  padding-bottom: 4rem;
  justify-content: space-between;

  .chosen-web-stack,
  .challenges-Difficulties {
    width: 60%;
    padding-right: 3rem;
  }

  .h-challenges-Difficulties {
  }

  .p-chosen-web-stack,
  .p-challenges-Difficulties {
    padding-bottom: 1.5rem;
  }

  .ul-chosen-web-stack {
    padding-left: 2rem;
  }

  .img-container > img {
    width: 100%;
    max-width: 500px;
  }

  /* @media (max-width: 991px) {
    flex-direction: column;

    .chosen-web-stack,
    .challenges-Difficulties {
      width: 100%;
      padding-right: 0;
    }
  } */

  @media (max-width: 991px) {
    flex-direction: column;

    .chosen-web-stack,
    .challenges-Difficulties {
      width: 100%;
      padding-right: 0;
    }

    .ul-chosen-web-stack {
      padding-bottom: 2rem;
    }

    .img-container > img {
      width: 100%;
      margin: 0 auto;
    }

    .img-container {
    }

    .sources {
      font-size: 0.6rem;
    }
  }
`;

export const ColSectionContainer = styled(RowSectionContainer)`
  flex-direction: column;

  .p-project-purpose,
  .p-lessons-learned {
    padding: 1rem 0;
  }
`;
