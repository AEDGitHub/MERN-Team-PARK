import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import SignupForm from "../session/signup_form";

const mapStateToProps = state => {
    return {
        errors: state.errors.session
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