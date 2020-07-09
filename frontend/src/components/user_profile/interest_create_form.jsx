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
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div style={{ backgroundColor: "lightblue" }}>
                <div>INTEREST CREATE FORM</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text" 
                            value={this.state.name}
                            onChange={this.update('name')}
                            placeholder="Name"
                        />
                        <br/>
                        <input
                            type="text"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                        />
                        <br />
                        <div>
                            <select style={{ display: "block" }} defaultValue="Choose a Category"
                                onChange={this.update('category')}>
                                <option disabled="disabled">Choose a Category</option>
                                <option value="Outdoors & Adventure">Outdoors & Adventure</option>
                                <option value="Food & Drink">Food & Drink</option>
                                <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        
                        
                        
                        <br />
                        <input type="submit" value="Create Interest"/>
                    </div>
                </form>
            </div>
        )
    }

}

export default InterestCreateForm;