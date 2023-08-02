import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const KakaoTalkImageUrl = "/KakaoTalk_20230802_201313567.jpg";

const MainDiv = styled.div`
  /* background-color: orange; */
  /* justify-content: center; */
  /* height: 100vh; */
  display: flex;
  width: 100%;
  /* align-items: center; */
  /* flex-direction: column; */
  margin-bottom: 100px;
`;

const MainImg = styled.div`
  width: 480px;
  height: 480px;
  background-image: url(${KakaoTalkImageUrl});
  background-size: cover;
  border-radius: 50%;
  margin-left: 300px;
  margin-top: 150px;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: 50px;
`;

const StyledSpan = styled.span`
  font-size: 100px;
  font-weight: 800;
  margin-left: 30px;
  margin-bottom: 50px;
  margin-top: 100px;
`;

const StyledP1 = styled.p`
  margin-left: 30px;
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const StyledP2 = styled.p`
  margin-left: 30px;
  font-size: 18px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const StyledA1 = styled.a`
  border-radius: 50%;
  background-color: #ffcc66;
  width: 140px;
  height: 140px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const StyledA2 = styled.a`
  border-radius: 50%;
  background-color: #ff3333;
  width: 140px;
  height: 140px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const StyledA3 = styled.a`
  border-radius: 50%;
  background-color: #66cccc;
  width: 140px;
  height: 140px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

function Main(props) {
  const navigate = useNavigate();
  return (
    <>
      <MainDiv>
        <MainImg />
        <StyledText>
          <StyledSpan>Hello!</StyledSpan>
          <StyledP1>Hello, I'm Lee Sanghyeok.</StyledP1>
          <StyledP2>
            I made a brief self-introduction and portfolio I look forward to
            your kind cooperation.
          </StyledP2>
          <ButtonDiv>
            <StyledA1
              onClick={() => {
                navigate("/reseme");
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: 800 }}>Reseme</p>
            </StyledA1>
            <StyledA2
              onClick={() => {
                navigate("/projects");
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: 800 }}>Projects</p>
            </StyledA2>
            <StyledA3
              onClick={() => {
                navigate("/aboutMe");
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: 800 }}>About Me</p>
            </StyledA3>
          </ButtonDiv>
        </StyledText>
      </MainDiv>
    </>
  );
}

export default Main;
