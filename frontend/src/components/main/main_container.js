import { connect } from 'react-redux';
import Main from './main';
import { usersGroups } from '../../reducers/selectors';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.user.id],
        currentUserGroups: usersGroups(state, state.session.user.id),
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);