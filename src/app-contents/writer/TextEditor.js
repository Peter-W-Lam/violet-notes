import React from 'react'
import './TextEditor.css'
import Close from "../assets/close.png"
import Tags from './Tags'
import { Link } from "react-router-dom"
class TextEditor extends React.Component {
	render() {
		return(
			<div className="TextEditor">
				<Link className="close-link" to="/">
					<button className="close-btn">
						<img src={Close} alt="X to close editor" />
					</button>
				</Link>
				<div className="text-editor-contents">
					<input className="title-area" type="text" placeholder=" Enter a title..." />
					<div className="line"></div>
					<Tags />
					<textarea className="text-area" placeholder=" Write something beautiful!"></textarea>
				</div>
			</div>
		)
	}
}

export default TextEditor

