import { connect } from 'react-redux';
import s from './Users.module.css'
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../redux/usersReduser'
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { getUsers } from '../api/api';


class UsersContainer extends React.Component{

	componentDidMount() {
		this.props.toggleIsFetching (true);
		
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching (false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount)
		});
	}
	
	onPageChanged = (pageNumber) => {
		this.props.toggleIsFetching (true);
		this.props.setCurrentPage(pageNumber);

		getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching (false);
			this.props.setUsers(data.items)

		});
	};
	render() { //метод render вернет jsx, пропс сюда не приходит
		return <>
			{ this.props.isFetching ? <Preloader 
													wripperStyle={s.globalLoaderWrapper}
													preloaderStyle={s.globalLoaderImg}
													/> : null }
			<Users totalUsersCount={this.props.totalUsersCount}
							pageSize={this.props.pageSize}
							currentPage ={this.props.currentPage}
							onPageChanged={this.onPageChanged}
							users={this.props.users}
							follow={this.props.follow}
							unfollow={this.props.unfollow}
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
		isFetching: state.usersPage.isFetching
	};
}


export default connect (mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
}) (UsersContainer);

