import React from 'react'

class CreateGroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = {
            name: this.state.name,
        };

        this.props.createGroup(group);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>             
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.update("name")}
                        />
                        <br/>
                        <input type="submit" value="Create Group" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateGroupForm;