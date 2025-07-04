import React from 'react';
import '../style/Home.css'; // Assuming you have some CSS for styling
import "../style/Publication.css"

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className='publication'>Welcome to My Portfolio!</h1>
                <img src="pp2.jpg" alt="ProfilePic" className='picture'/>
                <h2>Hi, I'm Daron Weekley</h2>
            </header>
            <section className="introduction">
                <p>
                    Being a recent graduate of the M.S. in Computer Science program through Marshall University, 
                    I am passionate about using my skills in computer science and biology to solve real-world problems.
                </p>
                <p>
                    Explore my portfolio to learn more about my educational background, research, 
                    professional experience, and the technical skills I bring to the table.
                </p>
                <p>
                    Also, here is a <a href="https://github.com/dmweekley99/" target="_blank" rel="noopener noreferrer">link to my GitHub</a> so you can view my projects.
                </p>
                
            </section>
        </div>
    );
}

export default Home;
