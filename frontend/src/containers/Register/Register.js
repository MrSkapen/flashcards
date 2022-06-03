import React, { Component, useState } from 'react';

class Register extends Component {

    state = {
        courses: [],
        email: "",
        login: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.username.value);

        if (!e.target.email.value) {
            alert("Username is required");
        } else if (!e.target.email.value) {
            alert("Valid email is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else {
            fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
            }).then(r => r.json())
                .then(data => localStorage.setItem('userToken', data.accessToken))
                .then(alert("Successfully registered"));

        }
    };


    render () {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="nome@email.com.br" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <button className="primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Register;
