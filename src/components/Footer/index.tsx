import { FunctionComponent } from "react";
import { StyledFooter } from "./index.style";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: FunctionComponent<FooterProps> = ({ children }) => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
