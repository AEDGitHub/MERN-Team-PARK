import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
            password: this.state.password
        };

        this.props.login(user);
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

                    <h2 className="session-form-title">Login</h2>

                    <div className="row">
                        <div className="session-form-input-holder">
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
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
                                onChange={this.update('password')}
                                placeholder="Password"
                                required
                                className="validate"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="session-form-buttons-holder">

                            <div>
                                <input 
                                    className="session-form-button" 
                                    type="submit" 
                                    value="Login" 
                                />
                            </div>

                            <div >
                                <button 
                                    className="session-form-button" 
                                    onClick={this.handleDemoLogin}>
                                    Demo Login
                                </button>
                            </div>

                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);