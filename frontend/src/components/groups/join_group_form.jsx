import React from "react"

class JoinGroupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

                    <h4 className="group-session-title">Join a Group</h4>

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

                    <div className="row">
                        <div>
                            <button className="group-session-button modal-close">Join</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default JoinGroupForm;