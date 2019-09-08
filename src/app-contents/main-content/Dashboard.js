import React from 'react'
import './Dashboard.css'
import SearchBar from './SearchBar'
import Toolbar from './Toolbar'
import CardCollection from './CardCollection'

class Dashboard extends React.Component {
	render() {
		return(
			<div className="Dashboard">
				<SearchBar />
				<div className="categories-toolbar">
		        	<Toolbar />
				</div>
		        <CardCollection />
			</div>
		)
	}
}

export default Dashboard

