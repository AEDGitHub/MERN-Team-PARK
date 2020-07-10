
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
                <form className="col s12" onSubmit={this.handleSubmit}>

                    <h4 className="center">Add an Interest</h4>

                    <div className="row">
                        <div className="input-field col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')}
                                placeholder="Name"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <input
                                type="text"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Description"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s8 m6 l8 offset-l2 offset-m3 offset-s2">
                            <select style={{ display: "block" }} required
                                onChange={this.update('category')}>
                                <option value="">Choose a Category</option>
                                <option value="Outdoors & Adventure">Outdoors & Adventure</option>
                                <option value="Food & Drink">Food & Drink</option>
                                <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s8 m6 l4 offset-l4 offset-m3 offset-s2">
                            <input type="submit" value="Add Interest" className="btn col"/>
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default InterestCreateForm;