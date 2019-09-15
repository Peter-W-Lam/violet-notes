import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { NONAME } from 'dns';
class Card extends React.Component {
	render() {
		var descrip = this.props.description;
		var title = this.props.title;
		if (title.length > 16) {
			if (descrip.length > 62) {
				descrip = descrip.slice(0, 62);
				descrip += "..."
			}
			
		}
		if (descrip.length > 85) {
			descrip = descrip.slice(0, 85)
			descrip += "..."
		}
		var categoryColor;
		switch(this.props.category) {
			case 1: 
				categoryColor = {
					backgroundColor: "#F3CC71"
				}
				break
			case 2:
				categoryColor = {
					backgroundColor: "#53D1F0"
				}
				break
			default: 
				categoryColor = {
					backgroundColor: "#F29D53"
				}
				break
		}
		return(
			<Link to="app/editor/" style={{textDecoration: "none"}}
			onClick={() => this.props.setWriter(this.props.title, this.props.description)}>
			<div className="Card">
				<p className="date">{this.props.date}</p>
				<div className="title-block">
					<div style={categoryColor} className="category-circle"></div>
					<h3 className="title">{this.props.title}</h3>
				</div>
				<p className="description">{descrip}</p>
				<div className="overlay"></div>
			</div>
			</Link>
		)
	}
}

export default Card