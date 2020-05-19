import React, { Component } from 'react';
import NavLogo from '../logo.svg';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark navwrapper px-sm-5'> 
                <Link to='/'> 
                    <img src={NavLogo} alt="" className='navbar-brand'/>
                </Link>
                <ul className='navbar-nav'>
                    <li className='nav-item ml-5'> 
                        <Link to='/' className='nav-link'> products </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <button className='btn btn-primary bg-transparent navbutton'> Cart </button>
                </Link>        
            </nav>
        )
    }
}
