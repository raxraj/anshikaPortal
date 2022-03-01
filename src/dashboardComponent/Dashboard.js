import { Component } from "react";
import './dashboard.css'
import logo from '../paytm.png'
import axios from "axios";
import { navigate, Link } from "@reach/router";
import cp1 from '../cp1.svg'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anshika: {},
            abhishek: {},
        }
    }

    componentDidMount() {
        axios.post("http://localhost:3002/dashboard/liveReporting")
            .then(response => {
                if (response.data) {
                    this.setState({ anshika: response.data.anshika, abhishek: response.data.abhishek })
                }
            })
    }

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
        ChartJS.register(ArcElement, Tooltip, Legend);
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
                                        <Link className='normal-nav active' to='/dashboard'>
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
                                <div className="display-1">
                                    AdsTech
                                    <br />
                                    Cloud Developers
                                    <br />
                                    Community
                                    <br />
                                    (Attendance: Live Reporting)
                                </div>
                            </div>
                            <div align="center">
                                {/* {this.state.anshika.presentCount} */}
                                <div className="getFlexCharts">
                                    <div className="chart1">
                                        {this.state.anshika ?
                                            (<Pie data={{
                                                labels: ["Presents", "Absents"],
                                                datasets: [{
                                                    label: 'Anshika Attendance',
                                                    data: [this.state.anshika.presentCount, this.state.anshika.absentCount],
                                                    backgroundColor: [
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 99, 132, 0.2)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 99, 132, 1)',
                                                    ]
                                                }]
                                            }} />) : ""}
                                    </div>
                                    <div className="chart2">
                                        {this.state.abhishek ?
                                            (<Pie data={{
                                                labels: ["Presents", "Absents"],
                                                datasets: [{
                                                    label: 'Abhishek Attendance',
                                                    data: [this.state.abhishek.presentCount, this.state.abhishek.absentCount],
                                                    backgroundColor: [
                                                        'rgba(54, 162, 235, 0.2)',
                                                        'rgba(255, 99, 132, 0.2)',
                                                    ],
                                                    borderColor: [
                                                        'rgba(54, 162, 235, 1)',
                                                        'rgba(255, 99, 132, 1)',
                                                    ]
                                                }]
                                            }} />) : ""}
                                    </div>
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