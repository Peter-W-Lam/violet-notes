import React from 'react'
import './Login.css'
import Button from './Button'
import {CSSTransition} from 'react-transition-group'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.LoginScreen = this.LoginScreen.bind(this)
        this.SignupScreen = this.SignupScreen.bind(this)
        this.ForgotPassword = this.ForgotPassword.bind(this)
        this.updateLoginState = this.updateLoginState.bind(this)
        this.SentResetEmail = this.SentResetEmail.bind(this)
        this.state = {
            loginState: 1, 
            errorMessage: ""
        }
    }
    updateLoginState(num) {
        this.setState({loginState: num})
    }

    LoginScreen() {
        return (
            
            <div className="Login">
                <div className="top-right">
                    <Button onClick={() => this.updateLoginState(2)} name="SIGN UP" withColor={false} />
                </div>
                <CSSTransition transitionName="example">
                <h1>Welcome back!</h1>
                </CSSTransition>
                
                <p>To access your notes and other content, please sign in to your account</p>
                <p className="login-error-text">{this.state.errorMessage}</p>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button className="bottom-input-link btn-link"
                        onClick={() => this.updateLoginState(3)}>Forgot your password?</button>
                
                <div className="bottom-center">
                    <Link to="/app">
                        <Button name="LOG IN" withColor={true}/>
                    </Link>
                </div>
            </div>
           
        )
    }

    SignupScreen() {
        return (
                <div className="Login">
                    <div className="top-right">
                        <Button onClick={() => this.updateLoginState(1)} name="LOG IN" withColor={false}/>
                    </div>
                    <h1>Hello friend!</h1>
                    <p>Enter your details to save your notes and start an account with us!</p>
                    <input type="text" className="loginInput" placeholder="Name"/>
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <div className="bottom-center">
                        <Button name="SIGN UP" withColor={true}/>
                    </div>
                </div>
        )
    }

    ForgotPassword() {
        return (
            <div className="Login">
                    <div className="top-centered">
                        <Button onClick={() => this.updateLoginState(1)} name="SIGN UP" withColor={false}/>
                        <Button onClick={() => this.updateLoginState(1)} name="LOG IN" withColor={false}/>
                    </div>
                    <h1>Need a new password?</h1>
                    <p>It happens to the best of us! Enter your email below, and if you have an account, we’ll email you a reset link. </p>
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <div className="bottom-center">
                        <Button name="RESET" withColor={true} onClick={() => this.updateLoginState(4)}/>
                    </div>
                </div>
        )
    }

    SentResetEmail() {
        return (
            <div className="Login">
                <h1>Thanks!</h1>
                <p>We just sent you an email with a link to reset your password.</p>
                <div className="bottom-center">
                    <Button name="SIGN UP" withColor={false} onClick={() => this.updateLoginState(2)}/>
                    <Button name="LOG IN" withColor={false} onClick={() => this.updateLoginState(1)}/>
                </div>
            </div>
        )
    }
    render() {
        var loginComponent
        if (this.state.loginState === 1) {
            loginComponent = this.LoginScreen()
        } else if (this.state.loginState === 2) {
            loginComponent = this.SignupScreen()
        } else if (this.state.loginState === 3){
            loginComponent = this.ForgotPassword()
        } else {
            loginComponent = this.SentResetEmail()
        }
        return(
            <div className="outer-login">
                {loginComponent}
            </div>
        )
    }
}

export default Login
