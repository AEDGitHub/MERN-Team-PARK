import React from 'react';
import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeedContainer from "./interest_feed_container";

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null

        return (
            <div >

                <div className="user-profile-holder">

                    <h4 className="center">
                        {currentUser.firstName} {currentUser.lastName}
                    </h4>

                    <h5 className="center">{currentUser.email}</h5>
                    
                </div>
                
                <InterestFeedContainer interests={currentUser.interests}/>
 
                {currentUser.interests.length < 3 ? <InterestCreateFormContainer /> : null}

            </div>
        )
    }
}

export default UserProfile;