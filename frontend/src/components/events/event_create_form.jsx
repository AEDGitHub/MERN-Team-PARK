import React from 'react';
import M from 'materialize-css';

class EventCreateForm extends React.Component {

    constructor(props) {
        // debugger
        super(props);
        this.state = {
            name: '',
            date: '',
            location: '',
            // details: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let event = {
            name: this.state.name,
            date: this.state.date,
            location: this.state.location,
            // details: this.state.details
        };

        debugger

        this.props.createEvent(event);

        this.setState({
            name: '',
            date: '',
            location: '',
            // details: ''
        });
    }

    componentDidMount() {

        let elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems);
    }

    update(field) {
        // debugger
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        // debugger
        return (
            <div className="modal-content" >
                <div className="event-create-form-container">
                <form onSubmit={this.handleSubmit}>

                    <h4 className="group-session-title">Create an Event</h4>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                id="create-event-name-input"
                                value={this.state.name}
                                onChange={this.update("name")}
                                placeholder="Name"
                                required
                            />
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                className="datepicker"
                                value={this.state.date}
                                onChange={this.update("date")}
                                placeholder="Date"
                                required
                            />
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.date}
                                onChange={this.update("date")}
                                placeholder="Date"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.location}
                                onChange={this.update("location")}
                                placeholder="Location"
                                required
                            />
                        </div>
                    </div>
{/* 
                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.details}
                                onChange={this.update("details")}
                                placeholder="Details"
                                required
                            />
                        </div>
                    </div> */}

                    <div className="row">
                        <input
                            type="submit"
                            value="Create"
                            className="group-session-button modal-close"
                        />
                    </div>

                </form>
                </div>
            </div>
        )
    }

}

export default EventCreateForm;