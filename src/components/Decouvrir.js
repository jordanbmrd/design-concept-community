import Player from './Player';
import './Decouvrir.css';

const Decouvrir = props => (
	<section className="sec3">
	    <div
	      className="sec3-title"
	      data-aos="fade-down">
	      <p>Découvrir&nbsp;&nbsp;&nbsp;</p>
	      <img src="./random-icon.svg" alt="Random" />
	    </div>

	    <Player
	    	songs={ props.songs } />
	</section>
);

export default Decouvrir;