// Stile del componente PageContainer
import styled from "styled-components";

import { media } from "../../theme/media";

const StyledPageContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  border-color: #fff;

  // Griglia grid layout
  grid-template-rows: 126px 126px 1px 48px 1px 160px auto auto auto auto 40px;
  grid-template-columns: auto 652px 346px auto;

  text-align: center;

  ${media.lessThan("sm")`
  /* screen width is less than 768px (medium) */
  display: block;
`}
`;

export { StyledPageContainer };
