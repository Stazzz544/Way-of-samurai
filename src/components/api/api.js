import * as axios from 'axios'

const baseUrl = `https://social-network.samuraijs.com/api/1.0`

const instance = axios.create({
	withCredentials: true,
	headers: {'API-KEY': 'a226a8a4-a574-455d-9792-fc8d5f462604'}
});

export const getUsers = (currentPage, pageSize) => {
	return axios.get(`${baseUrl}/users?page=${currentPage}&count=${pageSize}}`, {
		withCredentials: true,
	}).then(response => response.data)
}

export const followUser = (userID) => {
	return axios.post(`${baseUrl}/follow/${userID}`, {
		withCredentials: true,
		headers: {'API-KEY': 'a226a8a4-a574-455d-9792-fc8d5f462604'}
	}).then(resoponse => resoponse.data.resultCode)
}

export const unfollowUser = (userID) => {
	return axios.delete(`${baseUrl}/follow/${userID}`,{}, {
		withCredentials: true,
		headers: {'API-KEY': 'a226a8a4-a574-455d-9792-fc8d5f462604'}
	}).then(resoponse => resoponse.data.resultCode)
}

export const infoAboutMe  = (userId, setUserProfile) => {
	axios.get(`${baseUrl}/profile/${userId}`)
		.then(response => {setUserProfile(response.data);
		});
}