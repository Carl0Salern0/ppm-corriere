import { FunctionComponent } from "react";
import { StyledBlogs } from "./index.style";

interface BlogsProps {
  children?: React.ReactNode;
}

const Blogs: FunctionComponent<BlogsProps> = ({ children }) => {
  return <StyledBlogs>Blogs</StyledBlogs>;
};

export default Blogs;
