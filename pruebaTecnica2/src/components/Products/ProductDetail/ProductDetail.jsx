import React, {useState} from 'react'
import { Box, Typography} from '@mui/material'
import imagenPromo from '../../../assets/imagenPromo.png'
import enganche from '../../../assets/hitch.png'
import carita from '../../../assets/cara.png'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import './ProductDetail.css'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 
import productos from "../../../assets/JSON/productos.json";
import { useParams } from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard'

export const ProductDetail = () => {
  const [porcentajeBarra, setPorcentajeBarra] = useState(0);
  const [texto, setTexto] = useState(false);

  const handleMouseEnter = () => setTexto(true);
  const handleMouseLeave = () => setTexto(false);

  const { productId } = useParams();
  const product = productos.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  
  return ( 
    <Box className="detalles-container">
      <header className="migas">
        <Link className="btn" to={`/productos/${product.categoria}`}>Volver a resultados</Link>
        <p>{product.categoria}/{product.marca}/<strong>{product.nombre}</strong></p>
      </header>

      <Box className="principal">
        <Box className="imagenes">
          <Box className="lista-imagenes">
            {product.imagen.map((imagen, index) => (
              <Box key={index} className="item-imagen">
                <img src={imagen} alt={`Imagen ${index}`} />
              </Box>
            ))}
          </Box>
          <Box className="imagen-focus">
            <img src={product.imagen[0]} alt="Imagen principal" />
            <FavoriteBorderOutlinedIcon className="fa-regular fa-heart corazon" />
          </Box>
        </Box>

        <Box className="detalles">
          <Box className="detalles-generales">
            <Box>
              <h2 className="nombre">{product.nombre} 13-2MP 64G, 4GB RAM</h2>
              <Box className="estrellas">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className={`fa-solid fa-star ${star <= product.estrellas ? '' : 'fa-regular'}`}></i>
                ))}
              </Box>
            </Box>
            <Box className="pago">
              <p className="ofertaaa">{product.precioOferta}</p>
              <p className="normal">{product.precioNormal}</p>
              <ul>
                <li><FaCcMastercard /></li>
                <li><FaCcVisa /></li>
                <li><FaCcMastercard /></li>
                <li><FaCcVisa /></li>
              </ul>
            </Box>
          </Box>
          <Box className="descripcion">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam suscipit eaque nulla! Ea molestiae, suscipit dolorum fugit inventore nesciunt adipisci assumenda debitis deserunt voluptatum explicabo quasi, eius accusamus sed....
            </span>
            <p><em>- Vér más -</em></p>
          </Box>
          
          <Box className="compra-segura">
            <span className="material-symbols-outlined"><ShieldOutlinedIcon/></span>
            <span className="texto-seguro"><strong>Compra segura con Macropay Protect</strong>
            <p>Devolución gratis (30 días)/12 meses de garantía de fábrica.</p></span>
          </Box>

          <Box className="vence">
            <p>La promoción vence en <time>24d 12h:43m</time></p>
          </Box>

          <Box className="ofertas-compra">
            <img src={imagenPromo} alt="Oferta" />
          </Box>
        </Box>
      </Box>

      <article>
        <h5>Información Detallada del Producto</h5>
        <Box className="informacion-producto">
          <Box className="imagenes">
            <Box className="lista-imagenes">
              {product.imagen.map((imagen, index) => (
                <Box key={index} className="item-imagen">
                  <img src={imagen} alt={`Imagen ${index}`} />
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box className="enganche">
            <Box className="especificaciones">
              <header>
                <p className="otras">Otras Especificaciones</p>
                <p>Reviews (3)</p>
              </header>
              <Box className="detalles">
                {product.detalles.map((detalle, index) => (
                  <Box key={index} className="detalles-item">
                    <p className="otras">{detalle.clave}</p>
                    <p>{detalle.valor}</p>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="fondo">
              <Box className="imagen">
                <img src={enganche} alt="Enganche" />
              </Box>
              <Box className="porcentaje-enganche">
                <Box className="cara">
                  <img src={carita} alt="Cara" />
                </Box>
                <Box className="contenido">
                  <h5>¿Te falta una lanita?</h5>
                  <p>ENGANCHE ${ (520.00 + (520.00 * porcentajeBarra) / 100).toFixed(2) }</p>
                  <p>PAGO SEMANAL ${ (125.00 + (125.00 * porcentajeBarra) / 100).toFixed(2) }</p>
                </Box>
                <Box className="barra">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={porcentajeBarra} 
                    onChange={(e) => setPorcentajeBarra(e.target.value)} 
                    className="desplazar" 
                  />
                  <span className="desplazar-valor">{porcentajeBarra}%</span>
                  <p>Enganche</p>
                </Box>                                    
                <Box className="compra">
                  <button 
                    type="button" 
                    className="btn"  
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                  >
                    {texto ? 'Comprar a Crédito' : 'Aplica ahora'}
                  </button>
                  <p>*Hasta $2,000 de manera fácil, rápida y confiable</p>
                </Box>                        
              </Box>
            </Box>
          </Box>
        </Box>
      </article>


      <Box sx={{marginTop:"80px"}}>
      <Box className="mas-vendidos">
        <header>
          <h5>Productos relacionados</h5>
        </header>
        
        <ProductCard productos={productos} categoria={product.categoria} />
      </Box>
      </Box>
      

    </Box>

    


   );


}
