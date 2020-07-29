import React from 'react';
import M from 'materialize-css';

class InterestCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            category: 'Choose a category',
            user: '',
            img: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { name, description, category, img } = this.state;
        let formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("user", this.props.currentUser);
        if (img) formData.append("img", img);
        
        this.props.createInterest(formData);

        this.setState({
          name: "",
          description: "",
          category: "Choose a category",
          user: "",
          img: ''
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

                            <div className="row">
                                <div className="file-field interest-create-input-holder">
                                <div className="btn">
                                    <span>Image</span>
                                    <input
                                    type="file"
                                    onChange={this.onImageChange}
                                    accept="image/*"
                                    />
                                </div>
                                <div className="file-path-wrapper">
                                    <input
                                    className="file-path validate"
                                    type="text"
                                    placeholder="Choose an image to upload"
                                    />
                                </div>
                                </div>
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