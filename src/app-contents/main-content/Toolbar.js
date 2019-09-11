import React from 'react'
import './Toolbar.css'
import Add from '../assets/add.png'
import { Link } from "react-router-dom"
class Toolbar extends React.Component {
	

	render() {
		const linkStyle = {
				textDecoration: "none"
			}
		
		return(
			<div className="Toolbar">
				<ul>
					<li>All</li>
					<li>Projects</li>
					<li>Business</li>
					<li>Personal</li>
				</ul>
				<Link style={linkStyle} to="/app/editor">
				<button className="add-button">
					<img src={Add} alt="Plus sign in circle"/>
					<p>Add new note</p>
				</button>
				</Link>
			</div>
		)
	}
}

export default Toolbar