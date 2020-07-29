import { connect } from "react-redux";
import InterestFeedItem from "./interest_feed_item";
import { processSinglePhoto } from "../../util/photo_util";

const mapStateToProps = ({ entities }, ownProps) => {
    processSinglePhoto(ownProps.interest)

    return {
        owner: entities.users[ownProps.interest.owner],
        interest: ownProps.interest
    }
}

export default connect(
    mapStateToProps,
    null
)(InterestFeedItem);