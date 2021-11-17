import MusicDisplay from './MusicDisplay';
import './CoupDeBlues.css';

const CoupDeBlues = props => {
  return (
    <section className="sec1">
      <p className="sec1-title">
        <span>Coup de blues</span>
        <span className="pinyon">&lt;3</span>
      </p>

      <div className="sec1-musics">
        <div className="sec1-displays">
          <MusicDisplay
            title={ props.songs[0][1] }
            author={ props.songs[0][2] }
            img={ props.songs[0][0] }  />
          { props.songs.length >= 2 ?
          <MusicDisplay
            title={ props.songs[1][1] }
            author={ props.songs[1][2] }
            img={ props.songs[1][0] }  /> : null}
          { props.songs.length >= 3 ?
          <MusicDisplay
            title={ props.songs[2][1] }
            author={ props.songs[2][2] }
            img={ props.songs[2][0] }  /> : null }
        </div>

        <div className="sec1-quote" data-aos="fade-left">
          <img src="./quotation-mark.png" alt="Quotation mark" />
          <p>
            Les mots font<br />
            mal mais les<br />
            silences<br />
            tuent
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoupDeBlues;