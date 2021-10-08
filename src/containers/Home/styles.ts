import styled from "styled-components";

import { FlexRowContainer } from "components/GlobalStyles";

export const HomeContainer = styled(FlexRowContainer)`
  padding: 4rem 0 5rem 0;
  width: 100%;

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
