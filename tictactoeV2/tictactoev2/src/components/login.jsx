import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import TicTacToeV2 from './tictactoe.jsx';


export class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userinputName: '',
            userinputPassword: ''
           
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    onChangeText(e) {
        console.log(this.state)
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
        fetch("http://localhost:5000/login",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: this.state.userinputName, password: this.state.userinputPassword })
            })
            .then(response => {
                console.log(response.status)
                if (response.status === 200) {
                   return <Redirect to ='/tictactoe'/>
                } else if (response.status === 403) {
                    alert("name and password combination does not exist")
                }
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { value } = this.state;
        const re = new RegExp("^(?=.[A-Za-z])(?=.\\d)(?=.[@$!%#?&])[A-Za-z\\d@$!%*#?&]{8,}$");
        const isOk = re.test(value); if (!isOk) {
            return console.log(isOk);
        }

    }
    render() {
        return (
        
                <div className="base-container">
                    <div className="header">Login</div>
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
                        <button onClick={this.fetchData} type="button" className="btn">Login </button>
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
