import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItemContainer from "./interest_feed_item_container";
import M from 'materialize-css';

class InterestFeed extends React.Component {

    componentDidMount() {
        const options = {
            inDuration: 300,
            outDuration: 250,
            exitDelay: 0,
            enterDelay: 250,
            transitionMovement: 10,
            position: "bottom",
            margin: 5
        };
        M.Tooltip.init(this.Tooltip5, options)
        M.Tooltip.init(this.Tooltip9, options)
    }

    componentDidUpdate(prevProps) {

        if (prevProps.interests.length !== this.props.interests.length) {
            const options = {
                inDuration: 300,
                outDuration: 250,
                exitDelay: 0,
                enterDelay: 250,
                transitionMovement: 10,
                position: "bottom",
                margin: 5
            };
            M.Tooltip.init(this.Tooltip5, options)
            M.Tooltip.init(this.Tooltip9, options)
        }
    }

    render() {
        const addInterestsToolTip = (
            <i
                ref={Tooltip => { this.Tooltip5 = Tooltip; }}
                data-tooltip={`Add your favorite interests. You can add maximum of 3 interests and later you can create events based on them.`}
                className="tiny material-icons my-interests-tooltip"
            >
                info_outline
            </i>
        )

        const myInterestsToolTip = (
            <i
                ref={Tooltip => { this.Tooltip9 = Tooltip; }}
                data-tooltip={`This is your interest list. Each user can have a maximum of 3 interests. The events are created based on the user's interests.`}
                className="tiny material-icons my-interests-tooltip"
            >
                info_outline
            </i>
        )

        if (this.props.interests.length === 0 && !this.props.parentContainer) {
            return <div className="center">You haven't added any interests yet!{addInterestsToolTip}</div>
        };

        const interests = this.props.interests.map(interest => {
                return <InterestFeedItemContainer 
                    key={interest._id}
                    interest={interest}
                    currentUserId={this.props.currentUserId}
                    followInterest={this.props.followInterest}
                    unfollowInterest={this.props.unfollowInterest}
                    deleteInterest={this.props.deleteInterest}
                    parentContainer={this.props.parentContainer}
                        />
        })
        
        let interestTitle = null;
        if (this.props.interests.length > 0 && this.props.parentContainer !== "group") {
            interestTitle = 
            <h4 className="component-header">
                My Interests
                {myInterestsToolTip}
                {/* <i 
                    ref={Tooltip => { this.Tooltip9 = Tooltip; }} 
                    data-tooltip={`Each user can add maximum 3 interests.`} 
                    className="tiny material-icons my-interests-tooltip"
                >
                    info_outline
                </i> */}
            </h4> 
        } else if (this.props.interests.length > 0 && this.props.parentContainer === "group") {
            interestTitle = 
            <h4 className="component-header">
                Group Interests
            </h4>
        }

        return (
            <div>
                {interestTitle}
                <ul className="row">
                    {interests}
                </ul>
            </div>
        )
    }

}

export default withRouter (InterestFeed);