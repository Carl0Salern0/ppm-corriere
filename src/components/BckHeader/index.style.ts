// Stile del componente Header
import styled from "styled-components";
import { media } from "../../theme/media";
import logoImg from "../../resources/img/logo.gif";

const StyledBckHeader = styled.div`
  background-color: #fff;
  color: #0a0a0a;

  // Posizionamento grid
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;

  display: flex;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  #bck-header-container {
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    color: rgb(10, 10, 10);
    height: 90px;
    justify-content: space-between;
    line-height: 24px;
    width: 994px;
    display: flex;
    background-color: rgb(255, 255, 255);
  }

  #fxr-between-center {
    height: 90px;
    width: 184px;
  }

  .bck-adv {
    height: 90px;
    width: 184px;
  }

  .adv-content {
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    align-items: center;
    color: #fff;
    height: 90px;
    justify-content: center;
    width: 184px;
    display: flex;
    margin: auto;
  }

  #fxr-grow-center-center {
    align-content: center;
    align-items: center;
    flex-grow: 1;
    height: 78px;
    justify-content: center;
    width: 626px;
    display: flex;
  }

  #header-brand-cor {
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    width: 556px;
    display: flex;
  }

  #idLogo {
    color: rgb(73, 184, 241);
    cursor: pointer;
    height: 52px;
    width: 556px;
  }

  #header-brand-cor h1 {
    //background-image: url("https://components2.corriereobjects.it/rcs_cor_corriere-layout/v2/assets/img/ext/logos/logo_corriere-black.svg");
    background-image: url(${logoImg});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100%;
    font-size: 22px;
    font-weight: 700;
    height: 44px;
    line-height: 34px;
    position: relative;
    text-indent: -9998px;
    width: 556px;
    display: inline-block;
  }

  #group-item {
    align-items: center;
    height: 26px;
    justify-content: space-between;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    width: 556px;
    display: flex;
  }

  #daytime {
    color: rgb(102, 102, 102);
    font-family: "Arial Narrow";
    font-size: 13px;
    height: 18px;
    line-height: 26px;
    width: 300px;
    margin-top: 15px;
  }

  #social-nav {
    height: 26px;
    position: relative;
    width: 110px;
  }

  #fxr-center-center {
    align-content: center;
    align-items: center;
    height: 26px;
    justify-content: center;
    width: 110px;
    display: flex;
    margin-top: 15px;
  }

  .iconSocialIcon {
    color: rgb(73, 184, 241);
    cursor: pointer;
    height: 26px;
    padding-right: 0.3125rem;
    position: relative;
    width: 26px;
  }

  #i-1 {
    color: rgb(66, 103, 178);
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    width: 20px;
  }

  #fxr-between-left {
    align-items: center;
    color: rgb(255, 255, 255);
    height: 90px;
    justify-content: center;
    width: 184px;
    display: flex;
    margin: auto;
  }

  ${media.lessThan("sm")`
  /* screen width is less than 576px (small) */
  
  div.adv-content {
    display: none;
    }
    
    
    
  `}
`;

export { StyledBckHeader };
