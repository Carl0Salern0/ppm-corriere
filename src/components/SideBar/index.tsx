import { FunctionComponent } from "react";
import { StyledSideBar } from "./index.style";

interface SideBarProps {
  children?: React.ReactNode;
}

const SideBar: FunctionComponent<SideBarProps> = ({ children }) => {
  return <StyledSideBar>Side Bar</StyledSideBar>;
};

export default SideBar;
