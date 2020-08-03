import React from 'react';
import EventFeedItemContainer from './event_feed_item_container';
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
        if (prevProps.events !== this.props.events) {
            this.attachTabHandlers();
        }
    }

    attachTabHandlers() {
        let options8 = {
            swipeable: true
        }
        M.Tabs.init(this.Tabs, options8)
    }

    render () {

        const ownedEventsTabs = Object.values(this.props.events.createdEvents).map((event, idx) => {
            return (
                <li className="tab col s3" key={idx}>
                    <a href={`#owned-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name} 
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const ownedEvents = Object.values(this.props.events.createdEvents).map((event, idx) => {
            return (
                <div id={`owned-event-swipe-${idx + 1}`} className="col s12" key={idx}>
                    <EventFeedItemContainer key={event._id} event={event} currentUserId={this.props.currentUserId}/>
                </div>
            )
        })

        const confirmedEventsTabs = Object.values(this.props.events.confirmedEvents).map((event, idx) => {
            return (
                <li className="tab col s3" key={idx}>
                    <a href={`#confirmed-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name}
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const confirmedEvents = Object.values(this.props.events.confirmedEvents).map((event, idx) => {
            return (
                <div id={`confirmed-event-swipe-${idx + 1}`} className="col s12" key={idx}>
                    <EventFeedItemContainer key={event._id} event={event} currentUserId={this.props.currentUserId}/>
                </div>
            )
        })

        const invitedEventsTabs = Object.values(this.props.events.invitedEvents).map((event, idx) => {
            return (
                <li className="tab col s3" key={idx}>
                    <a href={`#invited-event-swipe-${idx + 1}`} className="event-list-name-holder">
                        {event.name}
                        {/* <i className="material-icons">sentiment_very_satisfied</i> */}
                    </a>
                </li>
            )
        })

        const invitedEvents = Object.values(this.props.events.invitedEvents).map((event, idx) => {
            return (
                <div id={`invited-event-swipe-${idx + 1}`} className="col s12" key={idx}>
                    <EventFeedItemContainer key={event._id} event={event} currentUserId={this.props.currentUserId}/>
                </div>
            )
        })

        return (
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
        )
    }

}

export default EventFeed;