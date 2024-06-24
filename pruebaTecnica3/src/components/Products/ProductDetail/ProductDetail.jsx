import React from 'react'
import { Box} from '@mui/material'

export const ProductDetail = () => {
  const [porcentajeBarra, setPorcentajeBarra] = useState(0);
  const [texto, setTexto] = useState(false);

  const handleMouseEnter = () => setTexto(true);
  const handleMouseLeave = () => setTexto(false);

  return (
    <div className="detalles-container">
      <header className="migas">
        <Link className="btn" to="/">Volver a resultados</Link>
        <p>{producto.categoria}/{producto.marca}/<strong>{producto.nombre}</strong></p>
      </header>

      <section className="principal">
        <div className="imagenes">
          <div className="lista-imagenes">
            {producto.imagen.map((imagen, index) => (
              <div key={index} className="item-imagen">
                <img src={imagen} alt={`Imagen ${index}`} />
              </div>
            ))}
          </div>
          <div className="imagen-focus">
            <img src={producto.imagen[0]} alt="Imagen principal" />
            <FaHeart className="fa-regular fa-heart corazon" />
          </div>
        </div>

        <section className="detalles">
          <div className="detalles-generales">
            <div>
              <h3 className="nombre">{producto.nombre} 13-2MP 64G, 4GB RAM</h3>
              <div className="estrellas">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= producto.estrellas ? (
                    <FaStar key={star} className="fa-solid fa-star" />
                  ) : (
                    <FaStar key={star} className="fa-regular fa-star" />
                  )
                )}
              </div>
            </div>
            <div className="pago">
              <p className="oferta">{producto.precioOferta}</p>
              <p className="normal">{producto.precioNormal}</p>
              <ul>
                <li><FaCcMastercard /></li>
                <li><FaCcVisa /></li>
                <li><FaCcMastercard /></li>
                <li><FaCcVisa /></li>
              </ul>
            </div>
          </div>
          <div className="descripcion">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam suscipit eaque nulla! Ea molestiae, suscipit dolorum fugit inventore nesciunt adipisci assumenda debitis deserunt voluptatum explicabo quasi, eius accusamus sed....
            </span>
            <p><em>- Vér más -</em></p>
          </div>
          
          <div className="compra-segura">
            <span className="material-symbols-outlined">shield</span>
            <span className="texto-seguro"><strong>Compra segura con Macropay Protect</strong>
            <p>Devolución gratis (30 días)/12 meses de garantía de fábrica.</p></span>
          </div>

          <div className="vence">
            <p>La promoción vence en <time>24d 12h:43m</time></p>
          </div>

          <div className="ofertas-compra">
            <img src="../../../../assets/pictures/oferta.png" alt="Oferta" />
          </div>
        </section>
      </section>

      <article>
        <h5>Información Detallada del Producto</h5>
        <div className="informacion-producto">
          <div className="imagenes">
            <div className="lista-imagenes">
              {producto.imagen.map((imagen, index) => (
                <div key={index} className="item-imagen">
                  <img src={imagen} alt={`Imagen ${index}`} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="enganche">
            <div className="especificaciones">
              <header>
                <p className="otras">Otras Especificaciones</p>
                <p>Reviews (3)</p>
              </header>
              <div className="detalles">
                {producto.detalles.map((detalle, index) => (
                  <div key={index} className="detalles-item">
                    <p className="otras">{detalle.clave}</p>
                    <p>{detalle.valor}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="fondo">
              <div className="imagen">
                <img src="../../../../assets/pictures/enganche.png" alt="Enganche" />
              </div>
              <div className="porcentaje-enganche">
                <div className="cara">
                  <img src="../../../../assets/pictures/cara.png" alt="Cara" />
                </div>
                <div className="contenido">
                  <h5>¿Te falta una lanita?</h5>
                  <p>ENGANCHE ${ (520.00 + (520.00 * porcentajeBarra) / 100).toFixed(2) }</p>
                  <p>PAGO SEMANAL ${ (125.00 + (125.00 * porcentajeBarra) / 100).toFixed(2) }</p>
                </div>
                <div className="barra">
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
                </div>                                    
                <div className="compra">
                  <button 
                    type="button" 
                    className="btn"  
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                  >
                    {texto ? 'Comprar a Crédito' : 'Aplica ahora'}
                  </button>
                  <p>*Hasta $2,000 de manera fácil, rápida y confiable</p>
                </div>                        
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="relacionados">
        <h5>Productos Relacionados</h5>
        <div className="productos">
          {/* Aquí deberías mapear sobre los productos filtrados */}
          {productosFiltrados.map((producto, index) => (
            <Producto key={index} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
