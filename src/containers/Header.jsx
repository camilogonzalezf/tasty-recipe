import React from 'react';
import Logo from '@components/Logo';
import MenuNav from '@components/MenuNav';
import '@styles/Header.scss';
const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <MenuNav />
        </div>
    );
}

export default Header;