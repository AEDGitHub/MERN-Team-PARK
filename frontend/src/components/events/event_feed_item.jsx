import React from 'react';

class EventFeedItem extends React.Component {

    render() {

        if (!this.props.event) {
            return (
                <div className="event-list-card">
                    Swipe right to see upcoming events or click the button to create new events
                    <button className="interest-owner-action modal-trigger" data-target="create-event-form-trigger">
                        <i className="material-icons">event</i>
                    </button>
                </div>
            )
        }

        const { event } = this.props
        const formattedEventDate = event.date.slice(0,10)
        const formattedEventLocation = `${event.address.name}, ${event.address.address1}, ${event.address.city}, ${event.address.state} ${event.address.zipCode}`
        
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