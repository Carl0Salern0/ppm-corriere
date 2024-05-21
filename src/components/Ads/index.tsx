import { FunctionComponent } from "react";
import { StyledAds } from "./index.style";

interface AdsProps {
  children?: React.ReactNode;
}

const Ads: FunctionComponent<AdsProps> = ({ children }) => {
  return <StyledAds>Ads</StyledAds>;
};

export default Ads;
