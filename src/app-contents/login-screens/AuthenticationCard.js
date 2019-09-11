import React from 'react'
import './AuthenticationCard.css'
import Login from './Login'
class AuthenticationCard extends React.Component {
    render() {
        return(
                <div className="AuthenticationCard">
                        <Login />
                </div>
        )
    }
}

export default AuthenticationCard