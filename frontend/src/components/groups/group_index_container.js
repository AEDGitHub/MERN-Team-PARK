import { connect } from 'react-redux';
import GroupIndex from "./group_index";
import { fetchGroups, fetchGroup } from "../../actions/group_actions";
import { usersGroups } from "../../reducers/selectors";

const mapStateToProps = state => {
    return {
        groups: usersGroups(state, state.session.user.id),
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: userId => dispatch(fetchGroups(userId)),
        fetchGroup: groupID => dispatch(fetchGroup(groupID))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupIndex);