import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ""
		}
		this.searchChanged = this.searchChanged.bind(this)

	}

	searchChanged(e) {
		this.setState({value: e.target.value}, () => {
			this.props.handleChange(this.state.value)
		})
	}
	render() {
		return(
			<div className="SearchBar">
				<input type="text" value={this.state.value} onChange={this.searchChanged}/>
			</div>
		)
	}
}

export default SearchBar