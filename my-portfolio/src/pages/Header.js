import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderDivBox = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  /* background-color: orange; */
  /* border-bottom: 1px solid orange; */
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffcc66;
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
  cursor: pointer;
`;

function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderDivBox>
        <Title
          onClick={() => {
            navigate("/");
          }}
        >
          <Icon />
          Hyeok Portfolio
        </Title>
        <MenuDiv>
          <Menu>
            <MenuItem onClick={() => navigate("/reseme")}>Reseme</MenuItem>
            <MenuItem>|</MenuItem>
            <MenuItem onClick={() => navigate("/projects")}>Projects</MenuItem>
            <MenuItem>|</MenuItem>
            <MenuItem onClick={() => navigate("/aboutMe")}>About Me</MenuItem>
          </Menu>
        </MenuDiv>
      </HeaderDivBox>
      <Outlet />
    </>
  );
}

export default Header;
