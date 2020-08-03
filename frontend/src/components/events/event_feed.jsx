import React from 'react';
import EventFeedItemContainer from './event_feed_item_container';
import M from 'materialize-css';

class EventFeed extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // let options8 = {
        //     swipeable: true
        // }
        this.props.fetchUserEvents(this.props.currentUserId)
            .then(this.attachTabHandlers())
            // .then(M.Tabs.init(this.Tabs))

        // M.Tabs.init(this.Tabs)
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.events !== this.props.events) {
            this.attachTabHandlers();
        }
    }

    attachTabHandlers() {
        M.Tabs.init(this.Tabs)
    }

    render () {

        if (!this.props.events) return null

        const ownedEventsTabs = Object.values(this.props.events.createdEvents).map((event, idx) => {
            // the EventFeedItemComponent is not needed if you use this
            // debugger
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
                <div id={`test-swipe-${idx + 1}`} className="col s12 red" key={idx}>
                    {event.name}
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
            // <div className="event-list-holder">
            //     <div className="event-list-holder-col">
            //         <ul className="tabs" ref={Tabs => { this.Tabs = Tabs; }}>
            //             <li className="tab disabled"><a href="#">UPCOMING EVENTS</a></li>
            //             {ownedEventsTabs}
            //             {confirmedEvents}
            //                 {invitedEvents}
            //             <li class="tab col s3"><a href="#test-swipe-1">Test 1</a></li>
            //             <li class="tab col s3"><a class="active" href="#test-swipe-2">Test 2</a></li>
            //             <li class="tab col s3"><a href="#test-swipe-3">Test 3</a></li>
            //         </ul>
            //         <div className="tabs-content carousel carousel-slider">
            //             <div id="event-swipe-1" class="col s12 blue carousel-item">Test 1</div>
            //             <div id="event-swipe-2" class="col s12 red carousel-item">Test 2</div>
            //             <div id="event-swipe-3" class="col s12 green carousel-item">Test 3</div>
            //         </div>
            //     </div>
            // </div>
            <>
                <div clasName="row">
                    <div className="col l12 m12 s12">
                        <ul
                            ref={Tabs => {
                                this.Tabs = Tabs;
                            }}
                            id="tabs-swipe-demo"
                            class="tabs tabs-fixed-width tab-demo z-depth-1"
                        >

                            <li className="tab col s3">
                                <a href="#test-swipe-0">UPCOMING EVENTS</a>
                            </li>
                            {ownedEventsTabs}
                            {/* <li class="tab col s3">
                                 <a href="#test-swipe-1">Test 1</a>
                            </li>
                            <li class="tab col s3">
                                <a href="#test-swipe-2">Test 2</a>
                            </li>
                            <li class="tab col s3">
                                <a href="#test-swipe-3">Test 3</a>
                            </li>
                            <li class="tab col s3">
                                <a href="#test-swipe-4">Test 4</a>
                            </li>
                            <li class="tab col s3">
                                <a href="#test-swipe-5">Test 5</a>
                            </li>
                            <li class="tab col s3">
                                <a href="#test-swipe-6">Test 6</a>
                            </li> */}
                        </ul>

                        <div id="test-swipe-0" class="col s12 yellow">
                            UPCOMING EVENTS
                        </div>
                        {ownedEvents}
                            {/* <div id="test-swipe-1" class="col s12 blue">
                                Test 1
                            </div>
                            <div id="test-swipe-2" class="col s12 red">
                                Test 2
                            </div>
                            <div id="test-swipe-3" class="col s12 green">
                                Test 3
                            </div>
                            <div id="test-swipe-4" class="col s12 blue">
                                Test 4
                            </div>
                            <div id="test-swipe-5" class="col s12 red">
                                Test 5
                            </div>
                            <div id="test-swipe-6" class="col s12 green">
                                Test 6
                            </div> */}
                        </div>
                </div>
            </>
        )
    }

}

export default EventFeed;