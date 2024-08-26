import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './footer.css'
import Detail from './Detail/Detail';


import numberOfMember from '../../Database/Team/team_members_number.json'

const Footer = () => {

    const [didViewCountUp, setDidViewCountUp] = useState(false)
    function onVisibilityChange(isVisible) {
        if (isVisible) {
            setDidViewCountUp({ didViewCountUp: true });
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };


    return (
        <footer>
           <Detail/>
            <div className="second">
                <div className="second-item">
                    <h1>INFO</h1>
                    <ul>
                        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/about" onClick={scrollToTop}>About us</Link></li>
                    </ul>
                    {/* <ul>
                        <li><Link to="/galery" onClick={scrollToTop}>Gallery</Link></li>
                    </ul> */}
                    <ul>
                        <li><Link to="/team" onClick={scrollToTop}>Team</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/contact-us" onClick={scrollToTop}>Contact us</Link></li>
                    </ul>
                </div>

                <div className="second-item">
                    <h1>Contact Us</h1>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+917766937268'> Ashish Kishu: +91-7766937268</a></p>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+919064187631'> Wasim Aktar: +91-9064187631</a></p>
                    <p><i className="fa-solid fa-phone fa-customise"></i><a href='tel:+916204797625'> Bappy Bharti: +91-6204797625</a></p>
                    <p><i className="fa-solid fa-envelope fa-customise"></i> <a href='mailto:hithaldia.samarpan@gmail.com'>hithaldia.samarpan@gmail.com</a></p>
                </div>

                <div className="second-item">
                    <h1>Reach Us</h1>
                    <div className="reach-us">
                        <span >
                            <a href='https://www.facebook.com/samarpanathith' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-facebook-f fa-2x" />
                            </a>
                        </span>
                        <span style={{ marginLeft: "25px" }}>
                            <a href='https://www.instagram.com/samarpan_hit/' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-instagram fa-2x" target='_blank'></i>
                            </a>
                        </span>
                        <span style={{ marginLeft: "25px" }}>
                            <a href='https://www.linkedin.com/company/samarpanhit' target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-linkedin fa-2x" target='_blank'></i>
                            </a>
                        </span>
                    </div>
                    <p className="copyright">Copyright &copy; {new Date().getFullYear()} by Samarpan</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
