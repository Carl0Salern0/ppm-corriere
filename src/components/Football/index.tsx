import { FunctionComponent } from "react";
import { StyledFootball } from "./index.style";
//import { Slider } from "react-styled-carousel";

interface FootballProps {
  children?: React.ReactNode;
}

const Football: FunctionComponent<FootballProps> = ({ children }) => {
  return <StyledFootball></StyledFootball>;

  //
  // Avrei voluto utilizzare il componente react-styled-carousel ma ho avuto problemi di configurazione che non sono riuscito a risolvere
  //
};

export default Football;
