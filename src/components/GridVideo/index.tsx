// Componente GridVideo
import { FunctionComponent } from "react";
import { StyledGridVideo } from "./index.style";

import ProtoVideo from "../ProtoVideo";

import videoImage from "../../resources/img/img4col.gif";
import gridvideo from "../../resources/img/gridvideo.gif";

interface GridVideoProps {
  children?: React.ReactNode;
}

const GridVideo: FunctionComponent<GridVideoProps> = ({ children }) => {
  return (
    <StyledGridVideo>
      <div className="gridvideo-component">
        <div className="gridvideo-title">
          <img src={gridvideo} alt="logo sezione"></img>
          <span>- I video del giorno</span>
        </div>
        <div className="gridvideo-content">
          <ProtoVideo
            title={"Takimata amet sed lorem aliquyam veniam"}
            urlImage={videoImage}
            altTitleImage={"Takimata amet sed lorem."}
            author={"Elit Ipsum"}
          ></ProtoVideo>
          <ProtoVideo
            title={"Consectetuer tempor blandit"}
            urlImage={videoImage}
            altTitleImage={"Consectetuer tempor blandit"}
            author={"Justo Tempor"}
          ></ProtoVideo>
          <ProtoVideo
            title={"Ex et eu amet eos labore"}
            urlImage={videoImage}
            altTitleImage={"Ex et eu amet eos labore"}
            author={"Elitr Zzril"}
          ></ProtoVideo>
          <ProtoVideo
            title={"Consequat sit odio et dignissim"}
            urlImage={videoImage}
            altTitleImage={"Consequat sit odio et dignissim"}
            author={"Nostrud et nihil"}
          ></ProtoVideo>
        </div>
      </div>
    </StyledGridVideo>
  );
};

export default GridVideo;
