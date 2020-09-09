import { connect } from "react-redux";
import JoinGroupForm from "./join_group_form";
import { joinGroup, clearErrors } from "../../actions/group_actions";

const mapStateToProps = state => {
    return {
        errors: state.errors.groups
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinGroup: slug => dispatch(joinGroup(slug)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinGroupForm);