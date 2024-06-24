// src/services/useProducto.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducto = (id) => {
  const [producto, setProducto] = useState(null);
  const API_URI = "../../assets/JSON/productos.json";

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await axios.get(API_URI);
        const productos = response.data;
        const foundProducto = productos.find(producto => producto.id === id);
        setProducto(foundProducto || null);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchProducto();
  }, [id]);

  return producto;
};

export default useProducto;
