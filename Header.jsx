import React from 'react';
import './src/Header.css';


const Header = () => {
    return (
        <header>
            <h1> &#9813; Mathi S </h1>
            <nav>
                <a href="#about" > &#9825; About</a>
                <a href="#projects"> &#9997; Projects</a>
                <a href="#contact"> &#9743; Contact</a>
            </nav>
        </header>
    );
}

export default Header;