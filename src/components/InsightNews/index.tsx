import { FunctionComponent } from "react";
import { StyledInsightNews } from "./index.style";

interface ForeignNewsProps {
  children?: React.ReactNode;
}

const ForeignNews: FunctionComponent<ForeignNewsProps> = ({ children }) => {
  return <StyledInsightNews>Insight News</StyledInsightNews>;
};

export default ForeignNews;
