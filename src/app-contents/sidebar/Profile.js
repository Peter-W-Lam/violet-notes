import React from 'react'
import './Profile.css'
import ProfilePhoto from '../assets/profile.jpg'
import Arrow from '../assets/down-arrow.svg'
class Profile extends React.Component {
	render() {
		return(
			<div className="Profile">
				<img className="profile-picture" 
					 src={ProfilePhoto} 
					 alt="Profile of user" />
				<div className="profile-description">
					<p className="name">Nadya Santarini</p>
				</div>
				<img className="arrow"
					 src={Arrow}
					 alt="Arrow pointing down" />

			</div>
		)
	}
}

export default Profile