import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  background-color: orange;
  display: flex;
  height: 100vh;
`;

const KakaoTalkImageUrl = "/KakaoTalk_20230801_144819230.jpg";

const MainImg = styled.div`
  width: 480px;
  height: 480px;
  background-image: url(${KakaoTalkImageUrl});
  background-size: cover;
`;

function Main(props) {
  return (
    <>
      <MainDiv>
        <MainImg></MainImg>
        <h1>ddddddddddddddd</h1>
      </MainDiv>
    </>
  );
}

export default Main;
