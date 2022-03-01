import { Component} from "react";
import './dashboard.css'
import logo from '../paytm.png'
import axios from "axios";
import { navigate, Link } from "@reach/router";
import cp1 from '../cp1.svg'


class Dashboard extends Component {

    logout() {
        localStorage.removeItem('auth_token');
        navigate('/login')
    }

    // componentDidMount() {
    //     axios.get('https://clickifybackend.herokuapp.com/dashboard/', { headers: { 'auth-token': localStorage.getItem('auth_token') } })
    //         .then(response => {
    //             if (response.data.done) {
    //                 this.setState({ urls: response.data.userData.urls, newBackPart: response.data.userData.urls.map(() => '') })
    //                 console.log(response.data.userData.urls)
    //             }
    //             else {
    //                 alert('Error Loading URLS. Try Loggin in again.')
    //                 navigate('/login')
    //             }
    //         })
    // }

    render() {
        return (
            <div>
                <div className="shadow">
                <div className="landing">
                    <nav>
                        <div className="branding">
                            <img src={logo} alt="" height='50px' />
                        </div>
                        <div className="navbar">
                            <ul className='nav-list'>
                                <li className='nav-link'>
                                    <Link className='normal-nav' to='/login'>
                                        Live Reporting
                                    </Link>
                                </li>
                                <li className='nav-link'>
                                    <Link className='normal-nav' to='/login'>
                                        Running instances
                                    </Link>
                                </li>
                                <li className='nav-link'>
                                    <Link className='normal-nav' to='/login'>
                                        Billing
                                    </Link>
                                </li>
                                <li className='nav-link'>
                                    <Link className='normal-nav' to='/login'>
                                        Insights
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="hero-section">
                        <div className="hero">
                        <div className="hero-img">
                            <img src={cp1} height="50px" alt="" />
                        </div>
                            <div className="display-1">
                                AdsTech
                                <br />
                                Cloud Developers Community
                                <br />
                            </div>
                        </div>                       
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
export default Dashboard;