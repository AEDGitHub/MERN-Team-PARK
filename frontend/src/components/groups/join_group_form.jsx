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
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <h4 className="center">Join a Group</h4>

                    <div className="row">
                        <div className="input-field col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <input
                                type="text"
                                onChange={this.handleInput}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <button className="btn col">Join Group</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default JoinGroupForm;