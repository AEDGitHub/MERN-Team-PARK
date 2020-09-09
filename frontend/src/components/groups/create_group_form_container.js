import { connect } from 'react-redux';
import CreateGroupForm from './create_group_form'
import { createGroup, clearErrors } from '../../actions/group_actions'

const mapStateToProps = state => {
    return {
        errors: state.errors.groups
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGroup: group => dispatch(createGroup(group)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupForm);