import React from 'react'
import './Writer.css'
import TextEditor from './TextEditor'
class Writer extends React.Component {
	render() {
		return(
			<div className="Writer">
				<TextEditor title={this.props.title} description={this.props.description}/>
			</div>
		)
	}
}

export default Writer

