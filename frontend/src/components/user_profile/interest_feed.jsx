import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItem from './interest_feed_item';

class InterestFeed extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.interests.length === 0) {
            return <div>There are no interests choosen</div>
        };

        const interests = this.props.interests.map(interest => {
            if (interest.owner === this.props.currentUser._id) {
                return <InterestFeedItem 
                            key={interest._id} 
                            name={interest.name}
                            description={interest.description}
                            category={interest.category}  
                        />
            }
        })

        return (
            <ul className="collapsible">
                {interests}
            </ul>
        )
    }

}

export default withRouter (InterestFeed);