import styled from "styled-components";
import { media } from "../../theme/media";

const StyledFooter = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  //grid-area: bckheader;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 10;
  grid-row-end: 10;
  padding: 0.25rem;

  ${media.greaterThan("md")` 
    width: 992px !important;
    max-width: 992px !important;
    //background-color: yellow;
    `};
`;

export { StyledFooter };