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
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let group = {
            name: this.state.name,
        };

        this.props.createGroup(group)
            .then(() => {
                if (!Object.keys(this.state.errors).length) {
                    this.closeModal();
                }
            })

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

        const options = {
            inDuration: 300,
            outDuration: 250,
            exitDelay: 0,
            enterDelay: 250,
            transitionMovement: 10,
            position: "bottom",
            margin: 5
        };
        M.Tooltip.init(this.Tooltip8, options)
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    closeModal() {
        this.setState({
            name: "",
            errors: {},
        }, () => {
            this.props.clearErrors();
            const modalInstance = M.Modal.getInstance(this.Modal2);
            modalInstance.close();
        });
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
                <div className="modal" id="create-group"
                    ref={Modal2 => { this.Modal2 = Modal2; }}>
                    <div className="modal-content" >             
                        <form onSubmit={this.handleSubmit}>

                            <h4 className="group-session-title">
                                Create a Group
                                <i
                                    ref={Tooltip => { this.Tooltip8 = Tooltip; }}
                                    data-tooltip={`Choose a name for your group and invite people to join.`}
                                    className="tiny material-icons my-interests-tooltip"
                                >
                                    info_outline
                                </i>
                            </h4>

                            <div className="group-error-holder modal-errors">
                                {this.renderErrors()}
                            </div>

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
                                    className={`group-session-button
                                    ${this.state.name === "" ? "disabled" : ""}`}
                                />
                                <button
                                    className="interest-create-button red lighten-2 waves-effect waves-light"
                                    onClick={this.closeModal}
                                    type="button"
                                >Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateGroupForm;