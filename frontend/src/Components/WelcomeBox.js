import React from 'react';
import './WelcomeBox.css';

function WelcomeBox() {
    return (
        <div className='welcome-box'>
            <div className='text-content'>
                <p className='welcome-title'>Welcome to Our e-Library Services </p>
                <p className='welcome-message'>
                    Your Gateway to Infinite Stories and Reading Experiences<br />
                    <span className='welcome-submessage'>Discover, Borrow, Enjoy</span>
                </p>
            </div>
            <div className='image-content'>
                <img src='https://jbmsmartstart.in/wp-content/uploads/2024/02/Safety-Rules-At-School-That-Every-Child-Should-Be-Taught.jpg' alt='Welcome Illustration' className='welcome-image' />
            </div>
        </div>
    );
}

export default WelcomeBox;
