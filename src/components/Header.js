import React from 'react';
import { Nav, HeaderLink } from './HeaderElements';

const Header = () => {

    return (
        <>
        <Nav>
            <HeaderLink to="/edit-profile">Edit Profile</HeaderLink>
        </Nav>
        <Nav>
            <HeaderLink to="/users-list">Users List</HeaderLink>
        </Nav>
        </>
    );
}

export default Header;