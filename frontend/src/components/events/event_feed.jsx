import React from 'react';

class EventFeed extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUserEvents(this.props.currentUserId)
    }

    render () {

        return (
            <div>
                eventfeed
            </div>
        )
    }

}

export default EventFeed;