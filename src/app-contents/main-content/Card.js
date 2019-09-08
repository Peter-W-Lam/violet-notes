import React from 'react'
import './Card.css'

class Card extends React.Component {
	render() {
		var descrip = this.props.description;
		if (descrip.length > 85) {
			descrip = descrip.slice(0, 85)
		}
		return(
			<div className="Card">
				<p className="date">{this.props.date}</p>
				<div className="title-block">
					<div className="category-circle"></div>
					<h3 className="title">{this.props.title}</h3>
				</div>
				<p className="description">{descrip}</p>
				<div className="overlay"></div>
			</div>
		)
	}
}

export default Card