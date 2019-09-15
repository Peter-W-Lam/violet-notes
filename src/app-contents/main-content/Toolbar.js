import React from 'react'
import './Toolbar.css'
import Add from '../assets/add.png'
import { Link } from "react-router-dom"
class Toolbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			lastButton: 0
		}

		this.updateCategory = this.updateCategory.bind(this)
	}	

	updateCategory(category) {
		this.setState({lastButton: category})
		this.props.getCategory(category)
	}



	render() {
		const linkStyle = {
			textDecoration: "none"
		}
		
		return(
			<div className="Toolbar">
				<div className="categories">
					<button onClick={() => this.updateCategory(0)}
							id={this.state.lastButton == 0 ? "selected" : ""}>All</button>
					<button onClick={() => this.updateCategory(1)}
							id={this.state.lastButton == 1 ? "selected" : ""}>Projects</button>
					<button onClick={() => this.updateCategory(2)}
							id={this.state.lastButton == 2 ? "selected" : ""}>Business</button>
					<button onClick={() => this.updateCategory(3)}
							id={this.state.lastButton == 3 ? "selected" : ""}>Personal</button>
				</div>
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