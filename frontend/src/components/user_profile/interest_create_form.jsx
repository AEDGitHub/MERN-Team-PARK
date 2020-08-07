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
        e.target.reset();
    }

    componentDidMount() {
        let createIntNameField = document.getElementById("create-interest-name");
        M.CharacterCounter.init(createIntNameField);
        M.textareaAutoResize(createIntNameField); 

        let createIntDescField = document.getElementById("create-interest-description");
        M.CharacterCounter.init(createIntDescField);
        M.textareaAutoResize(createIntDescField);

        M.FormSelect.init(this.FormSelect)
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

                            <div className="row">
                                <div className="interest-create-input-holder">
                                    <textarea
                                        id="create-interest-name"
                                        className="materialize-textarea"
                                        value={this.state.name}
                                        data-length="40"
                                        onChange={this.update('name')}
                                        required
                                    />
                                    <label htmlFor="create-interest-name">
                                        Interest Name
                                    </label>
                                </div>
                            </div>
                           
                            <div className="row">
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
                                        Interest Description
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="interest-create-input-holder">
                                    <select onChange={this.update('category')} defaultValue={"default"} required
                                        ref={FormSelect => { this.FormSelect = FormSelect; }}>
                                        <option value="default" disabled>Choose a Category</option>
                                        <option value="Outdoors & Adventure">Outdoors & Adventure</option>
                                        <option value="Food & Drink">Food & Drink</option>
                                        <option value="Hobbies & Crafts">Hobbies & Crafts</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
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