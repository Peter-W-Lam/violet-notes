import React from 'react'
import './Dashboard.css'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'
import CardCollection from './CardCollection'

class Dashboard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			query: "", 
			category: 0
		}

		this.handleChange = this.handleChange.bind(this)
		this.getCategory = this.getCategory.bind(this)
	}

	// Pass value down to the query 
	handleChange(value) {
		this.setState({query: value})
	}

	getCategory(value) {
		this.setState({category: value})
	}
	
	render() {
		return(
			<div className="Dashboard">
				<SearchBar handleChange={this.handleChange}/>
				<div className="categories-toolbar">
		        	<Toolbar getCategory={this.getCategory}/>
				</div>
		        <CardCollection query={this.state.query} category={this.state.category}/>
			</div>
		)
	}
}

export default Dashboard

