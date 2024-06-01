import React from 'react';
import './News.css';

function News() {
    return (
        <div className='news-container'>
            <h1 className='news-title'>Updates for You</h1>
            <div className='news-table'>
                <div className='news-row'>
                    <div className='news-cell'>
                        <h2 className='news-subtitle'><b>Competitions</b></h2><br />
                        <div className='news-event news-competition-event'>
                            <p className='news-event-title'>Annual Debate Championship</p>
                            <p className='news-event-description'><i>Speak up, stand out, and win!</i></p>
                        </div>
                        <div className='news-event news-competition-event'>
                            <p className='news-event-title'>Innovation and Startup Pitch Fest</p>
                            <p className='news-event-description'><i>Pitch your groundbreaking ideas!</i></p>
                        </div>
                        <div className='news-event news-competition-event'>
                            <p className='news-event-title'>Intercollegiate Sports Tournament</p>
                            <p className='news-event-description'><i>Compete, conquer, and celebrate victory!</i></p>
                        </div>
                        <div className='news-event news-competition-event'>
                            <p className='news-event-title'>Cultural Fest Talent Show</p>
                            <p className='news-event-description'><i>Showcase your unique talents!</i></p>
                        </div>
                        <div className='news-event news-competition-event'>
                            <p className='news-event-title'>Coding Hackathon</p>
                            <p className='news-event-description'><i>Code, create, and conquer challenges!</i></p>
                        </div>
                    </div>
                    <div className='news-cell'>
                        <h2 className='news-subtitle'><b>Online Quiz</b></h2><br />
                        <div className='news-event news-quiz-event'>
                            <p className='news-event-title'>The Ultimate General Knowledge Quiz</p>
                            <p className='news-event-description'><i>Test your all-around trivia prowess!</i></p>
                        </div>
                        <div className='news-event news-quiz-event'>
                            <p className='news-event-title'>History Buff Challenge</p>
                            <p className='news-event-description'><i>Explore the past, ace the test!</i></p>
                        </div>
                        <div className='news-event news-quiz-event'>
                            <p className='news-event-title'>Geography Genius Quiz</p>
                            <p className='news-event-description'><i>How well do you know the world?</i></p>
                        </div>
                        <div className='news-event news-quiz-event'>
                            <p className='news-event-title'>Science Whiz Quiz</p>
                            <p className='news-event-description'><i>Discover the wonders of science!</i></p>
                        </div>
                        <div className='news-event news-quiz-event'>
                            <p className='news-event-title'>Literary Legends Quiz</p>
                            <p className='news-event-description'><i>Dive into the world of books!</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
