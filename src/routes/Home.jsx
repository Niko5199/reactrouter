import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <StyledHeader>
        <StyledA href="#">Bienvenido</StyledA>
        <div>
          <StyledNav>
            <li>
              <StyledA href="#">Incio</StyledA>
            </li>
            <li>
              <StyledA href="#">Nosotros</StyledA>
            </li>
            <li>
              <StyledA href="#">Proyectos</StyledA>
            </li>
            <li>
              <StyledA href="#">Contacto</StyledA>
            </li>
          </StyledNav>
        </div>
      </StyledHeader>
      <Outlet />
    </div>
  );
};

export default Home;

// * Styles components
const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  max-height: 40px;
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  align-content: center;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
  gap: 35px;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: #333;
`;
