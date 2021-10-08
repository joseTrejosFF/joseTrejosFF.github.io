import styled from "styled-components";

export const CardSkillContainer = styled.div`
  .title {
    text-align: center;
  }
  .p-intro {
    padding: 2rem 0;
  }
  .tools {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tools > li {
    display: inline;
    width: 8rem;
    height: 2rem;
  }

  .tools > li > span {
    font-weight: 600;
  }

  /* @media (max-width: 768px) {

  } */
`;
