import { FunctionComponent } from "react";
import { StyledMediaList } from "./index.style";

interface MediaListProps {
  children?: React.ReactNode;
}

const MediaList: FunctionComponent<MediaListProps> = ({ children }) => {
  return <StyledMediaList>Media List</StyledMediaList>;
};

export default MediaList;
