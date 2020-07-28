import { connect } from 'react-redux';

import EventCreateForm from './event_create_form';
import { createEvent } from '../../actions/event_actions';

const mapStateToProps = state => {
    return {
        
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createEvent: event => dispatch(createEvent(event))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateForm);