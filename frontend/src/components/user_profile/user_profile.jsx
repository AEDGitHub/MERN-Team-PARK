import React from 'react';
import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeedContainer from "./interest_feed_container";
import EditUserFormContainer from "./edit_user_form_container";
import M from "materialize-css";

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
            .then(() => {
                const options = {
                    inDuration: 250,
                    outDuration: 250,
                    opacity: 0.5,
                    dismissible: true,
                    startingTop: "4%",
                    endingTop: "10%"
                };
                M.Modal.init(this.Modal, options);
            })

    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null

        const profilePicture = (currentUser.img ? null : (
            <div className="profile-picture">
                <i className="material-icons">account_circle</i>
            </div>
        ))

        return (
            <div >

                <div className="user-profile-holder">
                    {profilePicture}
                    
                    <h4 className="center">
                        {currentUser.firstName} {currentUser.lastName}
                    </h4>

                    <h5 className="center">{currentUser.email}</h5>
                    <button className="btn-flat modal-trigger" data-target="user-edit">Edit my account details</button>
                </div>
                <div className="modal" id="user-edit" ref={Modal => { this.Modal = Modal; }}>
                    <EditUserFormContainer currentUser={currentUser}/>
                </div>
                
                <InterestFeedContainer interests={currentUser.interests}/>
 
                {currentUser.interests.length < 3 ? <InterestCreateFormContainer /> : null}

            </div>
        )
    }
}

export default UserProfile;