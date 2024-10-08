import React from "react";
import "./aside.css";
import fire from "../images/fire.png";
import location from "../images/location.png";
import gujrat from "../images/gujrat.png";
import olympics from "../images/olympics.png";
import ipl from "../images/ipl.png";
import bhaskar from "../images/bhaskar.png";
import icdbor from "../images/icdbor.png";
import icentertai from "../images/icentertai.png";
import { useNavigate } from 'react-router-dom';

export default function Aside() {
  const navigate = useNavigate();

  const gotoTopNews = () => {
    navigate('/topNews')
  }
  const gotoMyCity = () => {
    navigate('/mycity')
  }
  const gotoMyGujrat = () => {
    navigate('/mygujrat')
  }
  const gotoOlampic = () => {
    navigate('/olampic')
  }

  return (
    <div>
      <aside className="bg-dark text-white">
        <ul className="pt-5">
          <li>
            <a href="#" onClick={() => gotoTopNews()}>
              <img src={fire} alt="" id="icon_img" /> <span>Top News</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => gotoMyCity()}>
              <img src={location} alt="" id="icon_img" /> <span> My City</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => gotoMyGujrat()}>
              <img src={gujrat} alt="" id="icon_img" /> <span> My Gujarat</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={() => gotoOlampic()}>  <img src={olympics} alt="" id="icon_img" /> <span> Olampic</span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={bhaskar} alt="" id="icon_img" /> <span> Bhaskar</span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={ipl} alt="" id="icon_img" /> <span> Cricket</span>
            </a>
          </li>
          <li>
            <a href="#">  <img src={icdbor} alt="" id="icon_img" /> <span> Orignal</span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={icentertai} alt="" id="icon_img" />{" "}
              <span> Entertainment</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
