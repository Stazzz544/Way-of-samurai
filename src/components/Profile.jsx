import contentBg from './../img/content/contentBg.jpeg';
import userPhoto from './../img/content/userPhoto.jpg';

const Profile = () => {
	return (
		<div className="app-content">
			<div className="app-content-flex-user-info">
				<div className="app-content__background">
					<img className="app-content__background-img" src={contentBg} />
				</div>
				<div className="app-content__user">
					<div className="app-content__user-photo">
						<img className="app-content__user-photo-img" src={userPhoto} />
					</div>
					<div className="app-content__user-info">
						<div className="app-content__user-info-item">Robin Hood</div>
						<div className="app-content__user-info-item">Date of Birth: 17 april 1244</div>
						<div className="app-content__user-info-item">City: London</div>
						<div className="app-content__user-info-item">Education: none</div>
						<div className="app-content__user-info-item">Web site: cocodjambo.ru</div>
					</div>
				</div>
			</div>
			<div className="app-content__post">
				<div className="app-content__post-new">My post</div>
				<form action="">
					<textarea name="" id=""></textarea>
					<div className="app-content__post-flex">
						<button>Send</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Profile;