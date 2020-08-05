import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.entities.users[state.session.user.id]
});

export default connect(
    mapStateToProps,
    { logout }
)(NavBar);