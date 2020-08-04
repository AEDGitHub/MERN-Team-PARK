import React from 'react';
import EventEditFormContainer from "./event_edit_form_container";

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

        const { event, currentUserId } = this.props;
        const formattedEventDate = event.date.slice(0, 10);
        const formattedEventLocation = `${event.address.name}, ${event.address.address1}, ${event.address.city}, ${event.address.state} ${event.address.zipCode}`;

        const attendButton = currentUserId !== event.owner && !event.attendees.includes(currentUserId) ? (
            <button onClick={() => this.props.joinEvent(event._id)}>I'm Attending</button>
        ) : currentUserId !== event.owner ? (
            <button onClick={() => this.props.unjoinEvent(event._id)}>I Can't Attend</button>
        ) : null;
        
        const editForm = currentUserId === event.owner ? (
            <EventEditFormContainer event={event} />
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