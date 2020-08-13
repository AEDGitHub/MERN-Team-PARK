import React from "react";

class UserEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, firstName, lastName, password, password2, slug, img } = this.state;
        let formData = new FormData();
        formData.append("email", email);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        if (password) formData.append("password", password);
        if (password2) formData.append("password2", password2);
        if (slug) formData.append("slug", slug);
        if (img) formData.append("img", img);

        this.props.updateUser(formData, this.props.history)
    }

    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value,
            });
    }

    onImageChange(e) {
        this.setState({ img: e.target.files[0] });
    }

    render() {

        return (
            <div className="modal-content">
                <div>
                    <form 
                        className="interest-create-container" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="interest-create-content">

                            <h4 className="interest-create-title">Edit User</h4>

                            <div className="row">
                                <div className="interest-create-input-holder">
                                    <input
                                        id="edit-user-email-input"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.update("email")}
                                        required
                                        className="validate"
                                    />
                                    <label htmlFor="edit-user-email-input" className="active">
                                        Email *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="interest-create-input-holder">
                                    <input
                                        id="edit-user-firstname-input"
                                        type="text"
                                        value={this.state.firstName}
                                        onChange={this.update('firstName')}
                                        required
                                        className="validate"
                                    />
                                    <label htmlFor="edit-user-firstname-input" className="active">
                                        First name *
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="interest-create-input-holder">
                                    <input
                                        id="edit-user-lastname-input"
                                        type="text"
                                        value={this.state.lastName}
                                        onChange={this.update('lastName')}
                                        required
                                        className="validate"
                                    />
                                    <label htmlFor="edit-user-lastname-input" className="active">
                                        Last name *
                                    </label>
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
                                            className={`file-path validate`}
                                            type="text"
                                            placeholder="Choose an image to upload"
                                        />
                                    </div>
                                </div>
                            </div>


                            <input
                                type="submit"
                                value="Save Changes"
                                className={`interest-create-button modal-close 
                                ${this.state.firstName === "" || this.state.lastName === "" ||
                                this.state.email === "" ? "disabled" : ""}`}
                            />

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserEditForm;
