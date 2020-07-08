import { connect } from 'react-redux';

import InterestCreateForm from './interest_create_form';
import { createInterest } from '../../actions/interest_actions';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        createInterest: interest => dispatch(createInterest(interest))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterestCreateForm);