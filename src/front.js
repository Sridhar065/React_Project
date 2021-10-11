import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './front.css';

import sec from "./image/home-page-hero-refreshed.png";
import vid from "./image/team.mp4";
import wrk from "./image/workflow.mp4";
import spot from "./image/spot.png";
import spot1 from "./image/spot1.png";
import spot2 from "./image/spot2.png";
import spot3 from "./image/spot3.png";
import sit from "./image/sitting.png";
import icon from "./image/notion.png";



import CommonHelper from './helpers/commonHelper'
const commonCall = new CommonHelper();

export default class Front extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            store: null
        }


    }


    handleChange(event) {
        var value = event.target.name;
        this.setState({
            [value]: event.target.value
        });
    }

    async login(event) {
        console.log(this.state)
        await fetch('http://localhost:8092/api/v1/employee/get-login_in', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                localStorage.setItem('login', JSON.stringify({
                    token: result.content.logindetails.token

                }))

                // token: result.content.logindetails.token
                if (result.status == 200) {
                    commonCall.setName({ emal: this.state.email })



                }
                else {
                    alert('Invalid User');
                }
            })
    }

    render() {
        return (
            <div>

                <div className="sec1">
                    <div>
                        <h1 className="hed">One workspace.<br />Every team.</h1>
                        <h3 className="hed1">We’re more than a doc. Or a table. <br />Customize Notion to work the way you do.</h3> <br/>
                        <a href="/signup"><button className="btn-lk">Try Notion free</button></a>
                    </div>
                    <div>
                        <img className="sec2" src={sec} />
                    </div>
                </div>
                <br /><br /><br /><br /><br />

                <div className="sec1">
                    <div>
                        <img className="spt" src={spot} />
                        <h3 className="hed4">Team up without   <br />the chaos</h3>
                        <h3 className="hed5">Connect your teams, projects, and  <br />docs in Notion — so you can bust <br /> silos and move as one.</h3>
                    </div>
                    <div>

                        <video className="sec3" controls autostart autoPlay src={vid} type="video/mp4" />
                    </div>
                </div>
                <br /><br /><br /><br /><br />

                <div className="sec1">
                    <div>
                        <img className="spt" src={spot1} />
                        <h3 className="hed4">Never ask “What’s the  <br />context?” again</h3>
                        <h3 className="hed5">Stale wikis aren't helpful. Neither are <br />floating docs. In Notion, your daily<br /> work and knowledge live side by side<br /> — so you never lose context.</h3>
                    </div>
                    <div>
                        <img className="sec2" src={sec} />

                    </div>

                </div>
                <br /><br /><br /><br /><br />
                <div className="sec1">
                    <div>
                        <img className="spt" src={spot2} />
                        <h3 className="hed4">Build the workflow   <br />you want</h3>
                        <h3 className="hed5">Customize Notion to make it work the  <br />way you want it to.</h3>
                        <h3 className="hed5">Just drag and drop to craft the   <br />dashboard, website, doc, or system <br />you need.</h3>
                    </div>
                    <div>
                        <video className="sec3" controls autostart autoPlay src={wrk} type="video/mp4" />
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="sec1">
                    <div>
                        <img className="spt" src={spot3} />
                        <h3 className="hed4">Benefit from a global    <br />ecosystem of creators</h3>
                        <h3 className="hed5">Get inspiration from thousands of   <br />community-made templates,  <br />integrations, and events.</h3>
                        <h3 className="hed5">You'll never want for resources or    <br />support.</h3>
                    </div>
                    <div>
                        <img src={sec} />
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <hr />
                <br /><br /><br /><br /><br />









                <br /><br /><br /><br /><br />
                <div className="sec1">
                    <div>
                    <img className="spt" src={spot1} />
                        <h3  className="hed4">We’re more than a doc. Or a table. <br />Customize Notion to work the way you do.</h3>
                        <h3 className="hed5">Connect your teams, projects, and  <br />docs in Notion — so you can bust <br /> silos and move as one.</h3>
                    </div>
                    <div>
                        <img src={sec} />
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="sec1">
                    <div>
                        <img src={sit} alt="sitting_character" />
                    </div>
                    <div>
                        <img src={icon} alt="notion-icon" />
                        <h1 >Try Notion today</h1>
                        <h3 className="hed5">Get started for free. <br />Add your whole team as your needs grow.</h3><br/>
                        <li className="lin3">
                            <Link className="btn-lk" to={'/login'}>Try Notion free</Link>
                        </li>
                    </div>
                </div>

                <br /><br /><br /><br /><br />
                <section className="footer-section123">
                    <div className="footer1">
                        <div className="footer2">
                            <ul>
                                <h2>Product</h2>
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Newsroom</li>
                                <li>Investor relations</li>
                                <li>Careers</li>
                                <li>Corprate responsibility</li>
                                <li>Godaddy store</li>
                                <li>legal</li>
                                <li>Godaddy blo</li>
                                <li>Blake's blog</li>
                            </ul>
                        </div>
                        <div className="footer2">
                            <ul>
                                <h2>Notion for</h2>
                                <li>Product</li>
                                <li>Community</li>
                                <li>Report abuse</li>
                            </ul>
                        </div>
                        <div className="footer2">
                            <ul>
                                <h2>Resources</h2>
                                <li>Webmail</li>
                                <li>Whois search</li>
                                <li>Affiliates</li>
                                <li>Redeen code</li>
                                <li>Site map</li>
                            </ul>
                        </div>
                        <div className="footer2">
                            <ul>
                                <h2>Templates</h2>
                                <li>My Templates</li>
                                <li>My renewals</li>
                                <li>Create Templates</li>
                            </ul>
                        </div>
                        <div className="footer2">
                            <ul>
                                <h2>Company</h2>
                                <li>Product catalog</li>
                                <li>Find domain</li>
                                <li>reseller programs</li>
                            </ul>
                        </div>
                    </div>
                </section>



            </div>


        );
    }
}









