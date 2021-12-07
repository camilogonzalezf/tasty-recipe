import React from 'react';
import logo from '@logos/logo.png'
import '@styles/Logo.scss';

const Logo = () => {

    return (
        <div className="logo">
            <div className="logo-bar"></div>
            <p className="logo-p">¡ Simple but Delicious ! </p>
            <img src={logo} alt="logo" className="logo-logo" />
        </div>
    );
}

export default Logo;