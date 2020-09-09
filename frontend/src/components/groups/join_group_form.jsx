import React from "react"
import M from 'materialize-css'

class JoinGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        M.Tooltip.init(this.Tooltip7, options)
    }

    handleInput(e) {
        this.setState({ slug: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.joinGroup(this.state.slug)
        this.setState({ slug: "" });
    }

    render() {
        return (
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
                                className={`group-session-button modal-close
                                ${this.state.slug === "" ? "disabled" : ""}`}
                            >
                                Join
                            </button>
                            <button className="interest-create-button red lighten-2 waves-effect waves-light modal-close">Cancel</button>
                    </div>

                </form>
            </div>
        )
    }

}

export default JoinGroupForm;