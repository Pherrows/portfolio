import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid orange;
`;

function Footer(props) {
  return (
    <>
      <FooterDiv>
        <span>Phone</span>
      </FooterDiv>
    </>
  );
}

export default Footer;
