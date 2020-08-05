import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
    const mappedState = { loggedIn: state.session.isAuthenticated };

    if (mappedState.loggedIn) {
        return Object.assign(mappedState, { currentUser: state.entities.users[state.session.user.id] });
    } else {
        return mappedState;
    }
};

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);