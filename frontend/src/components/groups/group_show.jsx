import React from "react";
import InterestFeedContainer from "../user_profile/interest_feed_container";
// import EventCreateFormContainer from "../events/event_create_form_container";
// import M from "materialize-css";

class GroupShow extends React.Component {

  // componentDidMount() {
  //   const options4 = {
  //     inDuration: 250,
  //     outDuration: 250,
  //     opacity: 0.5,
  //     dismissible: true,
  //     startingTop: "4%",
  //     endingTop: "20%"
  //   };
  //   M.Modal.init(this.Modal, options4);
  // }

    render() {
        const groupId = this.props.groupId;
        const sharingLink =
          this.props.currentUserId === this.props.group.owner ? (
            <div>
              <p>
                Invite other people to this group using the following link: {`https://rebond.herokuapp.com/#/signup?group=${this.props.group.slug}`}
              </p>
            </div>
          ) : null;
        return (
            <div>

              {sharingLink}

              <InterestFeedContainer interests={this.props.interests} parentContainer="group"/>

              {/* <button className="interest-owner-action modal-trigger" data-target={groupId}>
                <i className="material-icons">event</i>
              </button>

              <div className="modal" id={groupId}
                ref={groupId => { this.Modal = groupId; }}>
                <EventCreateFormContainer groupId={groupId}/>
              </div> */}

            </div>
        )
    }
}

export default GroupShow;