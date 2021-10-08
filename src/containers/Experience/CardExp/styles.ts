import styled from "styled-components";
import { FlexRowContainer } from "components/GlobalStyles";

export const CardExpContainer = styled(FlexRowContainer)`
  padding: 3rem 0;
  justify-content: space-between;

  .company-info {
  }

  .date {
  }

  .job-position {
    padding: 1rem 0;
  }

  .company-name,
  .company-location {
  }

  .job-description {
    width: 65%;
  }

  .job-description > li > span {
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 0;

    .company-info {
      padding-bottom: 2rem;
    }

    .job-description {
      width: 100%;
    }

    .job-description > li > p {
      padding-bottom: 1.5rem;
    }
  }
`;
