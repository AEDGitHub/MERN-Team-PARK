import React from 'react';

class EventFeedItem extends React.Component {

    render() {
        const { event } = this.props
        return (
            <li>
                {event.name}
                {event.date}
            </li>
        )
    }

}

export default EventFeedItem;