import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h1 className="about-title"><b>About BiblioWrap</b></h1>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://img.freepik.com/free-vector/children-reading-books-library_1308-30864.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716336000&semt=ais_user" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        <br /><br />
                        <h2><b>Welcome to BiblioWrap</b><br /></h2><br />
                        BiblioWrap is an innovative Library Management System designed to streamline and enhance the efficiency of library operations.
                        Our mission is to provide a comprehensive, user-friendly solution that empowers libraries to
                        manage their resources effortlessly while offering an exceptional experience for both librarians and library users.
                        <br /><br />
                        <h2><b>Our Vision</b><br /></h2><br />
                        At BiblioWrap, we envision a future where library management is seamless, efficient, and adaptable to the ever-evolving
                        needs of educational institutions and public libraries. We aim to revolutionize the way libraries operate by integrating
                        cutting-edge technology with intuitive design.<br />
                        <br />
                        We believe that librarians are the backbone of any library, and they deserve the best tools to perform their duties.
                        BiblioWrap is designed to simplify administrative tasks, reduce manual work, and provide librarians with the insights
                        they need to manage their collections and users effortlessly. With our system, librarians can spend more time engaging
                        with patrons and less time on repetitive tasks.
                        <br /><br /><br /><br />
                        <h5><i>Join us in transforming library management with BiblioWrap, where innovation meets excellence.</i></h5><br />
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About
