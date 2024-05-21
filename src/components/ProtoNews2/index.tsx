import React, { FunctionComponent } from "react";

import { StyledProtoNews2 } from "./index.style";

interface ProtoNews2Props {
  title: string;
  subTitle?: string;
  urlImage?: string;
  altTitleImage?: string;
  date?: string;
  author?: string;
  text?: string;
}

const ProtoNews2: FunctionComponent<ProtoNews2Props> = ({
  title,
  subTitle,
  urlImage,
  altTitleImage,
  date,
  author,
  text,
}) => {
  return (
    <StyledProtoNews2>
      <div className="imgNews2">
        <figure>
          <a href="#">
            <img src={urlImage} alt="{altTitleImage}" />
          </a>
        </figure>
      </div>
      <div className="textNews2">
        <a href="#">
          <h1 className="titleNews2">{title}</h1>
          <h3 className="titleNews2">{subTitle}</h3>
        </a>
        <p className="dateNews2">{date}</p>
        <p className="authorNews2">{author}</p>
        <p className="textNes2">{text}</p>
      </div>
    </StyledProtoNews2>
  );
};

export default ProtoNews2;
