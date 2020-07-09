import React from 'react'
import UserProfileContainer from '../user_profile/user_profile_container';
import GroupIndexContainer from "../groups/group_index_container";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <UserProfileContainer />
                <GroupIndexContainer />
            </div>
        )
    }
}

export default Main;