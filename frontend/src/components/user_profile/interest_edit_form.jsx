import React from 'react';
import M from 'materialize-css';

class InterestEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.interest;
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { _id, name, description, category, img } = this.state;
        let formData = new FormData();
        formData.append("_id", _id);
        formData.append("name", name);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("user", this.props.currentUser);
        if (img) formData.append("img", img);
        
        this.props.updateInterest(formData);
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

    onImageChange(e) {
        this.setState({ img: e.target.files[0] });
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
                                    onChange={this.update('category')}
                                    value={this.state.category}
                                >
                                    <option value="">Choose a Category</option>
                                    <option value="Outdoors & Adventure" >Outdoors & Adventure</option>
                                    <option value="Food & Drink" >Food & Drink</option>
                                    <option value="Hobbies & Crafts" >Hobbies & Crafts</option>
                                    <option value="Other" >Other</option>
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

                            <input type="submit" value="Edit Interest" className="interest-create-button modal-close" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default InterestEditForm;