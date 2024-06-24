import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Typography, MenuItem, TextField, Select } from "@mui/material";
import "./ProductList.css";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckboxFilter from "../CheckBox/CheckboxFilter";
import marcas from "../../../assets/JSON/marcas.json";
import productos from "../../../assets/JSON/productos.json";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const opciones = [
    { label: "Mejores reviews", value: "mejores-reviews" },
    { label: "Más economicos", value: "mas-economicos" },
    { label: "Más costosos", value: "mas-costosos" },
  ];

  const items = [
    {
      name: "Imagen 1",
      description: "Descripción de la imagen 1",
      image: "https://via.placeholder.com/600",
    },
    {
      name: "Imagen 2",
      description: "Descripción de la imagen 2",
      image: "https://via.placeholder.com/600",
    },
    {
      name: "Imagen 3",
      description: "Descripción de la imagen 3",
      image: "https://via.placeholder.com/600",
    },
  ];

  return (
    <Box class="contenido">
      <Box class="lista-productos-container">
        <aside>
          <Box className="filtro">
            <Box sx={{ display: "flex", width: "100%" }}>
              <TextField sx={{ width: "40%" }} label="Ordenar por" />
              <Select
                sx={{ width: "60%", bgcolor: "green" }}
                defaultValue={opciones[0].label ?? "Mejores review"}
                variant="outlined"
                options={opciones}
              >
                {/* <select id="orden"> */}
                {/* {opciones.map((opciones) => (
                  <MenuItem
                    key={opciones.value}
                    value={isChecked}
                    onChange={setIsChecked}
                  >
                    {opciones.label}
                  </MenuItem>
                ))} */}
              </Select>
            </Box>
            {/* </select> */}
          </Box>
          <Box className="filtro-aside">
            <Box className="listado">
              <h4>Marcas</h4>
              <Box className="marcas">
                <Box className="marca">
                  {marcas.celulares.map((celular, index) => (
                    <CheckboxFilter
                      key={index}
                      label={celular.label}
                      value={isChecked}
                      onChange={setIsChecked}
                    />
                  ))}
                </Box>
              </Box>
              <Box className="section">
                <h4>Precio</h4>
                <Box className="precio">
                  <input type="text" placeholder="100" />
                  <p> - </p>
                  <input type="text" placeholder="5,000" />
                </Box>
              </Box>
              <Box className="section">
                <h4>Reviews</h4>
                <Box className="reviews">
                  <Box>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        className={`fa-star ${
                          star <= 4 ? "fa-solid" : "fa-regular"
                        }`}
                      ></i>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box className="section">
                <h4>Memoria</h4>
              </Box>
              <Box className="section">
                <h4>Rango</h4>
              </Box>
              <Box className="section">
                <h4>Cámara</h4>
              </Box>
            </Box>
          </Box>
        </aside>

        <main>
          <Box className="barra-busqueda">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Encuentra el producto que necesitas"
            />
            <select>
              <option></option>
            </select>
          </Box>
          <Box className="lista-productos">
            <ProductCard productos={productos} categoria={"celulares"} />
          </Box>
        </main>
      </Box>

      <Box className="ofertas">
        <header>
          <h5>Ofertas y Promociones</h5>
        </header>
        <Box className="carrusel">
          <img
            src="https://i.blogs.es/f8dbc1/los-mejores-precios-en-smartphones-a-plazos-en-verano-2018/650_1200.png"
            alt="imagen ofertas"
          />
          <button className="btn back">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <button className="btn next">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </Box>
        <Box className="indicadores">
          <RadioButtonCheckedOutlinedIcon className="indicador" />
          <RadioButtonUncheckedOutlinedIcon className="indicador" />
          <RadioButtonUncheckedOutlinedIcon className="indicador" />
        </Box>
      </Box>

      <section class="mas-vendidos">
        <header>
          <h5>Nuestro Productos Más Vendidos</h5>
        </header>
        <div class="productos">
          <div>Aca van los mas vendidos</div>
        </div>
      </section>
    </Box>
  );
};
