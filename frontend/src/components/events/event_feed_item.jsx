import React from 'react';

class EventFeedItem extends React.Component {

    render() {
        const { event } = this.props

        return (
            <li className="event-list-element" >
                <a href="#">
                    {event.name}
                </a>
            </li>
        )
    }

}

export default EventFeedItem;