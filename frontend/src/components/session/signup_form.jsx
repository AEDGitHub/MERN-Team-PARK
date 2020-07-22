import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        // this.clearedErrors = false;
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

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            password2: this.state.password2,
            slug: this.slug
        };
        
        this.props.signup(user, this.props.history)
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div className="session-error-holder">
                        {this.renderErrors()}
                    </div>
                    
                    <h2 className="session-form-title">Sign Up</h2>

                    <div className="row">
                        <div className="session-form-input-holder">
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
                        <div className="session-form-input-holder">
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
                        <div className="session-form-input-holder">
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

                    <div className="row">
                        <div className="session-form-buttons-holder">

                            <div>
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    className="session-form-button" 
                                />
                            </div>

                            <div>
                                <button 
                                    onClick={this.handleDemoLogin} 
                                    className="session-form-button">
                                    Demo Login
                                </button>
                            </div>

                        </div>
                    </div>        
                    
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);