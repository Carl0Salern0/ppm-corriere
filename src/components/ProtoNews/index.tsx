import React, { FunctionComponent } from "react";

import { StyledProtoNews } from "./index.style";

interface ProtoNewsProps {
  title: string;
  subTitle?: string;
  urlImage?: string;
  altTitleImage?: string;
  date?: string;
  author?: string;
  text?: string;
}

const ProtoNews: FunctionComponent<ProtoNewsProps> = ({
  title,
  subTitle,
  urlImage,
  altTitleImage,
  date,
  author,
  text,
}) => {
  return (
    <StyledProtoNews>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <img src={urlImage} alt="{altTitleImage}" />
      <p>{date}</p>
      <p>{author}</p>
      <p>{text}</p>.
    </StyledProtoNews>
  );
};

export default ProtoNews;
