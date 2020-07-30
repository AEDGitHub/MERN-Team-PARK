import React from "react";
import UserProfileContainer from "../user_profile/user_profile_container";
import GroupIndexContainer from "../groups/group_index_container";
import EventCreateFormContainer from "../events/event_create_form_container";
import M from "materialize-css";

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchUser()
      .then(() => {
        this.attachModalHandles();
      })
  }

  attachModalHandles() {
    const options4 = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "20%"
    };
    M.Modal.init(this.Modal6, options4);
  }

  render() {

    debugger

    if (!this.props.currentUser) return null
    // if (!this.props.currentUserGroups.length < 1) return null
    if (!this.props.currentUserGroups) return null


    debugger

    return (
      <div className="main-container">
        <div className="main-left-container">
          <UserProfileContainer />
        </div>

        <div className="main-right-container">
          <GroupIndexContainer />
        </div>

        <button className="interest-owner-action modal-trigger" data-target="create-event-form-trigger">
          <i className="material-icons">event</i>
        </button>

        <div className="modal" id="create-event-form-trigger"
          ref={Modal6 => { this.Modal6 = Modal6; }}>
          <EventCreateFormContainer userGroups={this.props.currentUserGroups} userInterests={this.props.currentUser.interests} />
        </div>

      </div>
    );
  }
}

export default Main;
