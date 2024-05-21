/* Componente PageContainer */

import { StyledPageContainer } from "./index.style";

import React, { FunctionComponent } from "react";
import { StyledBckHeader } from "../BckHeader/index.style";
import { StyledFootball } from "../Football/index.style";
import { StyledAds } from "../Ads/index.style";
import { StyledHotTopics } from "../HotTopics/index.style";
import { StyledMediaList } from "../MediaList/index.style";
import { StyledGridVideo } from "../GridVideo/index.style";
import { StyledMainContent } from "../MainContent/index.style";
import { StyledSideBar } from "../SideBar/index.style";
import { StyledInsightNews } from "../InsightNews/index.style";
import { StyledBlogs } from "../Blogs/index.style";
import { StyledFooter } from "../Footer/index.style";
import BckHeader from "../BckHeader";
import Ads from "../Ads";
//import Football from "../Football";
import HotTopics from "../HotTopics";
//import MediaList from "../MediaList";
import GridVideo from "../GridVideo";
import MainContent from "../MainContent";
import SideBar from "../SideBar";
import InsightNews from "../InsightNews";
import Blogs from "../Blogs";
import Footer from "../Footer";

interface PageContainerProps {
  children?: React.ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({ children }) => {
  return (
    <StyledPageContainer>
      <BckHeader></BckHeader>
      <Ads></Ads>
      <HotTopics></HotTopics>
      <GridVideo></GridVideo>
      <MainContent></MainContent>
      <SideBar></SideBar>
      <InsightNews></InsightNews>
      <Blogs></Blogs>
      <Footer></Footer>
    </StyledPageContainer>
  );
};

export default PageContainer;
