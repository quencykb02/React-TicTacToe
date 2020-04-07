import React from 'react';
import './register.css';
import { Redirect } from 'react-router-dom';
// import { login } from '../utilis/utilis';


class Register extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userinputName: '',
            userinputPassword: '',
            isRegistered: false



        }
        this.onChangeText = this.onChangeText.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    onChangeText(e) {

        if (e.target.placeholder === 'username') {
            this.setState({
                userinputName: e.target.value,

            })

        } if (e.target.placeholder === 'password') {
            this.setState({
                userinputPassword: e.target.value,

            })
        }


    }
    fetchData(e) {
        e.preventDefault();

        fetch("http://localhost:5000/register",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userinputName: this.state.userinputName, userinputPassword: this.state.userinputPassword })
            })
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                    this.setState({
                        isRegistered: true
                    })
                    alert("welcome!")
                } else if (response.status === 403) {
                    alert("something went wrong with the registration")
                }
            })
    }


    render() {
        if (this.state.isRegistered === true) {

            return <Redirect to="/" />
        }
        return (

            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Name</label>
                            <input type="text" name="username" placeholder="username" onChange={this.onChangeText} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" onChange={this.onChangeText} />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={this.fetchData} type="button" className="btn">Register</button>
                    <a href="/"><button>Login</button></a>
                    {/* <button onClick="/">Register</button> */}
                </div>

                {/* <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path='/tictactoe' component={TicTacToeV2} />
                    </Switch> */}
                {/* https://tylermcginnis.com/react-router-programmatically-navigate/ */}
            </div>

        )
    }
}


export default Register;