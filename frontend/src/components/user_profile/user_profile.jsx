import React from 'react';
import InterestCreateFormContainer from "./interest_create_form_container";
import InterestFeedContainer from "./interest_feed_container";
import EditUserFormContainer from "./edit_user_form_container";
import CreateGroupFormContainer from '../groups/create_group_form_container';
import JoinGroupFormContainer from '../groups/join_group_form_container';
import M from "materialize-css";

class UserProfile extends React.Component {

    componentDidMount() {
        this.props.fetchUser()
            .then(() => {
                // Set up listeners for Materialize modal
                const options1 = {
                    inDuration: 250,
                    outDuration: 250,
                    opacity: 0.5,
                    dismissible: true,
                    startingTop: "4%",
                    endingTop: "10%"
                };
                M.Modal.init(this.Modal1, options1);
                M.Modal.init(this.Modal2, options1);
                M.Modal.init(this.Modal3, options1);
                M.Modal.init(this.Modal4, options1);

                const options2 = {
                    inDuration: 300,
                    outDuration: 250,
                    exitDelay: 0,
                    enterDelay: 250,
                    transitionMovement: 10,
                    position: "bottom",
                    margin: 5
                };
                M.Tooltip.init(this.Tooltip1, options2)
                M.Tooltip.init(this.Tooltip2, options2)
                M.Tooltip.init(this.Tooltip3, options2)
                M.Tooltip.init(this.Tooltip4, options2)
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
                    
                    <h4 className="user-profile-name">
                        {currentUser.firstName} {currentUser.lastName}
                    </h4>

                    {/* <h5 className="center">{currentUser.email}</h5> */}

                    <div className="profile-dashboard-holder">

                        <button ref={Tooltip => {this.Tooltip1 = Tooltip;}} 
                            className="btn-flat tooltipped modal-trigger" 
                            data-tooltip="Edit Profile" 
                            data-target="user-edit">
                            <i className="large material-icons">edit</i>
                        </button>
      
                        <button ref={Tooltip => { this.Tooltip2 = Tooltip;}} 
                            className="btn-flat modal-trigger" 
                            data-tooltip="Create Group" 
                            data-target="create-group">
                            <i class="large material-icons">group</i>
                        </button>
        
                        <button ref={Tooltip => { this.Tooltip3 = Tooltip; }} 
                            className="btn-flat modal-trigger" 
                            data-tooltip="Join Group" 
                            data-target="join-group">
                            <i class="large material-icons">group_add</i>
                        </button>

                    </div>

                </div>

                <div className="modal" id="user-edit" 
                    ref={Modal1 => { this.Modal1 = Modal1; }}>
                    <EditUserFormContainer currentUser={currentUser}/>
                </div>

                <div className="modal" id="create-group" 
                    ref={Modal2 => { this.Modal2 = Modal2; }}>
                    <CreateGroupFormContainer />
                </div>

                <div className="modal" id="join-group" 
                    ref={Modal3 => { this.Modal3 = Modal3; }}>
                    <JoinGroupFormContainer />
                </div>

                <div className="modal" id="create-interest" 
                    ref={Modal4 => { this.Modal4 = Modal4; }}>
                    <InterestCreateFormContainer />
                </div>
                
                <InterestFeedContainer interests={currentUser.interests}/>

                {currentUser.interests.length < 3 ? 
                <div className="add-interest-button-holder">
                    <button ref={Tooltip => { this.Tooltip4 = Tooltip; }}
                        data-tooltip="Add Interest"
                        data-position= "right"
                        className="btn-flat tooltipped modal-trigger" 
                        data-target="create-interest">
                        <i class="material-icons">add_circle</i>
                    </button>
                </div> : null}

            </div>
        )
    }
}

export default UserProfile;