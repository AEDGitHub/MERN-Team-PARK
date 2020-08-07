import React from "react";
import { Route, Switch } from 'react-router-dom';
import UserProfileContainer from "../user_profile/user_profile_container";
import GroupIndexContainer from "../groups/group_index_container";
import EventCreateFormContainer from "../events/event_create_form_container";
import EventFeedContainer from "../events/event_feed_container";
import M from "materialize-css";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
    // const featureDiscovery = document.getElementById('feature-discovery');
    // debugger
    // const instancesTap = M.TapTarget.init(featureDiscovery);
    // instancesTap.open()
  }

  featureDiscoveryShow() {
    const featureDiscovery = document.getElementById('feature-discovery');
    const featDicsTap = M.TapTarget.init(featureDiscovery);
    debugger
    if (!featDicsTap.isOpen) {
      featDicsTap.open()
    } else {
      featDicsTap.close()
    }
  }

  render() {

    // if (!this.props.currentUser) return null

    const createEventForm = this.props.currentUser && this.props.currentUser.interests.length > 0 && 
    this.props.currentUserGroups.length > 0 ? (
      <>
        <EventCreateFormContainer userInterests={this.props.currentUser.interests}/>
      </>
    ) : null

    return (
      <div className="main-container">

        <div className="main-left-container">
          <UserProfileContainer />
        </div>

        <div className="main-right-container">
          <Switch>
            <Route exact path="/main" component={GroupIndexContainer}/>
            {this.props.currentUserGroups.length > 0 ? <Route exact path="/main/events" component={EventFeedContainer} /> : null}
          </Switch>

          <div className="fixed-action-btn direction-top active feature-discovery-trigger" >
            <a onClick={this.featureDiscoveryShow} id="menu" className="waves-effect waves-light btn-large btn-floating" ><i className="material-icons">help_outline</i></a>
          </div>

            <div id="feature-discovery" className="tap-target" data-target="menu">
              <div className="tap-target-content">
                <h5>Title</h5>
                <p>A bunch of text</p>
              </div>
            </div>

        </div>

        {createEventForm}
        
      </div>
    );
  }
}

export default Main;
