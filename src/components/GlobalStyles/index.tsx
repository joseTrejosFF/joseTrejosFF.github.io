import styled, { createGlobalStyle } from "styled-components";
import { Title, FontWeight } from "utils/fonts";

const { T1, T2, T3, T4, T5, T6 } = Title;
const { BOLD, MEDIUM } = FontWeight;

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

html {
  scroll-behavior: smooth;
}

body {
  background: ${({ theme }) => theme.primary_bg_color};
  color: ${({ theme }) => theme.primary_text_color};  
  transition: all 0.50s linear;  
  font-family: Arial, Helvetica, sans-serif;  
  letter-spacing: 0.5px;
  max-width: 1000px;
  margin: 0 auto;
  width: 75vw;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {  
    background: ${({ theme }) => theme.primary_bg_color}; 
  }
  
  ::-webkit-scrollbar-thumb {  
    background: #555;  
  }

  ::-webkit-scrollbar-thumb:hover {  
    background: ${({ theme }) => theme.primary_text_color}; 
  }

}

figcaption > p {
  padding-top: 0.5rem;
  text-align: center;
}

img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

}


a:link,
  a:visited {
    color: ${({ theme }) => theme.primary_text_color};
  }

  h1 {
    font-size: ${T1};
    font-weight: ${MEDIUM};
  }
  h2 {
    font-size: ${T2};
    font-weight: ${MEDIUM};

  }
  h3 {
    font-size: ${T3};
    font-weight: ${MEDIUM};

  }
  h4 {
    font-size: ${T4};
  }
  h5 {
    font-size: ${T5};
    font-weight: ${BOLD};
  }
  h6 {
    font-size: ${T6};
    font-weight: ${BOLD};
  }

  p {
  line-height: 1.8rem;
  text-align: justify;
  }
`;

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const FlexColContainer = styled(FlexRowContainer)`
  flex-direction: column;
`;

export const LinkRowContainer = styled(FlexRowContainer)`
  width: 100%;
  a {
    color: ${({ theme }) => theme.primary_text_color};
  }
`;
