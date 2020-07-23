import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import SignupForm from "../session/signup_form";

const mapStateToProps = (state, { currentUser }) => {
    return {
        errors: state.errors.session,
        initialState: {
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            img: '',
            errors: {}
        },
        formTitle: "Edit Profile",
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userFormAction: userData => dispatch(updateUser(userData)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupForm);