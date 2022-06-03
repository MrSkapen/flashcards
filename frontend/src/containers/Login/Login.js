import React, {Component, useState} from 'react';

class Login extends Component {

    state = {
        courses: [],
        email: "",
        login: ""
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.email.value);

        if (!e.target.email.value) {
            alert("Email is required");
        } else if (!e.target.email.value) {
            alert("Valid email is required");
        } else if (!e.target.password.value) {
            alert("Password is required");
        } else if (
            e.target.email.value === "me@example.com" &&
            e.target.password.value === "123456"
        ) {
            alert("Successfully logged in");
            e.target.email.value = "";
            e.target.password.value = "";
        } else {
            fetch('http://localhost:8080/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: e.target.email.value, password: e.target.password.value})
            }).then(r => r.json())
                .then(data => {
                    localStorage.setItem('userToken', data.accessToken);
                    alert(data.message);
                })

        }
    };


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="nome@email.com.br"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"/>
                    </div>
                    <button className="primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
