import { connect } from 'react-redux';
import EventFeed from './event_feed';
import { fetchUserEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id,
        usersCreatedEvents: Object.values(state.entities.events.createdEvents),
        usersConfirmedEvents: Object.values(state.entities.events.confirmedEvents),
        usersInvitedEvents: Object.values(state.entities.events.invitedEvents)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserEvents: userId => dispatch(fetchUserEvents(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);