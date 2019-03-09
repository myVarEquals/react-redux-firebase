import React from 'react';
import { NavLink } from 'react-router-dom';

const signedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/create' >New Post</NavLink></li>
            <li><NavLink to='/' >Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating red lighten-1'>RB</NavLink></li>
        </ul>
    );
}

export default signedInLinks;