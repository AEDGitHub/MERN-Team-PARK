import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        initialState: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            errors: {}
        },
        formTitle: "Sign Up"
    };
};

const mapDispatchToProps = dispatch => {
    return {
        userFormAction: user => dispatch(signup(user)),
        login: user => dispatch(login(user))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);