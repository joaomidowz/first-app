import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";


async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const addPlanet = (new_planet) => {
    setPlanets([...planets, new_planet])
  }


  return (
    <Fragment>
      <h3>Planets list</h3>
      <hr/>
      <hr />
      {planets.map((planet) => 
        <Planet
          id={planet.id}
          title={planet.title}
          desc={planet.desc}
          img_url={planet.img_url}
          link={planet.link}
        />
        )}

    </Fragment>
  );
};

export default Planets;
