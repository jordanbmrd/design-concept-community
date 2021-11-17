import AOS from 'aos';
import ReactPageScroller from 'react-page-scroller';
import './aos.css';
import './App.css';
import { Component } from 'react';
import Header from './components/Header';
import CoupDeBlues from './components/CoupDeBlues';
import Info from './components/Info';
import Decouvrir from './components/Decouvrir';
import Footer from './components/Footer';

/*
SPOTIFY API
curl -X "GET" "https://api.spotify.com/v1/playlists/6nxPNnmSE0d5WlplUsa5L3/tracks?market=FR" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQC3rBzE-eZjp-dRdiTd-VSSPTeBfYWWmlFw1VpEVM5gps-1OJY_6yQMKIDQgHazrPMA5POepotCnXVZNKDjD9y7WofuRL5TgnBLbQRHu-SmPzKxMfuGUNvDywp4QH-1Wtdi2emLiXT_OQy-9ChHF0uI0uYU1GzhzsckXBLyf29l"
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [['./music-1.jpg', 'Rivage', 'Pxrselow'], ['./music-2.jpg', 'Rivage', 'Pxrselow'], ['./music-3.jpg', 'Rivage', 'Pxrselow']],
    }
  }

  async componentDidMount() { 
    AOS.init();
    AOS.refresh();

    const spotifyResponse = await fetch('https://api.spotify.com/v1/playlists/6nxPNnmSE0d5WlplUsa5L3/tracks?market=FR', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQCefx2eHzBkpjOltBLStYyrSzq5hOLahKE_53W2Aj_0gMMsOlyJQarr00tcVhwjCElOK-mXUIrb8Ca6zEWIBGYkOtkroCUD-GBhTb_u7QyOs2yXK7b56dzy7tN_3CXUu_dO3LiUsOXnaXRMDang1PU-c1Sa-uS42j0ARUYkSGWG'
      }
    });
    const resp = spotifyResponse.json();

    resp.then(data => {
      const items = data.items;
      const random = new Array(3).fill().map(() => Math.floor(Math.random() * items.length));
      this.setState({
        songs: [
          [items[random[0]].track.album.images[0].url, items[random[0]].track.name, items[random[0]].track.artists[0].name],
          [items[random[1]].track.album.images[0].url, items[random[1]].track.name, items[random[1]].track.artists[0].name],
          [items[random[2]].track.album.images[0].url, items[random[2]].track.name, items[random[2]].track.artists[0].name]
        ]
      });
    });
  }

  render() {
    const { songs } = this.state;
    return (
      <div>
        <Header />
        <CoupDeBlues
          songs={ songs } />
        <Info />
        <Decouvrir
          songs={ songs } />

        <Footer />
      </div>
    );
  }
}

export default App;
