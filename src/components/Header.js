import React from 'react';
import { Nav, HeaderLink } from './HeaderElements';

const Header = () => {

    return (
        <>
        <Nav>
            <HeaderLink to="/">Profile</HeaderLink>
            <HeaderLink to="/edit-profile">Edit Profile</HeaderLink>
            <HeaderLink to="/users-list">User History</HeaderLink>
        </Nav>
        </>
    );
}

export default Header;