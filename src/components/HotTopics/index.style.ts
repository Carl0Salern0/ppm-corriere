// Stile componente Hot Topics
import styled from "styled-components";
import { media } from "../../theme/media";

const StyledHotTopics = styled.div`
  background-color: #fff;
  border-top: 1px solid #dedede;
  width: 992px;

  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
  padding: 0.25rem;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  #hot-topics {
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;

    height: 48px;

    align-items: center;

    background-color: #fff;
    color: rgb(51, 51, 51);

    font-family: "Arial Narrow";
    font-size: 13px;
    font-weight: 500;
  }

  #hot-topics span {
    font-weight: 800;
  }

  #ul-1 {
    background-color: #fff;

    flex-grow: 1;
    justify-content: space-around;

    list-style-type: none;
    color: rgb(73, 184, 241);
    text-transform: uppercase;
    display: flex;
  }
  .li {
    display: flex;
    align-items: center;
    margin: 0px;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
    padding-top: 0px !important;
    padding-right: 0.9375rem !important;
    padding-bottom: 0px !important;
    padding-left: 0.9375rem !important;
  }

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */
   #hot-topics {
    display: none;
    }
  `}
`;

export { StyledHotTopics };
