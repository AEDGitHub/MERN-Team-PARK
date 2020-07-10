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

        this.setState({
          name: "",
          errors: {},
        });
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
            <div className="row">             
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <h4 className="center">Create a Group</h4>

                    <div className="row">
                        <div className="input-field col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update("name")}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <input type="submit" value="Create Group" className="btn col"/>
                        </div>
                    </div>

                    {this.renderErrors()}

                </form>
            </div>
        )
    }
}

export default CreateGroupForm;