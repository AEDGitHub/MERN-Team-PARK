import React from 'react';
import M from 'materialize-css';

class EventEditForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.props.initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.submitAction(this.state);
    }

    componentDidMount() {
        let ctx = this;
        let date = new Date(this.state.date);
        
        const options5 = {
            format: 'mmm dd yyyy',
            defaultDate: date,
            setDefaultDate: true,
            onSelect(_date) {
                let dateArr = _date.toString().split(' ')
                let selDateArr = dateArr.slice(1, 4)
                let formattedDate = selDateArr.join(' ')

                ctx.setState({
                    date: formattedDate
                });
            }
        }
        let elems = document.getElementById('event-edit-datepicker');
        M.Datepicker.init(elems, options5);

        const options6 = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
        };
        
        M.Modal.init(this.Modal7, options6);
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
        const currentUserInterests = this.props.userInterests;
        const currentUserGroups = this.props.currentUserGroups;
        
        return (
            <div className="modal" id={`edit-event-form-trigger-${this.state._id}`}
                ref={Modal7 => { this.Modal7 = Modal7; }}>
                <div className="modal-content" >
                    <div >
                        <form onSubmit={this.handleSubmit} className="interest-create-container">
                            <div className="interest-create-content">
                            <h4 className="interest-create-title">Edit Event</h4>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <select disabled
                                        style={{ display: "block" }} 
                                        required
                                        onChange={this.update('groupId')}
                                        value={this.state.group}
                                    >
                                        <option value="">Choose a related group</option>
                                        {currentUserGroups.map(group => (
                                            <option key={group._id} value={group._id}>
                                                {group.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="group-session-input-holder col s6">
                                    <select style={{ display: "block" }} required disabled
                                        onChange={this.update('interestId')} value={this.state.interest}>
                                        <option value="">Choose a related interest</option>
                                        {currentUserInterests.map(interest => (
                                            <option key={interest._id} value={interest._id}>
                                                {interest.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update("name")}
                                        required
                                    />
                                    <label className="active">
                                        Event name *
                                    </label>
                                </div>

                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="number"
                                        value={this.state.maxCapacity}
                                        onChange={this.update("maxCapacity")}
                                        required
                                    />
                                    <label className="active">
                                        Maximum # of People *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s12">
                                    <input
                                        type="text"
                                        value={this.state.details}
                                        onChange={this.update("details")}
                                        required
                                    />
                                    <label className="active">
                                        Event details *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        className="datepicker"
                                        id="event-edit-datepicker"
                                        defaultValue={this.state.date}
                                        required
                                    />
                                    <label className="active">
                                        Date *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        value={this.state.address.name}
                                        onChange={this.update("address.name")}
                                        required
                                    />
                                    <label className="active">
                                        Location *
                                    </label>
                                </div>

                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        value={this.state.address.address1}
                                        onChange={this.update("address.address1")}
                                        required
                                    />
                                    <label className="active">
                                        Address *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        value={this.state.address.city}
                                        onChange={this.update("address.city")}
                                        required
                                    />
                                    <label className="active">
                                        City *
                                    </label>
                                </div>
 
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="text"
                                        value={this.state.address.state}
                                        onChange={this.update("address.state")}
                                        required
                                    />
                                    <label className="active">
                                        State *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="group-session-input-holder col s6">
                                    <input
                                        type="number"
                                        value={this.state.address.zipCode}
                                        onChange={this.update("address.zipCode")}
                                        required
                                    />
                                    <label className="active">
                                        ZIP *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <input
                                    type="submit"
                                    value="Save Changes"
                                    className={`interest-create-button modal-close 
                                    ${this.state.groupId === "" ||
                                    this.state.interestId === "" ||
                                    this.state.name === "" ||
                                    this.state.details === "" ||
                                    this.state.maxCapacity === "" ||
                                    this.state.date === "" ||
                                    this.state.address.name === "" ||
                                    this.state.address.address1 === "" ||
                                    this.state.address.city === "" ||
                                    this.state.address.state === "" ||
                                    this.state.address.zipCode === ""
                                    ? "disabled" : ""}`}
                                />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventEditForm;