import styled from "styled-components";
import { media } from "../../theme/media";

const StyledAds = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;

  grid-area: ads;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  padding: 0.25rem;
  padding: 0.25rem;

  display: flex;
  background-color: #61dafb;

  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );

  color: #fff;
  justify-content: center;
  align-items: center;

  width: 982px;

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */

    display: none;

  `}
`;

export { StyledAds };
