import React from 'react';
import M from 'materialize-css';

class EventCreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            date: "",
            details: "",
            groupId: this.props.groupId,
            interestId: "",
            address: {
                name: "",
                address1: "",
                city: "",
                state: "",
                zipCode: ""
            }
        };
        debugger
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let event = {
            name: this.state.name,
            date: this.state.date,
            details: this.state.details,
            groupId: this.state.groupId,
            interestId: this.state.interestId,
            address: {
                name: this.state.address.name,
                address1: this.state.address.address1,
                city: this.state.address.city,
                state: this.state.address.state,
                zipCode: this.state.address.zipCode
            }
        };

        // let event = {
        //     name: "new event6",
        //     date: "2020-12-14",
        //     details: "details about the event",
        //     groupId: "5f07c1e48f63f46e044a703c",
        //     interestId: "5f07ac4f811bd63fba3772a7",
        //     address: {
        //         name: "name of the location2",
        //         address1: "Main St 12",
        //         city: "San Francisco",
        //         state: "CA",
        //         zipCode: "94105"
        //     }
        // }

        this.props.createEvent(event);

        this.setState({
            name: "",
            date: "",
            details: "",
            groupId: "",
            interestId: "",
            address: {
                name: "",
                address1: "",
                city: "",
                state: "",
                zipCode: ""
            }
        });
    }

    componentDidMount() {
        let elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems);
    }

    update(field) {
        if (field.includes('.')) {
            field = field.split('.')[1]
            return e => this.setState({ 
                address: { ...this.state.address, [field]: e.currentTarget.value }
            });
        } else {
            return e => this.setState({
                [field]: e.currentTarget.value
            });
        }
    }

    render() {
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
                                type="date"
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
                                value={this.state.address.name}
                                onChange={this.update("address.name")}
                                placeholder="Location"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.address.address1}
                                onChange={this.update("address.address1")}
                                placeholder="Address"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.address.city}
                                onChange={this.update("address.city")}
                                placeholder="City"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="text"
                                value={this.state.address.state}
                                onChange={this.update("address.state")}
                                placeholder="State"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder">
                            <input
                                type="number"
                                value={this.state.address.zipCode}
                                onChange={this.update("address.zipCode")}
                                placeholder="ZIP"
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
            </div>
        )
    }

}

export default EventCreateForm;