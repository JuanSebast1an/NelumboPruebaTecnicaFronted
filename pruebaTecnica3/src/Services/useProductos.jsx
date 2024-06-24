// src/services/useProductos.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const API_URI = "../../assets/JSON/productos.json";

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(API_URI);
        setProductos(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProductos();
  }, []);

  return productos;
};

export default useProductos;
