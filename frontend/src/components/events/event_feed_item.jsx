import React from 'react';

class EventFeedItem extends React.Component {

    render() {
        const { event } = this.props
        const formattedEventDate = event.date.slice(0,10)
        const formattedEventLocation = `${event.address.name}, ${event.address.address1}, ${event.address.city}, `

        return (
            <div className="event-list-card">
                Event name: {event.name}
                <br/>
                Event details: {event.details}
                <br/>
                Event date: {formattedEventDate}
                <br/>
                Location: {formattedEventLocation}
                <br />
                Group:
                <br />
                Interest: 
                <br/>
                Organizer:
                <br/>
                Attendees:
                <br/>
                Invitees:
                <br/>

            </div>
        )
    }

}

export default EventFeedItem;