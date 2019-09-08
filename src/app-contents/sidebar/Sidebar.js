import React from 'react'
import './Sidebar.css'
import MenuItem from './MenuItem'
import Category from './Category'
import SocialBar from './SocialBar'
import Profile from './Profile'
class Sidebar extends React.Component {
	render() {
		return(
			<div className="Sidebar">
				<Profile />
				
				<div className="pages">

					<MenuItem className="MenuItem" imageURI={require('../assets/home.svg')} alt="Home icon" name="Overview"/>
					<MenuItem className="MenuItem" imageURI={require('../assets/documents.svg')} alt="Document icon" name="Documents"/>
					<MenuItem className="MenuItem" imageURI={require('../assets/notes.svg')} alt="Notes icon" name="Notes"/>
					<MenuItem className="MenuItem" imageURI={require('../assets/calendar.svg')} alt="Calendar icon" name="Calendar"/>
					<MenuItem className="MenuItem" imageURI={require('../assets/headphones.svg')} alt="Headphones icon" name="Support"/>
					<div className="underline"></div>
				</div>
				<div className="line">
				</div>
				<div className="categories">
					<Category color="#53D1F0" name="Projects" />
					<Category color="#F3CC71" name="Business" />
					<Category color="#F29D53" name="Personal" />
				</div>
				<div className="line">
				</div>
				<SocialBar className="SocialBar"/>
			</div>
		)
	}
}

export default Sidebar