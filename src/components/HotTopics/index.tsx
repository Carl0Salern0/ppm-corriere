// Componente Hot Topics

import { FunctionComponent } from "react";
import { StyledHotTopics } from "./index.style";

interface HotTopicsProps {
  children?: React.ReactNode;
}

const HotTopics: FunctionComponent<HotTopicsProps> = ({ children }) => {
  return (
    <StyledHotTopics>
      <div id="hot-topics">
        <span>Temi caldi di oggi:</span>
        <ul id="ul-1">
          <a href="#">
            <li>Dolor invidunt</li>
          </a>
          <a href="#">
            <li>Molestie gubergren</li>
          </a>
          <a href="#">
            <li>Dolore rebum</li>
          </a>
          <a href="#">
            <li>Erat consectetuer</li>
          </a>
          <a href="#">
            <li>Duo diam</li>
          </a>
          <a href="#">
            <li>Sea nonum</li>
          </a>
        </ul>
      </div>
    </StyledHotTopics>
  );
};

export default HotTopics;
