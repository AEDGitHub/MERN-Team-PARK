import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div>

                <div className="about-general-container">
                    <h3 className="about-general-title">What is ReBond?</h3>
                    <p>
                        In the shadow of COVID-19's influence, more groups of 
                        individuals are forming on a strictly virtual basis than 
                        ever before. Acting under the assumption that the virus 
                        will eventually loosen its grip on humanity's collective 
                        behavior, these groups may eventually wish to meet in a 
                        physical location. Although some of these meetings will 
                        occur organically, it may be difficult for some to broach 
                        the subject of an in-person interaction. After all, how 
                        does one ask to 'hang out' with a person they've known 
                        for months, but only through a screen? Is that weird?
                    </p>
                    <p>
                        Team PARK seeks to solve this initial hesitance, by 
                        developing a lightweight app to reduce the psychological 
                        friction of such meetings occurring (once the virus subsides, 
                        of course.) The app is not designed to supplant any existing 
                        method of social media, but rather to supplement them during 
                        a time of nonstandard human interaction: it's a meet-up app 
                        for people who already know each other well, yet have never 
                        breathed the same air.
                    </p>
                    <p>
                        The app works as follows: upon signing up for a new account, 
                        a user may create a new group or join an existing one. In so 
                        doing, they will receive a key that can be sent to their 
                        digital compatriots in whatever fashion they choose (email, 
                        work-management app, social media &c.) Members of the group, 
                        whether originator or invitee, may select up to three activities 
                        from a few broad categories that they would like to share with 
                        other members of the group, which will populate the group's 
                        interest index column, allowing other group members to subscribe 
                        to a potential future event.
                    </p>
                    <p>
                        As a particular user prefers, they may indicate that they 
                        would like to host an event based on one of their interests, 
                        and select a time, place and maximum number of attendees. Other 
                        users in the group who have indicated interest in such an 
                        activity will receive an email that the event is occurring, 
                        and may respond in kind in order to reserve a spot at the event.
                    </p>
                    <p>
                        And then, everyone will meet, have fun, and maybe deepen 
                        their friendships, just like in real life. Remember that?
                    </p>
                </div>

                <div className="about-team-container">
                    <h3 className="about-team-title">Meet the Team</h3>
                    <div className="about-engineer-row">
                        <div className="about-engineer-intro">
                            <img src="../../../images/engineers/elisha.jpeg" />
                            <h5>Elisha (Park) Kutnick</h5>
                            <h6>Backend Lead</h6>
                            <p>
                                As the Backend Lead, Elisha is responsible for 
                                the overall functioning of the project and design 
                                of its schema, routes, models and controllers, 
                                ensuring sensible processing of and access to data 
                                on the backend, while correctly entering user-submitted 
                                form data into database storage. The Backend Lead 
                                has broad authority to dictate abstract data decisions, 
                                to include naming of backend routes, design of app 
                                state shape, and implementation of methods and 
                                validations as appropriate.
                            </p>
                            <div className="about-engineer-icons">
                                <a href="https://www.linkedin.com/in/elishaspark/">
                                    <img src="../../../images/icons/linkedin-icon.png" />
                                </a>
                                <a href="https://github.com/ElishaPark">
                                    <img src="../../../images/icons/github-icon.png" />
                                </a>
                                <a href="https://angel.co/u/elisha-kutnick">
                                    <img src="../../../images/icons/angellist-icon.png" />
                                </a>
                            </div>
                        </div>
                        <div className="about-engineer-intro">
                            <img src="../../../images/engineers/gabor.jpeg" />
                            <h5>Gabor Kurucz</h5>
                            <h6>Frontend Lead</h6>
                            <p>
                                As the Frontend Lead, Gabor is responsible for 
                                the overall presentation of the project, to include 
                                styling, component structure and function, and ensuring 
                                data is accurately retrieved from and submitted to the 
                                backend. The Frontend Lead has broad authority to 
                                dictate overall design decisions, to include user 
                                interface/experience, naming of frontend routes, 
                                component hierarchy, container design, reducer logic, 
                                and action formulations.
                            </p>
                            <div className="about-engineer-icons">
                                <a href="https://www.linkedin.com/in/kurucz-gabor/">
                                    <img src="../../../images/icons/linkedin-icon.png" />
                                </a>
                                <a href="https://github.com/kuruczgabor">
                                    <img src="../../../images/icons/github-icon.png" />
                                </a>
                                <a href="https://angel.co/u/gaborkurucz">
                                    <img src="../../../images/icons/angellist-icon.png" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="about-engineer-row">
                        <div className="about-engineer-intro">
                            <img src="../../../images/engineers/ben.jpeg" />
                            <h5>Benjamin Rose</h5>
                            <h6>Chief Deputy of Operations</h6>
                            <p>
                                As the Deputy Ops, Ben is responsible for 
                                coordinating data flows unhindered between the 
                                backend and the frontend, as well as communicating 
                                emergent problems requiring immediate decisions to 
                                the Project Director. The Deputy Ops will also aid 
                                in assisting with research for and facilitating 
                                communication between the frontend and backend leads, 
                                as appropriate, and attempt to remedy conflicts, 
                                merge and otherwise, before they arise.
                            </p>
                            <div className="about-engineer-icons">
                                <a href="https://www.linkedin.com/in/benjamin-rose-483549124/">
                                    <img src="../../../images/icons/linkedin-icon.png" />
                                </a>
                                <a href="https://github.com/benrose207">
                                    <img src="../../../images/icons/github-icon.png" />
                                </a>
                                <a href="https://angel.co/u/benjamin-rose-2">
                                    <img src="../../../images/icons/angellist-icon.png" />
                                </a>
                            </div>
                        </div>
                        <div className="about-engineer-intro">
                            <img src="../../../images/engineers/eric.jpeg" />
                            <h5>Eric Arndt</h5>
                            <h6>Project Director</h6>
                            <p>
                                As the Project Director, Eric is responsible 
                                for the overall management and support of the team, 
                                to include prioritizing tasks for execution in task 
                                management software, allocating human resources to 
                                blockers as they arise, reviewing submitted pull 
                                requests and finalizing code commits to the project 
                                master branch. The Project Director will also liaise 
                                with a/A authority overseeing the student project 
                                and manage daily team standups in order to align 
                                the team's vision and ensure a successful project 
                                launch.
                            </p>
                            <div className="about-engineer-icons">
                                <a href="https://www.linkedin.com/in/eric-arndt-9850281a5/">
                                    <img src="../../../images/icons/linkedin-icon.png" />
                                </a>
                                <a href="https://github.com/AEDGitHub">
                                    <img src="../../../images/icons/github-icon.png" />
                                </a>
                                <a href="https://angel.co/u/eric-daniel-arndt">
                                    <img src="../../../images/icons/angellist-icon.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        )
    }

};

export default About;