// Stile componente MainContent
import styled from "styled-components";
import { media } from "../../theme/media";

const StyledMainContent = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  //grid-area: bckheader;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 7;
  padding: 0.25rem;

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */
    display: flex;
    flex-direction: column;
   
    width: auti;
    height: auto;

    justify-content: space-between;
    align-items: center;
   
  `}
`;

export { StyledMainContent };
