import React from "react";
import InterestFeedContainer from "../user_profile/interest_feed_container";

class GroupShow extends React.Component {

    render() {
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

              <InterestFeedContainer interests={this.props.interests} parentContainer="group" />
            </div>
        )
    }
}

export default GroupShow;