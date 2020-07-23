import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        this.slug = searchParams.get("group"); 
    }

    componentDidUpdate(prevProps) {
        if (this.props.errors !== prevProps.errors) {
            this.setState({ errors: this.props.errors })
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    onImageChange(e) {
        this.setState({ img: e.target.files[0] });
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData;
        if (this.props.formTitle === "Sign Up") {
            formData = Object.assign(this.state, { slug: this.slug });
        } else {
            const { email, firstName, lastName, password, password2, slug, img } = this.state;
            formData = new FormData();
            formData.append("email", email);
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            if (password) formData.append("password", password);
            if (password2) formData.append("password2", password2);
            if (slug) formData.append("slug", slug);
            if (img) formData.append("img", img);
        }

        this.props.userFormAction(formData, this.props.history)
    }

    handleDemoLogin(e) {
        e.preventDefault()

        let demoUser = {
            email: "demo@rebond.com",
            password: "demouser2020"
        }

        this.props.login(demoUser);
    }

    renderErrors() {
        return (
            <ul className="session-error-list">
                {Object.keys(this.state.errors).map((error, idx) => (
                    <li className="session-error-item" key={`error-${idx}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const formTitleClass = this.props.formTitle === "Sign Up" ? "session-form-title" : "user-edit-form-title";
        const formInputClass = this.props.formTitle === "Sign Up" ? "session-form-input-holder" : "user-edit-form-input";

        const passwordFields = (this.props.formTitle === "Sign Up" ? (
            <>
                <div className="row">
                    <div className="session-form-input-holder">
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                            placeholder="Password"
                            required
                            minLength="6"
                            maxLength="30"
                            className="validate"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="session-form-input-holder">
                        <input
                            type="password"
                            value={this.state.password2}
                            onChange={this.update("password2")}
                            placeholder="Confirm Password"
                            required
                            minLength="6"
                            maxLength="30"
                            className="validate"
                        />
                    </div>
                </div> 
            </>
        ) : null)
        
        const imageInput = (this.props.formTitle === "Edit Profile" ? (
            <div className="row">
                <div className={`file-field ${formInputClass}`}>
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
                            className={`file-path validate ${formInputClass}`}
                            type="text"
                            placeholder="Choose an image to upload"
                        />
                    </div>
                </div>
            </div>
        ) : null)

        const demoLoginButton = (this.props.formTitle === "Sign Up" ? (
            <div>
                <button
                    onClick={this.handleDemoLogin}
                    className="session-form-button">
                    Demo Login
                </button>
            </div>
        ) : null)
        
        return (
            <div className="modal-content">
                <form onSubmit={this.handleSubmit}>

                    <div className="session-error-holder">
                        {this.renderErrors()}
                    </div>
                    
                    <h2 className={formTitleClass}>{this.props.formTitle}</h2>

                    <div className="row">
                        <div className={formInputClass}>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={this.update("email")}
                                placeholder="Email"
                                required
                                className="validate"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className={formInputClass}>
                            <input 
                                type="text"
                                value={this.state.firstName}
                                onChange={this.update('firstName')}
                                placeholder="First Name"
                                required
                                className="validate"
                            />
                        </div>
                    </div>  

                    <div className="row">
                        <div className={formInputClass}>
                            <input 
                                type="text"
                                value={this.state.lastName}
                                onChange={this.update('lastName')}
                                placeholder="Last Name"
                                required
                                className="validate"
                            />
                        </div>
                    </div>  

                    {imageInput}

                    {passwordFields}

                    <div className="row">
                        <div className="session-form-buttons-holder">

                            <div>
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    className="session-form-button modal-close" 
                                />
                            </div>

                            {demoLoginButton}

                        </div>
                    </div>        
                    
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);