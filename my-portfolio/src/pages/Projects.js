import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  /* background-color: orange; */
  /* flex-direction: column; */
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  margin-bottom: 100px;
`;

const TitleH1 = styled.h1`
  font-size: 45px;
  font-weight: 800;
  margin-bottom: 100px;
  /* margin-right: -50px; */
`;

const TitleH2 = styled.h2`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 20px;
`;

const TitleDiv1 = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-left: 280px;
  margin-top: 100px;
  flex-direction: column;
  width: 350px;
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
  /* width: 500px; */
  /* height: 300px; */
`;

const BorderDiv = styled.div`
  /* border-bottom: 0.8px solid #ffcc66; */
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  margin-top: 10px;
`;

function Projects(props) {
  const projectTitles = [
    {
      title: "Projects 01",
      content: "사용기술: HTML,CSS,JavaScript",
      content1: "스타벅스 메인 UI 를 따라 구현해 보았습니다.",
      Link: "https://920109.netlify.app",
      image: "/스타벅스.png",
    },
    {
      title: "Projects 02",
      content: "사용기술: HTML,CSS,JavaScript",
      content1: "음원사이트 UI 를 구현해 보았습니다.",
      Link: "https://992200110099.netlify.app",
      image: "/음원_2.png",
    },
    {
      title: "Projects 03",
      content: "사용기술: React,Redux,JavaScript",
      content1: "calendar 기능과 일정추가, 수정, 삭제 기능을 구현 하였습니다. ",
      Link: "https://920109-1.netlify.app",
      image: "/calendar.png",
    },
  ];

  return (
    <>
      {projectTitles.map((project, index) => (
        <MainDiv key={index}>
          <BorderDiv>
            <TitleDiv1>
              {index === 0 && <TitleH1>Projects</TitleH1>}
              <TitleH2>{project.title}</TitleH2>
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                {project.content}
              </p>
              <p
                style={{
                  paddingTop: "20px",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                {project.content1}
              </p>
            </TitleDiv1>
            <TitleDiv4>
              <a href={project.Link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt={`Project ${index + 1}`} />
              </a>
            </TitleDiv4>
          </BorderDiv>
        </MainDiv>
      ))}
    </>
  );
}

export default Projects;
