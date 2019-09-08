import React from 'react'
import './Writer.css'
import TextEditor from './TextEditor'
class Writer extends React.Component {
	render() {
		return(
			<div className="Writer">
				<TextEditor />
			</div>
		)
	}
}

export default Writer

