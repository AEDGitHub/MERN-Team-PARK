import React from 'react';
import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeedContainer from "./interest_feed_container";
import EditUserFormContainer from "./edit_user_form_container";
import M from "materialize-css";
import CreateGroupForm from '../groups/create_group_form';
import JoinGroupForm from '../groups/join_group_form';
import InterestCreateForm from '../user_profile/interest_create_form';

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
            .then(() => {
                // Set up listeners for Materialize modal
                const options = {
                    inDuration: 250,
                    outDuration: 250,
                    opacity: 0.5,
                    dismissible: true,
                    startingTop: "4%",
                    endingTop: "10%"
                };
                M.Modal.init(this.Modal1, options);
                M.Modal.init(this.Modal2, options);
                M.Modal.init(this.Modal3, options);
                M.Modal.init(this.Modal4, options);
            });

    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) return null

        const profilePicture = (currentUser.img ? (
            <div className="profile-picture">
                <img
                    src={currentUser.img} alt="user-profile"
                    className="responsive-img"
                />
            </div>
        ) : (
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
                    <button className="btn-flat modal-trigger" data-target="create-group">Create group</button>
                    <button className="btn-flat modal-trigger" data-target="join-group">Join group</button>

                </div>

                <div className="modal" id="user-edit" ref={Modal1 => { this.Modal1 = Modal1; }}>
                    <EditUserFormContainer currentUser={currentUser}/>
                </div>

                <div className="modal" id="create-group" ref={Modal2 => { this.Modal2 = Modal2; }}>
                    <CreateGroupForm />
                </div>

                <div className="modal" id="join-group" ref={Modal3 => { this.Modal3 = Modal3; }}>
                    <JoinGroupForm />
                </div>

                <div className="modal" id="create-interest" ref={Modal4 => { this.Modal4 = Modal4; }}>
                    <InterestCreateForm />
                </div>
                
                <InterestFeedContainer interests={currentUser.interests}/>
 
                {currentUser.interests.length < 3 ? <InterestCreateFormContainer /> : null}

            </div>
        )
    }
}

export default UserProfile;