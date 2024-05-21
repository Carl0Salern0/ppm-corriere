import { FunctionComponent } from "react";
import { StyledNavBar } from "./index.style";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: FunctionComponent<NavBarProps> = ({ children }) => {
  return <StyledNavBar>Nav bar</StyledNavBar>;
};

export default NavBar;
