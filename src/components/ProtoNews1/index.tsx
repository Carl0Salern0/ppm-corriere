// Componente ProtoNews1 con immagine a colonna piena

import React, { FunctionComponent } from "react";

import { StyledProtoNews1 } from "./index.style";

interface ProtoNews1Props {
  title: string;
  subTitle?: string;
  urlImage?: string;
  altTitleImage?: string;
  date?: string;
  author?: string;
  text?: string;
}

const ProtoNews1: FunctionComponent<ProtoNews1Props> = ({
  title,
  subTitle,
  urlImage,
  altTitleImage,
  date,
  author,
  text,
}) => {
  return (
    <StyledProtoNews1>
      <div className="textNews1">
        <a
          href="https://www.corriere.it"
          title="Il Corriere della sera"
          target="blank"
        >
          <h1 className="titleNews1">{title}</h1>
          <h3 className="titleNews1">{subTitle}</h3>
        </a>
      </div>
      <div className="imgNews1">
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
    </StyledProtoNews1>
  );
};

export default ProtoNews1;
