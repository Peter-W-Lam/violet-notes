import React from 'react'
import './SocialBar.css'
import Facebook from '../assets/facebook-logo.svg'
import Twitter from '../assets/twitter.svg'
import LinkedIn from '../assets/linkedin.svg'
class SocialBar extends React.Component {
	render() {
		return(
			<div className="SocialBar">
				<div className="icons">
					<img src={Facebook} alt="Facebook icon" />
					<img src={Twitter} alt="Twitter icon" />
					<img src={LinkedIn} alt="LinkedIn icon" />
				</div>
				<p>2017, All Rights Reserved</p>
			</div>
		)
	}
}

export default SocialBar