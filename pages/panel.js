import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Panel() {
  const [fetcedData, setFetchedData] = useState();
  async function getData() {
    const res = await axios.get("http://localhost:8000/api/adminpanel");
    const data = res.data;
    console.log(data);
    //  setFetchedData(data)
    //  console.log(fetcedData)
  }
  useEffect(() => {
    getData();
  }, []);
  return <div>Panel</div>;
}

export default Panel;
