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

        if (!this.props.events) return null

        const ownedEventsTabs = Object.values(this.props.events.createdEvents).map((event, idx) => {
            // the EventFeedItemComponent is not needed if you use this
            return (
                <li className="tab col s3" key={idx}>
                    <a href={`#test-swipe-${idx + 1}`}>
                        {event.name}
                    </a>
                </li>
            )
        })

        const ownedEvents = Object.values(this.props.events.createdEvents).map((event, idx) => {
            // the EventFeedItemComponent is not needed if you use this
            return (
                <div id={`test-swipe-${idx + 1}`} className="col s12" key={idx}>
                    <EventFeedItemContainer key={event._id} event={event} />
                    {/* {event.name} */}
                </div>
            )
        })

        // const ownedEvents = Object.values(this.props.events.createdEvents).map(event => {
        //     return (
        //         <EventFeedItemContainer key={event._id} event={event} />
        //     )
        // })

        // const confirmedEvents = Object.values(this.props.events.confirmedEvents).map(event => {
        //     return <EventFeedItemContainer
        //         key={event._id}
        //         event={event}
        //     />
        // })

        // const invitedEvents = Object.values(this.props.events.invitedEvents).map(event => {
        //     return <EventFeedItemContainer
        //         key={event._id}
        //         event={event}
        //     />
        // })

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

                    </ul>

                    <div id="test-swipe-0" className="col s12">
                        UPCOMING EVENTS
                    </div>
                    {ownedEvents}

                </div>
            </div>
        )
    }

}

export default EventFeed;