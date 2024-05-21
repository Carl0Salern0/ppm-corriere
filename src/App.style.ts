import styled from "styled-components";

import { media } from "./theme/media";

const StyledApp = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background-color: #fff;

  // Il layout di App si compone di un grid che divide due aree orizzontali: header e corpo principale.
  // A sua volta il corpo principale (PageContainer) è organizzato con grid layout su due colonne

  // Griglia grid layout
  grid-template-rows: 40px auto;
  grid-template-areas:
    "nav" /*height: 40px*/
    "pagecontainer" /*height: auto*/;
  grid-gap: 0.25rem;

  ${media.lessThan("sm")`
  /* screen width is less than 768px (medium) */
  
  body {
  display: block;
  margin:0;
  
  }
  a {
  text-decoration: none; 
  cursor: pointer;
  }
`}
`;

export { StyledApp };
