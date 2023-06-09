import Mentor from "@/components/Mentor";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome/Welcome";
import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  overflow: visible;
  height: 30px;
  border-style: solid;
  border-color: black;
  border-width: 1px 0 0 0;
  border-radius: 20px;
  margin-top: 150px;
  width: 75%;

  &:before {
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: black;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Welcome />
      <Projects />
      <Line />
      <Mentor />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default Main;
