import { connect } from "react-redux";
import JoinGroupForm from "./join_group_form";
import { joinGroup } from "../../actions/group_actions";

const mapStateToProps = state => {
    return {
        errors: state.errors.groups
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinGroup: slug => dispatch(joinGroup(slug))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinGroupForm);