import React from 'react';

class EventFeedItem extends React.Component {

    render() {
        const { event, currentUserId, currentUser } = this.props;
        
        if (!this.props.event) {
            return (
                <div className="event-list-card">
                    Add an Interest in order to create your first event, or follow other user's interests to be alerted when new events are created.
                </div>
            )
        }

        const formattedEventDate = event.date.slice(0, 10);
        const formattedEventLocation = `${event.address.name}, ${event.address.address1}, ${event.address.city}, ${event.address.state} ${event.address.zipCode}`;

        const attendButton = currentUserId !== event.owner && !event.attendees.includes(currentUserId) ? (
            <button onClick={() => this.props.joinEvent(event._id)} className="btn">I'm Attending</button>
        ) : currentUserId !== event.owner ? (
            <button onClick={() => this.props.unjoinEvent(event._id)} className="btn">I Can't Attend</button>
        ) : null;
        
        const editForm = currentUserId === event.owner ? (
            <button data-target={`edit-event-form-trigger-${event._id}`} className="btn modal-trigger">Edit Event</button>
        ) : null;

        return (
            <>
            <div className="event-list-card">
                Event name: {event.name}
                <br/>
                Event details: {event.details}
                <br/>
                Event date: {formattedEventDate}
                <br/>
                Location: {formattedEventLocation}
                <br />
                Group: {this.props.groupName}
                <br />
                Interest: 
                <br/>
                Organizer:
                <br/>
                Remaining Spots: {event.maxCapacity - event.attendees.length}
                <br />
                
                {attendButton}

            </div>
                {editForm}
            </>
        )
    }
}

export default EventFeedItem;