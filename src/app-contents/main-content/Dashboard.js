import React from 'react'
import './Dashboard.css'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'
import CardCollection from './CardCollection'

class Dashboard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			query: ""
		}

		this.handleChange = this.handleChange.bind(this)
	}

	// Pass value down to the query 
	handleChange(value) {
		this.setState({query: value})
	}
	
	render() {
		return(
			<div className="Dashboard">
				<SearchBar handleChange={this.handleChange}/>
				<div className="categories-toolbar">
		        	<Toolbar />
				</div>
		        <CardCollection query={this.state.query} />
			</div>
		)
	}
}

export default Dashboard

