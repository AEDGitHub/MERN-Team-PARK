import { connect } from 'react-redux';
// import { fetchInterests } from '../../actions/interest_actions';
import InterestFeed from './interest_feed';

const mapStateToProps = state => {
    const user = state.entities.users[state.session.user.id];
    
    return {
        interests: user.interests,
        currentUser: user
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchInterests: () => dispatch(fetchInterests())
//     };
// };

export default connect(mapStateToProps, null)(InterestFeed);