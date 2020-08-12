import React from "react";

class Splash extends React.Component {
  render() {
    return (
      <>
        <div className="splash-page">
          <img
            //   className="responsive-img"
            src="../../../images/splash_background_2.jpg"
            alt="splash-background"
          /> 
          {/* <div className="splash-image"></div> */}
        </div>
        <div className="splash-main-text">
          <h2>Add interests. Join groups. Attend events.</h2>
          <p>Sign up for the most innovative meetup app today for free.</p>
        </div>
      </>
    );
  }
}

export default Splash;
