import { connect } from "react-redux";
import JoinGroupForm from "./join_group_form";
import { joinGroup } from "../../actions/group_actions";

const mapDispatchToProps = dispatch => {
    return {
        joinGroup: slug => dispatch(joinGroup(slug))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(JoinGroupForm);