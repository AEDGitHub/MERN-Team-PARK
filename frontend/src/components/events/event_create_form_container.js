import { connect } from 'react-redux';
import EventCreateForm from './event_create_form';
import { createEvent } from '../../actions/event_actions';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        currentUserGroups: usersGroups(state, state.session.user.id),
        currentUserInterests: state.entities.users[state.session.user.id].interests,
        initialState: {
            name: "",
            date: "",
            details: "",
            groupId: "",
            interestId: "",
            maxCapacity: "",
            address: {
                name: "",
                address1: "",
                city: "",
                state: "",
                zipCode: ""
            }
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {
        submitAction: event => dispatch(createEvent(event))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateForm);