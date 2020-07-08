import React from 'react';

import InterestCreateFormContainer from "./interest_create_form_container"

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // debugger
        this.props.fetchUser();
        // debugger
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null
        // debugger

        return (
            <div style={{ backgroundColor: "lightyellow" }}>
                I am the user profile component
                <br/>
                {currentUser.firstName}
                <br/>
                {currentUser.lastName}
                <br/>
                {currentUser.email}
                <br/>
                <InterestCreateFormContainer />
            </div>
        )
    }
}

export default UserProfile;