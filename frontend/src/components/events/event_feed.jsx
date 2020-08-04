import React from 'react';
import EventFeedItemContainer from './event_feed_item_container';
import EventEditFormContainer from "./event_edit_form_container";
import M from 'materialize-css';

class EventFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.currentUserId)
            .then(this.attachTabHandlers())
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.attachTabHandlers();
        }
    }

    attachTabHandlers() {
        let options8 = {
            swipeable: true
        }
        M.Tabs.init(this.Tabs, options8)
    }

    render() {
        const { usersCreatedEvents, usersConfirmedEvents, usersInvitedEvents, currentUserId } = this.props;
        
        const ownedEventsTabs = usersCreatedEvents.map((event, idx) => {
            if (usersCreatedEvents.length === 0) return null;
            return (
                <li className="tab col s3" key={event._id}>
                    <a href={`#owned-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name} 
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const ownedEvents = usersCreatedEvents.map((event, idx) => {
            if (usersCreatedEvents.length === 0) return null;
            return (
                <div id={`owned-event-swipe-${idx + 1}`} className="col s12" key={event._id}>
                    <EventFeedItemContainer event={event} currentUserId={currentUserId}/>
                </div>
            )
        })

        const confirmedEventsTabs = usersConfirmedEvents.map((event, idx) => {
            if (usersConfirmedEvents.length === 0) return null;
            return (
                <li className="tab col s3" key={event._id}>
                    <a href={`#confirmed-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name}
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const confirmedEvents = usersConfirmedEvents.map((event, idx) => {
            if (usersConfirmedEvents.length === 0) return null;
            return (
                <div id={`confirmed-event-swipe-${idx + 1}`} className="col s12" key={event._id}>
                    <EventFeedItemContainer event={event} currentUserId={currentUserId}/>
                </div>
            )
        })

        const invitedEventsTabs = usersInvitedEvents.map((event, idx) => {
            if (usersInvitedEvents.length === 0) return null;
            return (
                <li className="tab col s3" key={event._id}>
                    <a href={`#invited-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name}
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const invitedEvents = usersInvitedEvents.map((event, idx) => {
            if (usersInvitedEvents.length === 0) return null;
            return (
                <div id={`invited-event-swipe-${idx + 1}`} className="col s12" key={event._id}>
                    <EventFeedItemContainer event={event} currentUserId={currentUserId}/>
                </div>
            )
        })

        return (
            <>
                <div className="event-list-holder">
                    <div className="event-list-holder-col">
                        <ul
                            ref={Tabs => {
                                this.Tabs = Tabs;
                            }}
                            id="tabs-swipe-demo"
                            className="tabs tabs-fixed-width tab-demo z-depth-1"
                        >
                            <li className="tab col s3">
                                <a href="#test-swipe-0">UPCOMING EVENTS</a>
                            </li>
                            {ownedEventsTabs}
                            {confirmedEventsTabs}
                            {invitedEventsTabs}
                        </ul>

                        <div id="test-swipe-0" className="col s12">
                            <EventFeedItemContainer />
                        </div>
                        {ownedEvents}
                        {confirmedEvents}
                        {invitedEvents}
                    </div>
                </div>
                {usersCreatedEvents.map(event => (
                    <EventEditFormContainer event={event} key={event._id}/>
                ))}
            </>
        )
    }

}

export default EventFeed;