import React from 'react';
import M from 'materialize-css';

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

    componentDidMount() {
        const options1 = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal2, options1);
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    renderErrors() {
        return (
            <ul className="group-error-list">
                {Object.keys(this.state.errors).map((error, idx) => (
                    <li className="group-error-item" key={`error-${idx}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <>
                <div className="group-error-holder">
                    {this.renderErrors()}
                </div>
                <div className="modal" id="create-group"
                    ref={Modal2 => { this.Modal2 = Modal2; }}>
                    <div className="modal-content" >             
                        <form onSubmit={this.handleSubmit}>

                            <h4 className="group-session-title">Create a Group</h4>

                            <div className="row">
                                <div className="group-session-input-holder">
                                    <input
                                        id="create-group-name-input"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update("name")}
                                        required
                                    />
                                    <label htmlFor="create-group-name-input">
                                        Group Name
                                    </label>
                                </div>
                            </div>

                            <div className="form-buttons">
                                <input 
                                    type="submit" 
                                    value="Create" 
                                    className={`group-session-button modal-close
                                    ${this.state.name === "" ? "disabled" : ""}`}
                                />
                                <button className="interest-create-button red lighten-2 waves-effect waves-light modal-close">Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateGroupForm;