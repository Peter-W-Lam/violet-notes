import React from 'react'
import './CardCollection.css'
import Card from './Card'
import cardData from './CardData.js'
class CardCollection extends React.Component {
	render() {

		// console.log(cardsData)
		const cardComponents = cardData.map(card => <Card title={card.title} 
														   date={card.date} 
														   description={card.description} />)

		return(
			<div className="CardCollection">
			{cardComponents}
			</div>
		)
	}
}

export default CardCollection