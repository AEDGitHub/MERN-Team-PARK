import React from 'react';
import M from 'materialize-css';

class InterestEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.interest;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let interest = {
            _id: this.state._id,
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            user: this.props.currentUser
        }

        this.props.updateInterest(interest);

    }

    componentDidMount() {
        let input = document.getElementById("edit-interest-description");

        M.CharacterCounter.init(input);
        M.textareaAutoResize(input);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className="modal-content">
                <div >
                    <form className="interest-create-container" onSubmit={this.handleSubmit}>
                        <div className="interest-create-content">

                            <h4 className="interest-create-title">Edit Interest</h4>

                            <div className="interest-create-input-holder">
                                <input
                                    id="edit-interest-name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="interest-create-input-holder">
                                <textarea
                                    id="edit-interest-description"
                                    className="materialize-textarea"
                                    data-length="120"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder="Description"
                                    required
                                />
                            </div>

                            <div className="interest-create-input-holder">
                                <select style={{ display: "block" }} required
                                    onChange={this.update('category')}>
                                    <option value="">Choose a Category</option>
                                    <option value="Outdoors & Adventure" selected={this.state.category === "Outdoors & Adventure" ? true : false}>Outdoors & Adventure</option>
                                    <option value="Food & Drink" selected={this.state.category === "Food & Drink" ? true : false}>Food & Drink</option>
                                    <option value="Hobbies & Crafts" selected={this.state.category === "Hobbies & Crafts" ? true : false}>Hobbies & Crafts</option>
                                    <option value="Other" selected={this.state.category === "Other" ? true : false}>Other</option>
                                </select>
                            </div>
                            <input type="submit" value="Edit Interest" className="interest-create-button" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default InterestEditForm;