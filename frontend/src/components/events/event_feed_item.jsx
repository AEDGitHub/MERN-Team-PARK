import React from 'react';

class EventFeedItem extends React.Component {

    render() {
        const { event, currentUserId } = this.props;

        const formattedEventDate = event.date.slice(0, 10);
        const formattedEventLocation = `${event.address.name}, ${event.address.address1}, ${event.address.city}, ${event.address.state} ${event.address.zipCode}`;

        const attendButton = currentUserId !== event.owner && !event.attendees.includes(currentUserId) ? (
            <button onClick={() => this.props.joinEvent(event._id)} className="btn">Attend</button>
        ) : currentUserId !== event.owner ? (
            <button onClick={() => this.props.unjoinEvent(event._id)} className="btn">I Can't Go</button>
        ) : null;
        
        const editForm = currentUserId === event.owner ? (
            <button data-target={`edit-event-form-trigger-${event._id}`} className="btn modal-trigger">Edit Event</button>
        ) : null;

        return (
            <li className="row">
                <div className="event-list-card">
                    <h3>
                        {event.name} 
                    </h3>
                    <p>
                        <i className="tiny material-icons">date_range</i> {formattedEventDate}
                    </p>
                    <p>
                        <i className="tiny material-icons">location_on</i> {formattedEventLocation}
                    </p>
                    <p>
                        {event.details}
                    </p>
                    <p>
                        <span>Group:</span> {this.props.groupName}
                    </p>
                    {/* Interest: 
                    Organizer: */}
                    <div className="event-card-cta-holder">
                        <p>
                            Remaining Spots: {event.maxCapacity - event.attendees.length}
                        </p>
                        {attendButton}
                        {editForm}
                    </div>
                </div>
            </li>
        )
    }
}

export default EventFeedItem;