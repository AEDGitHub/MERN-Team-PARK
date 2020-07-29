import React from "react";
import UserProfileContainer from "../user_profile/user_profile_container";
import GroupIndexContainer from "../groups/group_index_container";

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="main-left-container">
          <UserProfileContainer />
        </div>

        <div className="main-right-container">
          <GroupIndexContainer />
        </div>
      </div>
    );
  }
}

export default Main;
