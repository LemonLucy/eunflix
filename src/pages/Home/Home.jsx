import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import info_icon from '../../assets/info_icon.png';
import play_icon from '../../assets/play_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero Title" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            voluptatibus quidem distinctio delectus illum? Quibusdam id unde
            accusantium provident recusandae pariatur ab, soluta sequi non. Eum,
            exercitationem! Cupiditate, tempora amet.
          </p>
          <div className="hero-btns">
            <button className="home-btn play">
              <img src={play_icon} alt="Play Icon" />
              Play
            </button>
            <button className="home-btn dark-btn">
              <img src={info_icon} alt="Info Icon" />
              More Info
            </button>
          </div>
          <br></br>
          <TitleCards />
        </div>

      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
