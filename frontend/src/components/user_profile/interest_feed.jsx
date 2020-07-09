import React from 'react';
import { withRouter } from 'react-router-dom';
import InterestFeedItem from './interest_feed_item';

class InterestFeed extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            interests: []
        };
    }

    componentWillMount() {
        this.props.fetchInterests();
    }

    componentWillReceiveProps(newState) {
        this.setState({ interests: newState.interests });
    }

    render() {

        if (this.state.interests.length === 0) {
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
            <div style={{ backgroundColor: "purple" }}>
                INTEREST FEED
                {interests}
            </div>
        )
    }

}

export default withRouter (InterestFeed);