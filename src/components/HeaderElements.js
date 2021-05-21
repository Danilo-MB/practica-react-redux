import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: black;
    height: 40px;
    font-size: 1.2 rem;
    position: sticky;
    top: 0;
    z-index: 999;
`
export const HeaderLink = styled(Link)`
    color: yellow;
    font-size: 8px;
    cursos: pointer;
    text-decoration:none;
    padding: 10px;
`