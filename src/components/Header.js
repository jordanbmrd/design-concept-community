import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header-bgimg" style={{backgroundImage: "url('./header-bg.jpg')"}}></div>
      <div className="header-title">
        <p data-aos="fade-right" data-aos-duration="400">
          <span className="pinyon">&lt;3</span>
          SAD<br />
          COMM<br />
          UNITY<br />
        </p>
      </div>
    </header>
  );
}

export default Header;