import React from 'react'
import './MenuItem.css'

class MenuItem extends React.Component {
	render() {
		return(
			<div className="MenuItem">
				<img src={this.props.imageURI} alt={this.props.alt} />
				<p>{this.props.name}</p>
			</div>
		)
	}
}

export default MenuItem