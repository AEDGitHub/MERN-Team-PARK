import React from "react";
import { Route, Switch } from 'react-router-dom';
import UserProfileContainer from "../user_profile/user_profile_container";
import GroupIndexContainer from "../groups/group_index_container";
import EventCreateFormContainer from "../events/event_create_form_container";
import EventFeedContainer from "../events/event_feed_container";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {

    if (!this.props.currentUser) return null

    const createEventForm = this.props.currentUser.interests.length > 0 && 
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
        </div>

        {createEventForm}
        
      </div>
    );
  }
}

export default Main;
