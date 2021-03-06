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
        let imgFile = e.target.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ img: imgFile, photoUrl: fileReader.result });
        };
        if (imgFile) {
            fileReader.readAsDataURL(imgFile);
        };

        // this.setState({ img: imgFile });
    }

    render() {

        const profilePicture = (this.state.img ? (
                <div className="user-edit-form-image">
                    <img
                        src={this.state.photoUrl || this.state.img} alt="user-profile"
                        // className="responsive-img"
                    />
                </div>
        ) : (
                <i className="material-icons">account_circle</i>
            ))

        return (
            <div className="modal-content">
                <div>
                    <form 
                        className="interest-create-container" 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="interest-create-content">

                            <div className="user-edit-form-title">
                                <h4 className="interest-create-title">Edit User</h4>
                                {profilePicture}
                            </div>

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

                            <div className="form-buttons">
                                <input
                                    type="submit"
                                    value="Save Changes"
                                    className={`interest-create-button modal-close 
                                ${this.state.firstName === "" || this.state.lastName === "" ||
                                            this.state.email === "" ? "disabled" : ""}`}
                                />
                                <button className="interest-create-button red lighten-2 waves-effect waves-light modal-close">Cancel</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default UserEditForm;
