import { connect } from "react-redux";
import InterestFeedItem from "./interest_feed_item";

const mapStateToProps = ({ entities }, ownProps) => {
    return {
        owner: entities.users[ownProps.interest.owner]
    }
}

export default connect(
    mapStateToProps,
    null
)(InterestFeedItem);