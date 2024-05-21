// Componente ProtoVideo

import React, { FunctionComponent } from "react";

import { StyledProtoVideo } from "./index.style";

interface ProtoVideoProps {
  title: string;
  subTitle?: string;
  urlImage?: string;
  altTitleImage?: string;
  date?: string;
  author?: string;
  text?: string;
}

const ProtoVideo: FunctionComponent<ProtoVideoProps> = ({
  title,
  subTitle,
  urlImage,
  altTitleImage,
  date,
  author,
  text,
}) => {
  return (
    <StyledProtoVideo>
      <div className="imgGridVideo">
        <figure>
          <a href="#">
            <img src={urlImage} alt="{altTitleImage}" />
          </a>
        </figure>
      </div>
      <div className="textGridVideo">
        <a href="#">
          <h1 className="titleProtoVideo">{title}</h1>
          <h3>{subTitle}</h3>
        </a>
        <p>{date}</p>
        <p className="authorProtoVideo">{author}</p>
        <p>{text}</p>
      </div>
    </StyledProtoVideo>
  );
};

export default ProtoVideo;
