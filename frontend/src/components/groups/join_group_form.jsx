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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleInput}
                    required
                />
                <button>Join Group</button>
            </form>
        )
    }

}

export default JoinGroupForm;