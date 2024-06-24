import { useState, useEffect } from 'react';
import axios from 'axios';

const useMarcas = (categoria) => {
  const [marcas, setMarcas] = useState([]);
  const API_URI = "../../assets/JSON/marcas.json";

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await axios.get(API_URI);
        const data = response.data;
        setMarcas(data[categoria] || []);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchMarcas();
  }, [categoria]);

  return marcas;
};

export default useMarcas;
