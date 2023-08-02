import React from "react";
import styled from "styled-components";
import { BiSolidDownArrow } from "react-icons/bi";

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

function Resume(props) {
  return (
    <>
      {/* 학력 */}
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH1>Reseme</TitleH1>
            <TitleH2>학력 및 교육이력</TitleH2>
          </TitleDiv1>

          <TitleDiv2>
            <TitleH1>
              <BiSolidDownArrow />
            </TitleH1>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              2008-08 ~ 2011-03
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              2023-03 ~ 2023-07
            </span>
          </TitleDiv2>
          <TitleDiv3>
            <TitleH1>
              <BiSolidDownArrow />
            </TitleH1>
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
          </TitleDiv3>
        </BorderDiv>
      </MainDiv>

      {/* 사회경력 */}
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH1> </TitleH1>
            <TitleH2> 사회경력</TitleH2>
          </TitleDiv1>

          <TitleDiv4>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              2018-11 ~ 2023-02
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              2016-09 ~ 2018-10
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              2015-08 ~ 2016-08
            </span>
          </TitleDiv4>
          <TitleDiv3>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              세자씽크 | 생산직 및 A/S
            </span>

            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              (주)맨콜렉션 | 자재과
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              ABC마트코리아 | 판매사원
            </span>
          </TitleDiv3>
        </BorderDiv>
      </MainDiv>
      {/* 보유기술 */}
      <MainDiv>
        <BorderDiv>
          <TitleDiv1>
            <TitleH1> </TitleH1>
            <TitleH2> 기술스택</TitleH2>
          </TitleDiv1>

          <TitleDiv4>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              MiddleWare
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              UI
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              Language
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              개발도구
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              협업도구
            </span>
            <span
              style={{
                fontSize: "18px",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              품질관리도구
            </span>
          </TitleDiv4>
          <TitleDiv3>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              Redux
            </span>

            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              HTMl, CSS, JavaScript, React
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              JavaScrip,TypeScrip
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              Git, Chrome Dev Tool, Visual Studio Code
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              Github, Figma
            </span>
            <span
              style={{
                fontSize: "15px",
                paddingBottom: "15px",
                fontWeight: "400",
              }}
            >
              LightHouse, W3C Validators
            </span>
          </TitleDiv3>
        </BorderDiv>
      </MainDiv>
    </>
  );
}

export default Resume;
