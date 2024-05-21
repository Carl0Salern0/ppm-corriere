// Componente Header

import { FunctionComponent } from "react";
import { StyledBckHeader } from "./index.style";

import socialIcon from "../../resources/img/icon.gif";

interface BckHeaderProps {
  children?: React.ReactNode;
}

const BckHeader: FunctionComponent<BckHeaderProps> = ({ children }) => {
  return (
    <StyledBckHeader>
      <div id="bck-header-container">
        <div id="fxr-between-center">
          <div className="bck-adv">
            <div className="adv-content">Ads</div>
          </div>
        </div>
        <div id="fxr-grow-center-center">
          <div id="header-brand-cor">
            <a href="https://www.corriere.it/" id="idLogo">
              <h1 id="h1-1">Corriere della Sera</h1>
            </a>
            <div id="group-item">
              <span id="daytime">
                Lunedì 20 maggio 2024 - Aggiornato alle 20:24
              </span>
              <div id="social-nav">
                <div id="fxr-center-center">
                  <a href="https://www.facebook.com" className="iconSocialIcon">
                    <img src={socialIcon} alt="Facebook" title="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="iconSocialIcon"
                  >
                    <img src={socialIcon} alt="Instagram" title="Instagram" />
                  </a>
                  <a href="https://www.x.com" className="iconSocialIcon">
                    <img src={socialIcon} alt="X" title="X" />
                  </a>
                  <a href="https://www.tiktok.com" className="iconSocialIcon">
                    <img src={socialIcon} alt="TikTok" title="TikTok" />
                  </a>
                </div>
              </div>
              <div id="spaziotore"></div>
            </div>
          </div>
        </div>

        <div id="fxr-between-left">
          <div className="bck-adv">
            <div className="adv-content">Ads</div>
          </div>
        </div>
      </div>
    </StyledBckHeader>
  );
};

export default BckHeader;
