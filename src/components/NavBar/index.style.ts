import styled from "styled-components";
import { media } from "../../theme/media";

const StyledNavBar = styled.div`
  grid-column: 1 / -1;
  //align-items: stretch;
  //box-sizing: border-box;
  //color: rgb(51, 51, 51);

  //font-family: "SolferinoText-Regular";
  font-size: 16px;
  font-weight: 400;
  //height: 40px;
  //line-height: 24px;
  //list-style-image: none;
  //margin: 0;
  //padding-left: 14px;
  //width: 100%;
  display: flex;
  background-color: rgb(10, 82, 120);

  //${media.greaterThan("md")` 
  //  width: 992px !important;
  //  max-width: 992px !important;
  //background-color: yellow;
    `};
`;

export { StyledNavBar };
