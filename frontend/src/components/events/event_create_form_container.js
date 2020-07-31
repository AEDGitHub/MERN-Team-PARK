import { connect } from 'react-redux';
import EventCreateForm from './event_create_form';
import { createEvent } from '../../actions/event_actions';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        currentUserGroups: usersGroups(state, state.session.user.id)
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createEvent: event => dispatch(createEvent(event))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateForm);