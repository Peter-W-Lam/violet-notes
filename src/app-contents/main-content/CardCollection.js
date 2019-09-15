import React from 'react'
import './CardCollection.css'
import Card from './Card'
import cardData from './CardData.js'
class CardCollection extends React.Component {
	render() {
		
		// console.log(cardsData)
		const cardComponents = cardData.map((card) => {
			var query = this.props.query
			query = query.toUpperCase()
			
			// TODO: Clean up this if statement
			if (query != undefined) {
				if (card.title.toUpperCase().includes(query) || card.description.toUpperCase().includes(query)) {
					if (this.props.category) {
						if (this.props.category == card.category) {
							return (
								<Card title={card.title} 
								date={card.date} 
								category={card.category}
								description={card.description} />
							)
						}
					} else {
						return (
						<Card title={card.title} 
						date={card.date} 
						category={card.category}
						description={card.description} />
					)
					}

					
				}
			} else {
				return (
					<Card title={card.title} 
					date={card.date} 
					category={card.category}
					description={card.description} />
				)
			}
			
		}
		)
		
		return(
			<div className="CardCollection">
			{cardComponents}
			</div>
		)
	}
}

export default CardCollection