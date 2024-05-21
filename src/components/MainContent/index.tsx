// Componente MainContent

import { FunctionComponent } from "react";
import { StyledMainContent } from "./index.style";

import ProtoNews1 from "../ProtoNews1";
import ProtoNews2 from "../ProtoNews2";
import ProtoNews3 from "../ProtoNews3";

import imgFullCol from "../../resources/img/fullCol.gif";
import imgHalfCol from "../../resources/img/halfCol.gif";
import img3Col from "../../resources/img/img3col.gif";

interface MainContentProps {
  children?: React.ReactNode;
}

const MainContent: FunctionComponent<MainContentProps> = ({ children }) => {
  return (
    <StyledMainContent>
      <ProtoNews1
        title={"Takimata voluptua est lorem"}
        subTitle={"Sanctus diam justo sea accusam ipsum nam"}
        urlImage={imgFullCol}
        altTitleImage={"Zuffolo"}
        author={"Gubergren justo"}
      ></ProtoNews1>
      <ProtoNews2
        title={"Elit vel dolores ipsum blandit accusam"}
        subTitle={"Ea invidunt sed nulla sadipscing sed diam est"}
        urlImage={imgHalfCol}
        altTitleImage={"Zuffolo"}
        author={"Adipiscing sadipscing"}
      ></ProtoNews2>
      <ProtoNews3
        title={"Takimata voluptua est lorem"}
        subTitle={"Sanctus diam justo sea accusam ipsum nam"}
        urlImage={img3Col}
        altTitleImage={"Zuffolo"}
        author={"Facilisis kasd"}
      ></ProtoNews3>
    </StyledMainContent>
  );
};

export default MainContent;
