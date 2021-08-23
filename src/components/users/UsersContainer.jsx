import { connect } from 'react-redux';
import s from './Users.module.css'
import { 
	follow, 
	unfollow, 
	setCurrentPage, 
	getUsers } from '../../redux/usersReduser'
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'



class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {

		this.props.getUsers(pageNumber, this.props.pageSize);
	};
	render() { //метод render вернет jsx, пропс сюда не приходит
		return <>
			{this.props.isFetching ? <Preloader
				wripperStyle={s.globalLoaderWrapper}
				preloaderStyle={s.globalLoaderImg}
			/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}

}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	};
}


export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	getUsers,

})(UsersContainer);

