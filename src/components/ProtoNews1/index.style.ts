// Stile del componente ProtoNews1 con immagine a colonna piena

import styled from "styled-components";
import { media } from "../../theme/media";

const StyledProtoNews1 = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  align-items: flex-start;
  text-align: left;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  border-top: 1px solid #dedede;

  .imgNews1 {
    display: flex;

    width: auto;
    margin-top: 0px;
    margin-left: -45px;
    margin-right: 10px;

    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .textNews1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 70px;
    align-content: stretch;
  }

  h1.titleNews1 {
    padding-top: 10px;
    margin: 0;
    font-family: "serif";
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    line-height: 15px;
  }

  h3.titleNews1 {
    padding: 0;
    margin-left: 0;
    font-family: "serif";
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    line-height: 15px;
  }

  .authorNew1 {
    font-family: "Arial Narrow";
    font-style: italic;
    font-size: 0.8rem;
    font-weight: 500;
    color: #49b8f1;
    line-height: 16px;
  }
`;

export { StyledProtoNews1 };
