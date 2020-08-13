import React from 'react';
import M from 'materialize-css';

class EventCreateForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = this.props.initialState;
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitAction(this.state);
        this.setState(this.props.initialState);
        e.target.reset();
    }

    componentDidMount() {

        M.FormSelect.init(this.FormSelect1)
        M.FormSelect.init(this.FormSelect2)
        let ctx = this
        const options5 = {
            container: 'body',
            format: 'mmm dd yyyy',
            onSelect(_date) {
                let dateArr = _date.toString().split(' ')
                let selDateArr = dateArr.slice(1,4)
                let formattedDate = selDateArr.join(' ')
                ctx.setState({
                    date: formattedDate
                })
            },
        }
        let elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, options5);

        const options4 = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            startingTop: "4%",
            endingTop: "20%"
        };
        M.Modal.init(this.Modal6, options4);
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
        const currentUserInterests = this.props.userInterests
        const currentUserGroups = this.props.currentUserGroups
        
        if (currentUserGroups[0] === undefined) return null

        return (
            <div className="modal" id="create-event-form-trigger" 
            ref={Modal6 => { this.Modal6 = Modal6; }}> 
            <div className="modal-content" >
                <div >
                    <form className="interest-create-container" onSubmit={this.handleSubmit}>
                    <div className="interest-create-content">
                    <h4 className="interest-create-title">Create an Event</h4>

                    <div className="row">
                        <div className="group-session-input-holder col s6">
                            <select 
                                onChange={this.update('groupId')} 
                                defaultValue={this.state.groupId} 
                                required
                                ref={FormSelect1 => { this.FormSelect1 = FormSelect1;}}
                            >
                                <option value='' disabled>Choose a related group *</option>
                                {currentUserGroups.map(group => (
                                    <option key={group._id} value={group._id}>
                                        {group.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="group-session-input-holder col s6">
                            <select 
                                onChange={this.update('interestId')} 
                                defaultValue="default" 
                                required
                                ref={FormSelect2 => { this.FormSelect2 = FormSelect2; }}
                            >
                                <option value="default" disabled>Choose a related interest *</option>
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
                            <label>
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
                            <label>
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
                            <label>
                                Event details *
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder input-field col s6">
                            <input
                                id="event-create-date-input"
                                type="text"
                                className="datepicker"
                                required
                            />
                            <label>
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
                            <label>
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
                            <label>
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
                            <label>
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
                            <label>
                                State *
                            </label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="group-session-input-holder col s6">
                            <input
                                type="text"
                                value={this.state.address.zipCode}
                                onChange={this.update("address.zipCode")}
                                required
                            />
                            <label>
                                ZIP *
                            </label>
                        </div>
                    </div>

                    {/* <div className="row">
                        <input
                            type="submit"
                            value="Create"
                            className="group-session-button modal-close"
                        />
                    </div> */}

                    <input
                        type="submit"
                        value="Create Event"
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
                </form>
                </div>
            </div>
            </div>
        )
    }
}

export default EventCreateForm;