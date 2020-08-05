import React from 'react';
import EventFeedItemContainer from './event_feed_item_container';
import EventEditFormContainer from "./event_edit_form_container";
import M from 'materialize-css';

class EventFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.currentUser._id)
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
        const { usersCreatedEvents, usersConfirmedEvents, usersInvitedEvents, currentUser } = this.props;

        const createEventButton = (
            <button className="interest-owner-action modal-trigger" data-target="create-event-form-trigger">
                <i className="material-icons">event</i>
            </button>
        )

        const ownedEvents = usersCreatedEvents.length === 0 ? (
            <>
                {currentUser.interests.length ? (
                    <p>You currently don't have any upcoming events that you're organizing! Create a new event using the button below</p>
                ) : <p>You currently don't have any upcoming events that you're organizing. Before you can create one, you'll need to add an interest, using the plus button under your profile!</p>}
                {createEventButton}
            </>
        ) : (
            <>
                {createEventButton}
                <ul>
                    {usersCreatedEvents.map(event => (
                        <EventFeedItemContainer key={event._id} event={event} currentUserId={currentUser._id}/>
                    ))}
                </ul>
            </>
        );

        const confirmedEvents = usersConfirmedEvents.length === 0 ? (
            <p>You currently don't have any upcoming events that you're attending! Navigate the to 'Invited' tab above and click 'Attend' on one of the events that interests you!</p>
        ) : (
            <ul>
                {usersConfirmedEvents.map(event => (
                    <EventFeedItemContainer key={event._id} event={event} currentUserId={currentUser._id}/>
                ))}
            </ul>
        );

        const invitedEvents = usersInvitedEvents.length === 0 ? (
            <p>You currently aren't invited to any upcoming events! Make sure you follow interests in the groups you belong to, so that you can be notified of any future events that are created.</p>
        ) : (
            <ul>
                {usersInvitedEvents.map(event => (
                    <EventFeedItemContainer key={event._id} event={event} currentUserId={currentUser._id}/>
                ))}
            </ul>
        );

        return (
            <>
                <h2>My Events</h2>
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
                                <a href="#test-swipe-0">ORGANIZING</a>
                            </li>
                            <li className="tab col s3">
                                <a href="#test-swipe-1">ATTENDING</a>
                            </li>
                            <li className="tab col s3">
                                <a href="#test-swipe-2">INVITED</a>
                            </li>
                        </ul>

                        <div id="test-swipe-0" className="col s12">
                            {ownedEvents}
                        </div>
                        <div id="test-swipe-1" className="col s12">
                            {confirmedEvents}
                        </div>
                        <div id="test-swipe-2" className="col s12">
                            {invitedEvents}
                        </div>
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