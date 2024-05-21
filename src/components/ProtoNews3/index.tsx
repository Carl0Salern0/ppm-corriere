import React, { FunctionComponent } from "react";

import { StyledProtoNews3 } from "./index.style";

interface ProtoNews3Props {
  title: string;
  subTitle?: string;
  urlImage?: string;
  altTitleImage?: string;
  date?: string;
  author?: string;
  text?: string;
}

const ProtoNews3: FunctionComponent<ProtoNews3Props> = ({
  title,
  subTitle,
  urlImage,
  altTitleImage,
  date,
  author,
  text,
}) => {
  return (
    <StyledProtoNews3>
      <div className="textNews3">
        <h1 className="titleNews3">{title}</h1>
        <h3 className="titleNews3">{subTitle}</h3>
        <p className="dateNews3">{date}</p>
        <p className="authorNews3">{author}</p>
        <p className="textNes3">{text}</p>
      </div>
      <div className="imgNews3">
        <figure>
          <a
            href="https://www.corriere.it"
            title="Il Corriere della sera"
            target="blank"
          >
            <img src={urlImage} alt="{altTitleImage}" />
          </a>
        </figure>
      </div>
    </StyledProtoNews3>
  );
};

export default ProtoNews3;
