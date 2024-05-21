// Stile componente ProtoVideo

import styled from "styled-components";
import { media } from "../../theme/media";

const StyledProtoVideo = styled.div`
  display: flex;
  width: 240px;

  align-items: flex-start;
  text-align: left;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .imgGridVideo {
    width: 130px;
    height: 100px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  .imgGridVideo figure {
    max-width: 100%;
    height: auto;
  }

  .textGridVideo {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 70px;
    align-content: stretch;
  }
  .textGridVideo h3 {
    display: none;
  }

  .textGridVideo h1,
  .textGridVideo p {
    margin: 0;
  }

  .titleProtoVideo {
    padding-top: 5px;
    margin-left: 0px;
    font-family: "serif";
    font-size: 0.875rem;
    font-weight: 600;
    color: #333;
    line-height: 16px;
  }
  .authorProtoVideo {
    font-family: "Arial Narrow";
    font-style: italic;
    font-size: 0.8rem;
    font-weight: 500;
    color: #49b8f1;
    line-height: 16px;
  }

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */
  
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  box-sizing: border-box;
   
  .imgGridVideo img{
    width: 150vw;
    height: auto;
    box-sizing: border-box;
    align-items: center;
  }
  
    .textGridVideo {
    display: block;
    width: 100vw;
    height: 100vh;
    }
  
  .titleProtoVideo {
    display: block;
    box-sizing: border-box;

    padding: 10px;
    margin: 0;
   
    font-family: "serif";
    font-size: 8vw;
    font-weight: 600;
    color: #333;
    
    line-height: 8vw;    
  }
  .authorProtoVideo {

  
    font-family: "Arial Narrow";
    font-style: italic;
    font-size: 6vw;
    font-weight: 500;
    color: #49b8f1;
    line-height: 8vw;

    box-sizing: border-box;
  }
  
    
    }
  `};
`;

export { StyledProtoVideo };
