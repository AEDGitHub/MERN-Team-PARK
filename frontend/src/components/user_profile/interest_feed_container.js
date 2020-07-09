import { connect } from 'react-redux';

import { fetchInterests } from '../../actions/interest_actions';
import InterestFeed from './interest_feed';

const mapStateToProps = state => {
    return {
        interests: Object.values(state.entities.interests),
        currentUser: state.entities.users[state.session.user.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchInterests: () => dispatch(fetchInterests())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InterestFeed);