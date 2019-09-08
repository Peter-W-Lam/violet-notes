import React from 'react'
import './Category.css'

class Category extends React.Component {


	render() {
		const circleStyle = {
			backgroundColor: this.props.color
		}
		return(
			<div className="Category">
				<div className="category-circle" style={circleStyle} >
				</div>
				<p>{this.props.name}</p>
			</div>
		)
	}
}

export default Category