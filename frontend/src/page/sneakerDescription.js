import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SneakerProfile from "../component/sneakerProfile";

function SneakerDescription() {
  const [sneaker, setSneaker] = useState([]);
  const { sneakerId } = useParams();

  useEffect(() => {
    fetch(`https://d-sneaker-api.herokuapp.com/api/v1/sneaker/par/${sneakerId}`)
      .then((response) => response.json())
      .then((data) => setSneaker(data[0]))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <>
      <SneakerProfile {...sneaker} />
    </>
  );
}

export default SneakerDescription;
