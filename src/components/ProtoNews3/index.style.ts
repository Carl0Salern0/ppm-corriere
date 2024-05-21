import styled from "styled-components";
import { media } from "../../theme/media";

const StyledProtoNews3 = styled.div`
  display: flex;

  flex-direction: row;
  width: auto;

  align-items: flex-start;
  text-align: left;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  border-top: 1px solid #dedede;

  .imgNews3 {
    display: flex;

    width: auto;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 10px;

    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .textNews3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-height: 70px;
    align-content: stretch;
  }

  h1.titleNews3 {
    padding-top: 10px;
    margin: 0;
    font-family: "serif";
    font-size: 2.5rem;
    font-weight: 600;
    color: #333;
    line-height: 2rem;
  }

  h3.titleNews3 {
    padding: 0;
    margin-left: 0;
    font-family: "serif";
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    line-height: 20px;
  }

  .dateNews3 p {
    height: 0;
    margin: 0;
    padding: 0;
  }

  .authorNews3 p {
    font-family: "Arial Narrow";
    font-style: italic;
    font-size: 0.8rem;
    font-weight: 500;
    color: #49b8f1;
    line-height: 16px;
  }

  .textNews3 p {
    height: 0;
    margin: 0;
    padding: 0;
  }
`;

export { StyledProtoNews3 };
