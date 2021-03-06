import { connect } from 'react-redux';
import EventEditForm from './event_edit_form';
import { editEvent } from '../../actions/event_actions';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserGroups: usersGroups(state, state.session.user.id),
        currentUser: state.entities.users[state.session.user.id],
        // userInterests: state.entities.users[state.session.user.id].interests,
        initialState: ownProps.event
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: event => dispatch(editEvent(event))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventEditForm);