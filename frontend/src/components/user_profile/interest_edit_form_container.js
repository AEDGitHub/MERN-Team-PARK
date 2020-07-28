import { connect } from 'react-redux';
import InterestEditForm from './interest_edit_form';
import { updateInterest } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInterest: interest => dispatch(updateInterest(interest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestEditForm);