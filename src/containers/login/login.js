import React, { Component } from "react";
import Footer from '../../components/footer';
import "./login.css";

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <div className="wrapper">
                    <div className="form-wrapper">
                        <h1>Log In</h1>
                        <form onSubmit={this.handleSubmit} noValidate>
                            <div className="email">
                                <label htmlFor="email">Email</label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="password">
                                <label htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="createAccount">
                                <button type="submit">Log in</button>
                                <small>Don't have an account yet?</small>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;