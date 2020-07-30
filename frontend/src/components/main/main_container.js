import { connect } from 'react-redux';
import Main from './main';
import { fetchGroups } from '../../actions/group_actions';
import { fetchUser } from '../../actions/user_actions';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id,
        currentUser: state.entities.users[state.session.user.id],
        currentUserGroups: usersGroups(state, state.session.user.id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser()),
        // fetchGroups: userId => dispatch(fetchGroups(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);