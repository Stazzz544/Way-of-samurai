import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {'API-KEY': '4b6af4cf-7cba-4221-ab58-606f68f1b7a3'}
});


export const usersAPI = {
	getUsers (currentPage, pageSize) {
		return instance.get(`/users?page=${currentPage}&count=${pageSize}}`)
		.then(response => response.data)
	},

	followUser (userID) {
		return instance.post(`/follow/${userID}`,{}, {
		}).then(resoponse => resoponse.data.resultCode)
	},

	unfollowUser (userID) {
		return instance.delete(`/follow/${userID}`, {
		}).then(resoponse => resoponse.data.resultCode)
	},

	infoAboutMe (userId, setUserProfile) {
		debugger
		instance.get(`/profile/${userId}`)
			.then(response => {setUserProfile(response.data);
			});
	}

}