import React from 'react';

export default function Header() {
    return (
        <>

            <ul className='header'>
                <li><a href='/'>Home</a></li>
                <li><a href='/aboutus'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </>
    );
}
