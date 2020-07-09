import { connect } from 'react-redux';
import GroupIndex from "./group_index";
import { fetchGroups } from "../../actions/group_actions";
import { usersGroups } from "../../reducers/selectors";

const mapStateToProps = state => {
    return {
        groups: usersGroups(state, state.session.user.id),
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchGroups: userId => dispatch(fetchGroups(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupIndex);