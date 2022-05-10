import React from "react";
import { Link } from "react-router-dom";
import EventCarousel from "../components/EventCard/EventCarousel";
import HeroCarousel from "../components/UserCard/HeroCarousel";
import HostCarousel from "../components/UserCard/HostCarousel";
import "./HomePage.css";

function HomePage() {

    return (
        <div className="home-page">

            <div className="cover">
                <img src="https://res.cloudinary.com/dikrdv4qy/image/upload/v1606439814/Background_bdvap8.png" alt=""></img>
                <div class="cover-text">Deep Tech Heroes</div>
            </div>

            <div className="section1">
                <h1>Our mission</h1>
                <p>Deep Tech should start and continue to be a diverse and inclusive community. </p>
                <p>We believe that diversity of culture, gender, race, ethnicity, religious or spiritual beliefs, sexual orientation and abilities are integral to getting the best out of people and technology. </p>
                <p>We want hosts that hold meet-ups, learnings, meetings, courses, accelerators and conferences that cater to all things Deep Tech and all people Deep Tech. Because no one should be left out. </p>
                <p>We have created a place where heroes can find event hosts that align with their values and ideals. We want to grow a thriving, welcoming, thoughtful and creative environment where you can be yourself. </p>
                <p>Join us. Everybody’s welcome.</p>
            </div>

            <div className="eventCarousel">
                <h2>Upcoming Events</h2>
                <EventCarousel />
            </div>

            <div className="heroCarousel">
                <h2>Meet the Heros</h2>
                <HeroCarousel />
            </div>

            <div className="section2">
                <div className="hero">
                    <h2>Are you a Hero?</h2>
                    <Link to="/"><img className= "Hero-img" src="https://res.cloudinary.com/flifree/image/upload/v1605350477/Deep%20Tech%20Heroes/DTH_12_qg3kc9.png" alt=""></img></Link>

                    <p>Are you excited about the future with AI or hoping to build the next great thing in robotics? 
                        Are you confident showing those who are new the ropes of your particular expertise?
                        Then become a Hero and help create and mould the next generation in deep tech!
                        Simply sign up and have a look around and see what events you would be able to bring value to!
                    </p>

                    <Link to='/becomehero'><button type="button">Become a HERO</button></Link>
                </div>

                <div className="host">
                    <h2>Register an event!</h2>
                    <Link to="/"><img className= "Host-img" src="https://res.cloudinary.com/flifree/image/upload/v1605350477/Deep%20Tech%20Heroes/DTH_7_h40rzg.png" alt=""></img></Link>

                    <p>Big event coming up? Little one? In between? It doesn't matter what size or topic we have heroes that will suit!  
                        Register as a host then advertise your event and see the available Heroes. Then sit back and wait for the like minded Heroes to apply or you can search the Heroes and reach 
                        out if you find someone who is the perfect fit!

                    </p>

                    <Link to='/newevent'><button type="button">Register an EVENT</button></Link>
                </div>
            </div>

            <div className="hostCarousel">
                <h2>Current Event Hosts</h2>
                <HostCarousel />
            </div>
            
            <div className="partners-name">
                <h2>Our Partners</h2>
                <div className="partners-logos">
                    <div className="partners-logos-img1">
                        <Link to="/"><img src="data:image/png;base64,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" alt="" ></img></Link>
                    </div>
                    <div className="partners-logos-img2">
                        <Link to="/"><img src="https://advance.qld.gov.au/sites/all/themes/advancedqld/img/share2.png" alt=""></img></Link>
                    </div>
                    <div className="partners-logos-img3">
                        <Link to="/"><img src="https://www.stemwomen.org.au/sites/default/files/2019-02/science-and-tech-logo.png" alt=""></img></Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage;