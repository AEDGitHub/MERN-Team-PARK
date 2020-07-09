import React from 'react'
import UserProfileContainer from '../user_profile/user_profile_container';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundColor: "pink" }}>
                MAIN
                <UserProfileContainer />
            </div>
        )
    }
}

export default Main;