import styled from "styled-components";

export const ContactMeContainer = styled.div`
  padding: 2rem 0 5rem 0;
  .title {
    padding-bottom: 2rem;
    text-align: center;
  }
  .contact-section {
    padding-top: 1rem;
    /* text-align: center; */
    margin-left: 3rem;
  }

  .phone {
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;
