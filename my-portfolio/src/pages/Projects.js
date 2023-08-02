import React from "react";
import styled from "styled-components";

function Projects(props) {
  const MainDiv = styled.div`
    /* background-color: orange; */
    justify-content: center;
    /* height: 100vh; */
    align-items: center;
    /* flex-direction: column; */
    display: flex;
    width: 100%;
    margin-bottom: 100px;
  `;

  const TitleH1 = styled.h1`
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 100px;
  `;

  const TitleH2 = styled.h2`
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 20px;
  `;

  const TitleDiv1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 280px;
    margin-top: 100px;
    flex-direction: column;
  `;

  const TitleDiv2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 280px;
    margin-top: 100px;
    flex-direction: column;
    width: 400px;
  `;

  const TitleDiv3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 300px;
    margin-top: 100px;
    flex-direction: column;
  `;

  const TitleDiv4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 370px;
    margin-top: 100px;
    flex-direction: column;
    width: 500px;
    height: 300px;
  `;

  const BorderDiv = styled.div`
    /* border-bottom: 0.8px solid #ffcc66; */
    display: flex;
    width: 100%;
  `;
  return (
    <>
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH1>Projects</TitleH1>
            <TitleH2>Projects 01</TitleH2>
          </TitleDiv1>

          <TitleDiv4></TitleDiv4>
        </BorderDiv>
      </MainDiv>

      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH2>Projects 02</TitleH2>
          </TitleDiv1>

          <TitleDiv4></TitleDiv4>
        </BorderDiv>
      </MainDiv>
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH2>Projects 03</TitleH2>
          </TitleDiv1>

          <TitleDiv4></TitleDiv4>
        </BorderDiv>
      </MainDiv>
    </>
  );
}

export default Projects;
