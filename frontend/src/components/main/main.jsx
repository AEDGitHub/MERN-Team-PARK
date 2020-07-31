import React from "react";
import UserProfileContainer from "../user_profile/user_profile_container";
import GroupIndexContainer from "../groups/group_index_container";
import EventCreateFormContainer from "../events/event_create_form_container";
import EventFeedContainer from "../events/event_feed_container";

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {

    if (!this.props.currentUser) return null

    const createEventForm = this.props.currentUser.interests.length > 0 && 
    this.props.currentUserGroups.length > 0 ? (
      <>
        <button className="interest-owner-action modal-trigger" data-target="create-event-form-trigger">
          <i className="material-icons">event</i>
        </button>
        <EventCreateFormContainer userInterests={this.props.currentUser.interests}/>
      </>
    ) : null

    return (
      <div className="main-container">

        <div className="main-left-container">
          <UserProfileContainer />
        </div>

        <div className="main-right-container">
          <GroupIndexContainer />
        </div>

        <EventFeedContainer />

        {createEventForm}

        
      </div>
    );
  }
}

export default Main;
