import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Box,
  Typography,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import "./ProductList.css";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import CheckboxFilter from "../CheckBox/CheckboxFilter";
import marcas from "../../../assets/JSON/marcas.json";
import productos from "../../../assets/JSON/productos.json";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const [isChecked, setIsChecked] = useState(false);
  const opciones = [
    { label: "Mejores reviews", value: "mejores-reviews" },
    { label: "Más economicos", value: "mas-economicos" },
    { label: "Más costosos", value: "mas-costosos" },
  ];

  const categorias = [
    { label: "Todas las Categorías", value: "todas-categorias" },
    { label: "Más Rápidos", value: "rapidos" },
    { label: "Recientes", value: "recientes" }
  ];

  
  const { productCategory } = useParams();


  return (
    <Box class="contenido">
      <Box class="lista-productos-container">
        <Box sx={{ width: "25%" }}>
          <Box className="filtro">
            <Box
              sx={{
                display: "flex",
                width: "100%",
                height: "40px",
                alignItems: "center",
                mt: 2,
                "&:MuiTextField-root": {
                  width: "40%",
                  bgcolor: "red",
                  color: "red",
                },
              }}
            >
              <TextField
                sx={{
                  width: "40%",
                  "& .MuiOutlinedInput-root": {
                    fontSize: "12px",
                  },
                }}
                placeholder="Ordenar Por"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                size="small"
              />
              <Autocomplete
                options={opciones}
                defaultValue="Mejores reviews"
                disablePortal
                sx={{ width: "60%" }}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        fontSize: "12px",
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Box>
          <Box>
            <Box sx={{ bgcolor: "white", p: 2, mt: 2 }}>
              <TextH4 label="Marcas" />
              <Box className="marcas">
                <Box className="marca">
                  {
                  marcas[productCategory] && 
                  marcas[productCategory].map((celular) => (
                    <CheckboxFilter
                      key={celular.id}
                      label={celular.label}
                      value={isChecked}
                      onChange={setIsChecked}
                    />
                  ))}
                </Box>
              </Box>
              <Box className="section">
                <TextH4 label="Precio" />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    placeholder="100"
                    size="small"
                    sx={{ width: "50%" }}
                  />
                  <Typography sx={{ mx: 1 }}> - </Typography>
                  <TextField
                    placeholder="5,000"
                    size="small"
                    sx={{ width: "50%" }}
                  />
                </Box>
              </Box>
              <Box className="section">
                <TextH4 label="Reviews" />
                <Box className="reviews">
                  <Box>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i
                        key={star}
                        style={{ color: "#f0c14b" }}
                        className={`fa-star ${
                          star <= 4 ? "fa-solid" : "fa-regular"
                        }`}
                      ></i>
                    ))}
                  </Box>
                </Box>
              </Box>
              <Box className="section">
                <TextH4 label="Memoria" />
              </Box>
              <Box className="section">
                <TextH4 label="Rango" />
              </Box>
              <Box className="section">
                <TextH4 label="Cámara" />
              </Box>
            </Box>
          </Box>
        </Box>

        <main>
          <Box className="barra-busqueda">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Encuentra el producto que necesitas"
            />
            <select>
              {categorias.map((categoria, index) => (
                <option key={index} value={categoria.value}>{categoria.label}</option>
              ))}
            </select>
          </Box>
          <Box className="lista-productos">
            <ProductCard productos={productos} categoria={productCategory} />
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
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="btn next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Box>
        <Box className="indicadores">
          <RadioButtonCheckedOutlinedIcon className="indicador" />
          <RadioButtonUncheckedOutlinedIcon className="indicador" />
          <RadioButtonUncheckedOutlinedIcon className="indicador" />
        </Box>
      </Box>

      <section className="mas-vendidos">
        <header>
          <h5>Nuestro Productos Más Vendidos</h5>
        </header>
        <ProductCard productos={productos} categoria={"celulares"} />
      </section>
      

    </Box>
  );
};

const TextH4 = ({ label }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontSize: "16px",
        color: "#0446b3",
        fontWeight: "bolder",
        py: 1,
      }}
    >
      {label}
    </Typography>
  );
};
