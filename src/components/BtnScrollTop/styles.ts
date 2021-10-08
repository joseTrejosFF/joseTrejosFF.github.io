import styled from "styled-components";

export const BtnScrollTopContainer = styled.div`
  .go-top {
    color: ${({ theme }) => theme.primary_text_color};
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 0.5rem;
    display: block;
    font-size: 1.5rem;
  }
`;
