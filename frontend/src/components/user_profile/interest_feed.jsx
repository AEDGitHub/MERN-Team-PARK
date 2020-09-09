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
    }

    render() {
        if (this.props.interests.length === 0 && !this.props.parentContainer) {
            return <div className="center">You haven't added any interests yet!</div>
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
                <i 
                    ref={Tooltip => { this.Tooltip5 = Tooltip; }} 
                    data-tooltip={`Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah`} 
                    className="tiny material-icons my-interests-tooltip"
                >
                    info_outline
                </i>
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