import "./home.css";
import React from "react";
import { Link } from "react-router-dom";

import { GiWaveSurfer } from "react-icons/gi";
const Home = () => {
  return (
    <div className="home-container">
      <Link to={`/shop/`}>
        <button className="tb-btn tb-btn2">
          <h4>Dive in</h4>
          <GiWaveSurfer size={28} />
        </button>
      </Link>
    </div>
  );
};

export default Home;
/*style={{
        backgroundImage: `url(${Wavebackground})`,
        height: "100vh",
      }}*/
