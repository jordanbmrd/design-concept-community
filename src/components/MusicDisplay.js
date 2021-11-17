import "./MusicDisplay.css";

const MusicDisplay = props => {
  return (
  		<div
  			className="musicDisplay"
  			data-aos="fade-right">

  			<div className="musicDisplay-infos">
  				<div className="musicDisplay-infos-main">
  					<img src={props.img} alt="Cover" />
	  				<p>
	  					<span className="musicDisplay-title">{props.title}</span><br />
	  					<span className="musicDisplay-author">{props.author}</span>
	  				</p>
  				</div>
  				<div className="musicDisplay-infos-btn">
  					<img src="./share-btn.svg" alt="Share" />
  					<img src="./like-btn.svg" alt="Like" />
  				</div>
  			</div>
  			
  			<div className="bg-image" style={{ backgroundImage: `url(${props.img})` }}></div>
      		<div className="bg-rectangle"></div>
      		<div className="bg-rectangle low"></div>
      	</div>
  );
}

export default MusicDisplay;