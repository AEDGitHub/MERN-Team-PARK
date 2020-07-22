import { connect } from "react-redux";
import { groupInterests } from "../../reducers/selectors";
import GroupShow from "./group_show";

const mapStateToProps = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.groupId],
        interests: groupInterests(state, ownProps.groupId),
        currentUserId: state.session.user.id
    }
}

export default connect(
    mapStateToProps,
    null
)(GroupShow);