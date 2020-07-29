import React from 'react';
import M from 'materialize-css';

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

    componentDidMount() {
        let input = document.getElementById("create-interest-description");

        M.CharacterCounter.init(input);
        M.textareaAutoResize(input);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    onImageChange(e) {
        this.setState({ img: e.target.files[0] });
    }

    render() {
        return (
            <div className="modal-content">
                <div >
                    <form className="interest-create-container" onSubmit={this.handleSubmit}>
                        <div className="interest-create-content">

                            <h4 className="interest-create-title">Add an Interest</h4>

                            <div className="interest-create-input-holder">
                                <input
                                    id="create-interest-name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    required
                                />
                            </div>

                            <div className="interest-create-input-holder">
                                <textarea
                                    id="create-interest-description" 
                                    className="materialize-textarea" 
                                    data-length="120"
                                    value={this.state.description}
                                    onChange={this.update('description')}
                                    required
                                />
                                <label htmlFor="create-interest-description">
                                    Description
                                </label>
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
                            <input type="submit" value="Add Interest" className="interest-create-button modal-close"/>
                        </div>
                    </form>
                </div>
          </div>
        );
    }

}

export default InterestCreateForm;