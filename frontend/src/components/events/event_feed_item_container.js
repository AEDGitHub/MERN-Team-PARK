import { connect } from 'react-redux';
import EventFeedItem from './event_feed_item';
import { joinEvent, unjoinEvent, editEvent } from "../../actions/event_actions";

const mapStateToProps = ({ entities }, ownProps) => {
    const mappedState = {
        currentUser: entities.users[ownProps.currentUserId]
    }
    
    if (!ownProps.event) {
        return mappedState;
    } else {
        return Object.assign(mappedState, { groupName: entities.groups[ownProps.event.group].name })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinEvent: eventID => dispatch(joinEvent(eventID)),
        unjoinEvent: eventID => dispatch(unjoinEvent(eventID)),
        editEvent: eventData => dispatch(editEvent(eventData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeedItem)