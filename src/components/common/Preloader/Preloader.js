import preloader from '../../../accets/loader/loader.svg';

let Preloader = (props) => {
	return (
		<div className={props.wripperStyle}>
			<img className={props.preloaderStyle} src={preloader} />
		</div>
	)
}

export default Preloader