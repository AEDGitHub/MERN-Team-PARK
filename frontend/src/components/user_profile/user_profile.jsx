import React from 'react';

import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeedContainer from "./interest_feed_container";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchUser();
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null

        return (
            <div className="col s12 l6">
                USER PROFILE
                <br/>
                {currentUser.firstName}
                <br/>
                {currentUser.lastName}
                <br/>
                {currentUser.email}
                <br/>
                <InterestFeedContainer/>
                <br/>
                <InterestCreateFormContainer />
            </div>
        )
    }
}

export default UserProfile;