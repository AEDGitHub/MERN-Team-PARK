import { connect } from 'react-redux';
import InterestCreateForm from './interest_create_form';
import { createInterest } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createInterest: interest => dispatch(createInterest(interest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestCreateForm);