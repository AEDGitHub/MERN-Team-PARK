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
            <ul>
                {Object.keys(this.state.errors).map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>

                        <h2 className="center">Login</h2>

                        <div className="row">
                            <div className="input-field col s8 m6 l4 offset-l4 offset-m3 offset-s2">
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
                            <div className="input-field col s8 m6 l4 offset-l4 offset-m3 offset-s2">
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
                            <div className="col s8 m6 l4 offset-l4 offset-m3 offset-s2">
                                <div className="left">
                                    <input 
                                        className="btn col" 
                                        type="submit" 
                                        value="Login" 
                                    />
                                </div>

                                <div className="right">
                                    <button 
                                        className="btn col" 
                                        onClick={this.handleDemoLogin}>
                                        Demo Login
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {this.renderErrors()}

                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);