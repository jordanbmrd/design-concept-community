import './Player.css';

const Player = props => (
  <>
    <div className="player">
      <div
        className="player-image"
        style={{ backgroundImage: `url(${ props.songs[0][0] })` }}
        data-aos="fade-up"></div>
      <p
        className="player-infos"
        data-aos="fade-up">
        { props.songs[0][1] }<br />
        <span className="player-author">{ props.songs[0][2] }</span>
        <img src="./heart-icon.png" alt="Like" />
      </p>
    </div>

    <div
      className="sec3-left-image"
      style={{ backgroundImage: `url(${ props.songs[1][0] })` }}
      data-aos="fade-left"></div>
    <div
      className="sec3-right-image"
      style={{ backgroundImage: `url(${ props.songs[2][0] })` }}
      data-aos="fade-right"></div>
  </>
);

export default Player;