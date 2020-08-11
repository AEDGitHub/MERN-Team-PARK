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
  }

  featureDiscoveryShow() {
    const featureDiscovery = document.getElementById('feature-discovery');
    if (featureDiscovery.M_TapTarget === undefined) M.TapTarget.init(featureDiscovery)
    featureDiscovery.M_TapTarget.open()
  }

  render() {
            
    // if (!this.props.currentUser) return null

    const featureDiscovery = this.props.currentUser !== undefined && 
                             (this.props.currentUser.groups.length < 1 || 
                             this.props.currentUser.interests.length < 1) ? (
      <>
        <div className="fixed-action-btn direction-top active feature-discovery-trigger">
          <div className="feature-discovery-trigger">
            <a onClick={this.featureDiscoveryShow} id="menu" 
               className="waves-effect waves-light btn-large btn-floating" >
              <i className="material-icons">help_outline</i>
            </a>
          </div>
        </div>

        <div id="feature-discovery" className="tap-target" data-target="menu">
          <div className="tap-target-content">
            <h5>Welcome to ReBond!</h5>
            <p>To get started add interests and join or create a group.</p>
          </div>
        </div>
      </>
    ) : null;

    const createEventForm = this.props.currentUser && this.props.currentUser.interests.length > 0 && 
    this.props.currentUserGroups.length > 0 ? (
      <>
        <EventCreateFormContainer userInterests={this.props.currentUser.interests}/>
      </>
    ) : null

    const preloader = (
      <div className="preloader-wrapper big active loader">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    )

    return (
      <div className="main-container">

        <div className="main-left-container">
          <UserProfileContainer />
        </div>

        <div className="main-right-container">
          <Switch>
            <Route exact path="/main" component={GroupIndexContainer}/>
            {this.props.currentUserGroups.length > 0 ? 
            <Route exact path="/main/events" component={EventFeedContainer} /> : null}
          </Switch>

          {featureDiscovery}

        </div>

        {createEventForm}

        {!this.props.currentUser ? preloader : null}
        
      </div>
    );
  }
}

export default Main;
