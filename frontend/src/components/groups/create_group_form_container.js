import { connect } from 'react-redux';

import CreateGroupForm from './create_group_form'
import { createGroup } from '../../actions/group_actions'

const mapStateToProps = state => {
    return {
        errors: state.errors.groups
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGroup: group => dispatch(createGroup(group))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);