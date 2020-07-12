import React, { Component } from 'react';

class Splash extends Component {

    render() {
        return (
            <div
                style={{
                    backgroundImage: "url(" + "../../../splash_background.jpeg" + ")",
                    height: "100vw",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    position: "relative", 
                }}
            >
                <div className="splash-welcome-message">
                    Expand your network and attend events for things you love.
                </div>

                <div className="splash-under-message">
                    "There are no brakes on the MERN train"
                    <br/>
                        Eric Arndt
                </div>
                
            </div>         
        )
    }

}

export default Splash;

