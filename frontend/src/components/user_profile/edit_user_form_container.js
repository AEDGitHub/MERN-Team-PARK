import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import EditUserForm from "./edit_user_form";

const mapStateToProps = (state, { currentUser }) => {
    return {
        currentUser: state.entities.users[state.session.user.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: userData => dispatch(updateUser(userData)) 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUserForm);