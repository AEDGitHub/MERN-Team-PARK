import React from 'react';
import M from 'materialize-css';

class EventCreateForm extends React.Component {

    constructor(props) {
        // debugger
        super(props);
        this.state = {
            name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let event = {
            name: this.state.name
        };

        this.props.createEvent(event);

        this.setState({
            name: "",
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        // debugger
        return (
            <div className="modal-content" >
                <form onSubmit={this.handleSubmit}>

                    <h4 className="group-session-title">Create an Event</h4>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update("name")}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <input
                            type="submit"
                            value="Create"
                            className="group-session-button modal-close"
                        />
                    </div>

                </form>
            </div>
        )
    }

}

export default EventCreateForm;