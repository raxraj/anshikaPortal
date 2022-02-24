import React, { Component } from 'react';
import { Link } from '@reach/router'
import './home.css'
import logo from '../paytm.png'
import connection from '../connection.svg'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <nav>
                        <div className="branding">
                            <img src={logo} alt="" height='50px' />
                        </div>
                        <div className="navbar">
                            <ul className='nav-list'>
                                <li className='nav-link'>
                                    <Link className='normal-nav' to='/login'>
                                        Login
                                    </Link>
                                </li>
                                <li className='nav-link'>
                                    <Link to='/register' className='nav-btn'>
                                        <span className="btn btn-primary">
                                            Register
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="hero-section">
                        <div className="hero">
                            <div className="display-1">
                                AdTech
                                <br />
                                Cloud Developers Community
                                <br />
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={connection} height="350px" alt="" />
                        </div>
                    </div>
                </div>
                <div className="section-1 quick-create">
                    Developed By DevOps Team
                </div>
            </div>
        );
    }
}

export default Home;
