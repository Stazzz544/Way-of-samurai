import React from 'react'
import * as axios from 'axios';
import Profile from "./Profile";
import { connect } from 'react-redux';
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';
import {infoAboutMe} from '../api/api'
 

class ProfileContainer extends React.Component{

	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2
		}
		infoAboutMe(userId, this.props.setUserProfile )
		
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