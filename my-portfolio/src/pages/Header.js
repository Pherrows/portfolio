import React from "react";
import styled from "styled-components";

const HeaderDivBox = styled.div`
  display: flex;
  border-bottom: 1px solid orange;
  /* background-color: orange; */
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: navy;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
`;

const MenuItem = styled.p`
  padding: 0 10px 0;
`;

function Header(props) {
  return (
    <HeaderDivBox>
      <Title>
        <Icon />
        Hyeok Portfolio
      </Title>
      <MenuDiv>
        <Menu>
          <MenuItem>About Me</MenuItem>
          <MenuItem>|</MenuItem>
          <MenuItem>Projects</MenuItem>
        </Menu>
      </MenuDiv>
    </HeaderDivBox>
  );
}

export default Header;
