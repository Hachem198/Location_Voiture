import React, { useEffect, useState } from "react";
import axios from "axios";
const api_url = `http://localhost:3000/admin/cars`;
const Usegetcars = () => {
  const [cars, setCars] = useState([]);
  const v = true;
  useEffect(() => {
    if (v == true) {
      axios.get(api_url).then((res) => {
        setCars(res.data);
      });
      v == false;
    }
  }, []);
  return cars;
};

export default Usegetcars;
