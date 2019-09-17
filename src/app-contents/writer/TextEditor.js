import React from 'react'
import './TextEditor.css'
import Close from "../assets/close.png"
import Tags from './Tags'
import { Link } from "react-router-dom"
class TextEditor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: this.props.title, 
			description: this.props.description
		}
	}

	render() {
		return(
			<div className="TextEditor">
				<Link className="close-link" to="/app">
					<button className="close-btn">
						<img src={Close} alt="X to close editor" />
					</button>
				</Link>
				<div className="text-editor-contents">
					<input className="title-area" 
						   type="text" 
						   placeholder=" Enter a title..." 
						   value={this.state.title}
						   onChange={(e) => {this.setState({title: e.target.value})}}/>
					<div className="line"></div>
					<Tags />
					<textarea className="text-area" 
							  placeholder=" Write something beautiful!" 
							  value={this.state.description}
							  onChange={(e) => {this.setState({description: e.target.value})}}></textarea>
				</div>
			</div>
		)
	}
}

export default TextEditor

