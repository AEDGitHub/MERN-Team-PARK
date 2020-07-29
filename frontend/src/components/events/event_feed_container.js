import { connect } from 'react-redux';
import EventFeed from './event_feed';
import { fetchUserEvents } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserEvents: userId => dispatch(fetchUserEvents(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFeed);