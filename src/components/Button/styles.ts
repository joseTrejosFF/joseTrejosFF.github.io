import styled from "styled-components";

export const StyledBtn = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.gui_theme_btn};
  cursor: pointer;

  i {
    font-size: 1.5rem;
  }
  /* i:hover {
    background-color: red;
    color: white;
    border: 1px solid black;
  } */
`;
