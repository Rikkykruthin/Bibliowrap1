import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>CVR College of Enginnering</p>
                        <p>Hyderabad-510501</p>
                        <p>Telangana</p>
                        <p>India</p>
                        <p><b>Email:</b>cvrlibrary@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Navigations</h1>
                        <a href='https://cvr.ac.in/home4/'>Home</a>
                        <a href='https://cvr.ac.in/home4/index.php/institute-vision-and-mission'>About us</a>
                        <a href='https://cvr.ac.in/home4/index.php/research/'>Research</a>
                        <a href='https://cvr.ac.in/home4/index.php/academics/course-outcomes'>Academics</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Name - Narasimha</p>
                        <p>Education - B.Sc Computer Science</p>
                        <p>Contact: +91 9392561779</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://x.com/?lang=en' className='social-icon'><TwitterIcon style={{ fontSize: 40, color: "rgb(0,0,0)" }} /></a>
                    <a href='https://in.linkedin.com/' className='social-icon'><LinkedInIcon style={{ fontSize: 40, color: "rgb(0,0,0)" }} /></a>
                    <a href='https://web.telegram.org/' className='social-icon'><TelegramIcon style={{ fontSize: 40, color: "rgb(0,0,0)" }} /></a>
                    <a href='https://www.instagram.com/' className='social-icon'><InstagramIcon style={{ fontSize: 40, color: "rgb(0,0,0)" }} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /></p>
            </div>
        </div>
    )
}

export default Footer