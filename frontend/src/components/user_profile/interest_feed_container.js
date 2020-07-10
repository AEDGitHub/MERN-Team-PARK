import { connect } from 'react-redux';
import InterestFeed from './interest_feed';

const mapStateToProps = state => {
    const user = state.entities.users[state.session.user.id];
    
    return {
        interests: user.interests,
        currentUser: user
    };
};

export default connect(mapStateToProps, null)(InterestFeed);