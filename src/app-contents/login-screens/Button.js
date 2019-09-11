import React from 'react'
import './Button.css'

class Button extends React.Component {
    render() {
        return(
            <button className={this.props.withColor ? 'Button withColor' : "Button plain"}
            onClick={this.props.onClick} >{this.props.name}</button>
        )
    }
}

export default Button
