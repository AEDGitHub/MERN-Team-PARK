import { connect } from 'react-redux';
import Main from './main';
import { fetchUser } from '../../actions/user_actions';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.user.id],
        currentUserGroups: usersGroups(state, state.session.user.id)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);