import React from "react";
import styled from "styled-components";
import { BsPhone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const FooterDiv = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ffcc66;
  /* flex-direction: column; */
`;

const FooterDivitem = styled.div``;

const StyledSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const StyledP = styled.p`
  font-size: 17px;
  font-weight: 500;
  padding-top: 10px;
`;

function Footer(props) {
  return (
    <>
      <FooterDiv>
        <FooterDivitem>
          <StyledSpan>
            <BsPhone style={{ paddingRight: "15px" }} />
            Phone
          </StyledSpan>
          <StyledP>010-9511-1364</StyledP>
        </FooterDivitem>
        <FooterDivitem>
          <StyledSpan>
            <AiOutlineMail style={{ paddingRight: "15px" }} />
            Email
          </StyledSpan>
          <StyledP>yhk1492@naver.com</StyledP>
        </FooterDivitem>
        <FooterDivitem>
          <StyledSpan>
            <FiInstagram style={{ paddingRight: "15px" }} />
            Instagram
          </StyledSpan>
          <StyledP>Double__dip</StyledP>
        </FooterDivitem>
      </FooterDiv>
    </>
  );
}

export default Footer;
