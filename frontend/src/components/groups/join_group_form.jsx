import React from "react"
import M from 'materialize-css'

class JoinGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: "",
            errors: {}
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    
    componentDidMount() {
        const options = {
            inDuration: 300,
            outDuration: 250,
            exitDelay: 0,
            enterDelay: 250,
            transitionMovement: 10,
            position: "bottom",
            margin: 5
        };
        M.Tooltip.init(this.Tooltip7, options);

        const options1 = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal3, options1);
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    handleInput(e) {
        this.setState({ slug: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinGroup(this.state.slug)
            .then(() => {
                if (!Object.keys(this.state.errors).length) {
                    this.closeModal();
                }
            })
    }

    closeModal() {
        this.setState({
            slug: "",
            errors: {},
        }, () => {
            const modalInstance = M.Modal.getInstance(this.Modal3);
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
            <div className="modal" id="join-group"
                ref={Modal3 => { this.Modal3 = Modal3; }}>
                <div className="modal-content">
                    <form onSubmit={this.handleSubmit}>

                        <h4 className="group-session-title">
                            Join a Group
                            <i
                                ref={Tooltip => { this.Tooltip7 = Tooltip; }}
                                data-tooltip={`Type the name of an already existing group and join now.`}
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
                                    id="join-group-name-input"
                                    type="text"
                                    onChange={this.handleInput}
                                    required
                                />
                                <label htmlFor="join-group-name-input">
                                    Group Name
                                </label>
                            </div>
                        </div>

                        <div className="form-buttons">
                                <button 
                                    className={`group-session-button
                                    ${this.state.slug === "" ? "disabled" : ""}`}
                                >
                                    Join
                                </button>
                                <button className="interest-create-button red lighten-2 waves-effect waves-light" onClick={this.closeModal}>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }

}

export default JoinGroupForm;