import { connect } from "react-redux";
import { fetchGroup } from "../../actions/group_actions";
import { groupInterests } from "../../reducers/selectors";
import GroupShow from "./group_show";

const mapStateToProps = (state, ownProps) => {
    return {
        group: state.entities.groups[ownProps.groupId],
        interests: groupInterests(state, ownProps.groupId)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroup: groupId => dispatch(fetchGroup(groupId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupShow);