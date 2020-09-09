import { connect } from 'react-redux';
import EventFeed from './event_feed';
import { fetchUserEvents } from '../../actions/event_actions';
import { fetchGroups } from '../../actions/group_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id,
        currentUser: state.entities.users[state.session.user.id],
        currentUserGroups: state.entities.groups,
        usersCreatedEvents: Object.values(state.entities.events.createdEvents),
        usersConfirmedEvents: Object.values(state.entities.events.confirmedEvents),
        usersInvitedEvents: Object.values(state.entities.events.invitedEvents)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserEvents: userId => dispatch(fetchUserEvents(userId)),
        fetchGroups: (userId) => dispatch(fetchGroups(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);