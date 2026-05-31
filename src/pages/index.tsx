import Mentor from "@/components/Mentor";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome/Welcome";
import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  width: 75%;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <MainContainer>
      <TopSections>
        <Welcome />
        <Projects />
        <Line />
        <Mentor />
      </TopSections>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const TopSections = styled.div`
  width: 100%;
  background: url('https://sticnuru.sirv.com/Website%20images/endless-constellation.svg') repeat, #080a10;
`;

export default Main;
