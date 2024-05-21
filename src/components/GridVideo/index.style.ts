// Stile componente GridVideo
import styled from "styled-components";
import { media } from "../../theme/media";

const StyledGridVideo = styled.div`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 6;
  padding: 0.25rem;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .gridvideo-component {
    display: block;
    flex-direction: row;
    width: 992px;
    border-top: solid 1px #dadada;
    background-color: #fff;
  }
  .gridvideo-title {
    display: block;

    height: 30px;
    text-align: left;
  }

  .gridvideo-title span {
    font-family: "Arial Narrow";
    margin-left: 10px;
    font-weight: 600;
  }

  .gridvideo-title img {
    margin-top: 8px;
    margin-left: 10px;
    font-weight: 600;
  }

  .gridvideo-content {
    display: flex;
    flex-direction: row;

    background-color: #fff;

    align-content: flex-start;

    box-sizing: border-box;
    color: rgb(51, 51, 51);

    height: 112px;

    line-height: 24px;
    width: 992px;
  }

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */
   .gridvideo-content{

      display: flex;
      flex-direction: column;
   
      width: 100wv;
      height: 150vh;

    justify-content: space-between;
    align-items: center;
    
    }
  `};
`;

export { StyledGridVideo };
