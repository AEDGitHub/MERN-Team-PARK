import { connect } from 'react-redux';
import GroupIndex from "./group_index";
import { fetchGroups} from "../../actions/group_actions";

const mapStateToProps = state => {
    return {
        groups: state.entities.groups,
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