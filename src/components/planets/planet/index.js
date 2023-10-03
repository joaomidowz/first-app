import React, { Fragment, useState, useEffect } from "react";
import GrayImg from "../../shared/gray_img/index";
import Desc_link from "../../shared/desc_link";
import Form from "./form";
import { Link } from "react-router-dom";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite])
  }


  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.title}</u>
      </h4>
    );
  else title = <h4>{props.title}</h4>;

  return (
    <div>
      {title}
      <Desc_link desc={props.desc} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <Link to={`/planet/${props.id}`}/>
      <h4>Satelites</h4>
      <hr/>
      <Form addSatellite={addSatellite}/>
      <hr/>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
