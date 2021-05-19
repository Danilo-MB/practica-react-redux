import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: yellow;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2 rem;
position: sticky;
top: 0;
z-index: 999;
`
export const HeaderLink = styled(Link)`
color: red;
font-size: 0.8 rem;
justify-content: left;
cursos: pointer;
`