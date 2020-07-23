import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);