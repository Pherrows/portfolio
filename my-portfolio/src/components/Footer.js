import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid orange;
  /* flex-direction: column; */
`;

const FooterDivitem = styled.div``;

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledP = styled.p`
  font-size: 15px;
  font-weight: 400;
  padding-top: 10px;
`;

function Footer(props) {
  return (
    <>
      <FooterDiv>
        <FooterDivitem>
          <StyledSpan>Phone</StyledSpan>
          <StyledP>010-9511-1364</StyledP>
        </FooterDivitem>
        <FooterDivitem>
          <StyledSpan>Email</StyledSpan>
          <StyledP>yhk1492@naver.com</StyledP>
        </FooterDivitem>
        <FooterDivitem>
          <span>Email</span>
          <StyledP>yhk1492@naver.com</StyledP>
        </FooterDivitem>
      </FooterDiv>
    </>
  );
}

export default Footer;
