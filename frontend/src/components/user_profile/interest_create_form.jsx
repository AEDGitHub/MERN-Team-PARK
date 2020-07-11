
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
            <div className="row">
                <div className="col s12 m8">
                    <form className="card blue-grey darken-1" onSubmit={this.handleSubmit}>
                        <div className="card-content white-text">
                            <span className="card-title">Add an Interest</span>

                            <div className="input-field">
                                <input
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <input
                                    type="text"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    placeholder="Description"
                                    required
                                />
                            </div>

                            <div className="input-field">
                                <select style={{ display: "block" }} required
                                    onChange={this.update('category')}>
                                    <option value="">Choose a Category</option>
                                    <option value="Outdoors & Adventure">Outdoors & Adventure</option>
                                    <option value="Food & Drink">Food & Drink</option>
                                    <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <input type="submit" value="Add Interest" className="btn"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default InterestCreateForm;