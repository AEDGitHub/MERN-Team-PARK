import { connect } from "react-redux";
import InterestFeed from "./interest_feed";
import { followInterest, unfollowInterest, deleteInterest } from "../../actions/user_actions";

const mapStateToProps = state => {
    return {
        currentUserId: state.session.user.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followInterest: interestId => dispatch(followInterest(interestId)),
        unfollowInterest: interestId => dispatch(unfollowInterest(interestId)),
        deleteInterest: interestId => dispatch(deleteInterest(interestId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InterestFeed);