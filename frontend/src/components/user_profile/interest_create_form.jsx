
import React from 'react';

class InterestCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: 'Choose a category',
            user: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let interest = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            user: this.props.currentUser
        }
        this.props.createInterest(interest);

        this.setState({
          name: "",
          description: "",
          category: "Choose a category",
          user: "",
        });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <div >
                    <form className="interest-create-container" onSubmit={this.handleSubmit}>
                        <div className="interest-create-content">

                            <span className="interest-create-title">Add an Interest</span>

                            <div className="interest-create-input-holder">
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="interest-create-input-holder">
                                <input
                                    type="text"
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
                                    <option value="Outdoors & Adventure">Outdoors & Adventure</option>
                                    <option value="Food & Drink">Food & Drink</option>
                                    <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <input type="submit" value="Add Interest" className="interest-create-button"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default InterestCreateForm;