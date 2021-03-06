
import React from 'react'
import Profile from "./Profile";
import { connect } from 'react-redux';
import {setUserProfile, getInfoAboutMe} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import {usersAPI} from '../api/api'

class ProfileContainer extends React.Component{

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2
		}
		getInfoAboutMe(userId, this.props.setUserProfile)
		
		//usersAPI.infoAboutMe(userId, this.props.setUserProfile )
	}


	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);