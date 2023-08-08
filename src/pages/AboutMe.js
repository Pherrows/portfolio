import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components/";

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
  width: 850px;
`;

const TitleDiv3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-top: 100px;
  flex-direction: column;
  width: 400px;
`;

const TitleDiv4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 370px;
  margin-top: 100px;
  flex-direction: column;
  width: 400px;
`;

const BorderDiv = styled.div`
  /* border-bottom: 0.8px solid #ffcc66; */
  display: flex;
  width: 100%;
`;

function AboutMe(props) {
  return (
    <>
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH1>Self-introduction</TitleH1>
            <TitleH2>자기소개 및 장점</TitleH2>
          </TitleDiv1>

          <TitleDiv2>
            <TitleH1>
              <BiSolidDownArrow />
            </TitleH1>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "20px",
                fontWeight: "600",
              }}
            >
              프론트엔드
              개발 직무는 사용자가 화면에서 보는 모든 것을 개발하는 직무입니다.
              <br />
              <br />
              개발 과정 중 화면에 직관적으로 보이고 확인할
              수 있는 점에서 프론트엔드 개발에 흥미가 생겼습니다.
              <br />
              <br />
              사용자들의 편의성과 빠른 니즈 파악으로 웹 애플리케이션을 개발하여 기존의 서비스를 보안하고 수정하여 더 편리한 웹 어플리케이션을 개발하는 프론트엔드 개발자가 되고 싶습니다.
              <br />
              <br />
              이를 위해 프론트엔드 개발 교육과정을 훈련에 참여했습니다. HTML과 CCS 와 JavaScript를 기본적으로 배우고 JavaScrip의 라이브러리인 React를 이용하여 음원사이트, 메모
              웹, 쇼핑몰 등을 만들어 보았습니다.
              <br />
              <br />
              HTML과 CCS를 사용하여 기본적인 웹 퍼블리셔를 활용해 보았고,
              JavaScript 와 React를 활용하여 데이터를 활용하는 법을 배웠습니다.
              <br />
              <br />
              배운 내용과 교육 활동으로 기획한 내용을 하나하나 만들어 나갈 때 성취감을 느꼈습니다.
              <br />
              <br />
              교육 중 이해가 부족한 부분과 더 알고 싶은 내용은 주로 구글링과 YouTube 강의 영상 등을 참고하여 공부하였습니다.
              <br />
              <br />
              저의 가장 큰 경쟁력은 꾸준함과 여러 사람들의 의견을 빠르게
              받아들이고 행동에 옮기는 실행력입니다.
              <br />
              <br />
              서비스직에서도 근무를 해보았고 생산 관련 업종에 근무할 당시에는
              A/S 처리도 해결하며 여러 사람들의 의견을 듣고 니즈를 파악하여
              문제를 해결할 수 있는 성격과 능력을 가지고 있는 게 가장 큰
              경쟁력과 장점이라고 생각합니다.
              <br />
              <br /> 이전 직장 생활에서 A/S 업무를 나가면 고객의 의견을 듣고
              같이 나간 직원들과 소통 후 빠르게 문제의 원인을 파악하여 해결 후
              같은 문제가 다시 발생하지 않도록 업무를 마무리하였고,
              <br /> <br /> 이런 성격 과 능력은 팀 프로젝트를 진행할 때 도움이
              될 거 같다고 생각합니다.
            </span>
          </TitleDiv2>
          {/* <TitleDiv3>
            <TitleH1><BiSolidDownArrow /></TitleH1>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              계산고등학교 | 문과 | 졸업
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              인천구월 그린컴퓨터학원 | 프론트엔드 정규과정 | 수료
            </span>
          </TitleDiv3> */}
        </BorderDiv>
      </MainDiv>
    </>
  );
}

export default AboutMe;
