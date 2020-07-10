import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Splash extends Component {

    render() {
        return (
            <div>
                <div id="splash-background" 
                    style={{ backgroundImage: "url(" + "../../../splash_background.jpeg" + ")", 
                    height: "100vw", 
                    backgroundSize: "100%", 
                    backgroundRepeat: "no-repeat",
                    position: "relative" 
                    }}
                >
                    <div className="flow-text welcome-message">
                        Expand your network and attend events for things you love.
                    </div>

                    <div className="flow-text splash-under-message">
                        Something
                    </div>
                    
                </div>
                
                
            </div>
        )
    }

}

export default Splash;

