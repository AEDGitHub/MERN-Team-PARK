import React from 'react';
import EventFeedItemContainer from './event_feed_item_container';

class EventFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.currentUserId)
    }

    render () {

        if (!this.props.events) return null

        const ownedEvents = Object.values(this.props.events.createdEvents).map(event => {
            return <EventFeedItemContainer 
                key={event._id}
                event={event}
            />
        })

        return (
            <ul>
                {ownedEvents}
            </ul>
        )
    }

}

export default EventFeed;