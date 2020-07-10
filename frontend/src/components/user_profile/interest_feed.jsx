import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItem from './interest_feed_item';

class InterestFeed extends React.Component {

    render() {
        if (this.props.interests.length === 0) {
            return <div>You haven't added any interests yet!</div>
        };

        const interests = this.props.interests.map(interest => {
                return <InterestFeedItem 
                            key={interest._id} 
                            name={interest.name}
                            description={interest.description}
                            category={interest.category}  
                        />
        })

        return (
            <ul className="collapsible">
                {interests}
            </ul>
        )
    }

}

export default withRouter (InterestFeed);