import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItem from './interest_feed_item';
import M from "materialize-css";

class InterestFeed extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     interests: this.props.interests
        // };
    }

    render() {
        if (this.props.interests.length === 0) {
            return <div className="center">You haven't added any interests yet!</div>
        };

        const interests = this.props.interests.map(interest => {
                return <InterestFeedItem 
                    key={interest._id}
                    interest={interest}
                    currentUserId={this.props.currentUserId}
                    followInterest={this.props.followInterest}
                    parentContainer={this.props.parentContainer}
                        />
        })

        return (
            <ul className="row">
                {interests}
            </ul>
        )
    }

}

export default withRouter (InterestFeed);