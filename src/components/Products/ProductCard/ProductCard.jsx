import React, {useState} from 'react';
import './ProductCard.css'
import { ProductDetailModal } from '../ProductDetailModal/ProductDetailModal';


export const ProductCard = ({ productos, categoria }) => {
    
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
        setMostrarModal(true);
    }

    const cerrarModal = () => {
        setMostrarModal(false);
    }
    /*
        <div className="productos row">
            {productos.map((producto) => (
                <div key={producto.id} className="producto" style={{ display: producto.categoria === categoria ? 'block' : 'none' }}>
                    <img src={producto.imagen[0]} alt="" className="imagen" />
                    <img src={producto.imagen[1]} alt="" className="imagen img2" onClick={() => history.push(`/detalles/${producto.id}`)} />
                    <i className="fa-regular fa-heart corazon"></i>

                    <div className="contenido">
                        <div>
                            <h3 className="nombre" onClick={() => history.push(`/detalles/${producto.id}`)}>{producto.nombre}</h3>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className={`fa-solid fa-star ${star <= producto.estrellas ? '' : 'fa-regular'}`}></i>
                            ))}
                            <div className="pago">
                                <p>{producto.precioSemana}</p>
                                <p>{producto.precioMes}</p>
                            </div>
                        </div>

                        <div>
                            <div className="oferta">{producto.precioOferta}</div>
                            <div className="normal">{producto.precioNormal}</div>

                            <button className="btn quiero" onClick={abrirModal}>Lo Quiero</button>
                        </div>
                    </div>
                </div>
            ))}
            {mostrarModal &&
                <div className="modal-overlay">
                    <div className="modal-content" onClick={cerrarModal}>
                        <ProductDetailModal/>
                    </div>
                </div>
            }
        </div> */

    return (
        <>
        <div className="productos row">
            {productos.map((producto) => (
                <div key={producto.id} className="producto" style={{ display: producto.categoria === categoria ? 'block' : 'none' }}>
                    <img src={producto.imagen[0]} alt="" className="imagen" />
                    <img src={producto.imagen[1]} alt="" className="imagen img2" />
                    <i className="fa-regular fa-heart corazon"></i>

                    <div className="contenido">
                        <div>
                            <h3 className="nombre" >{producto.nombre}</h3>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className={`fa-solid fa-star ${star <= producto.estrellas ? '' : 'fa-regular'}`}></i>
                            ))}
                            <div className="pago">
                                <p>{producto.precioSemana}</p>
                                <p>{producto.precioMes}</p>
                            </div>
                        </div>

                        <div>
                            <div className="ofertaa">{producto.precioOferta}</div>
                            <div className="normal">{producto.precioNormal}</div>

                            <button className="btn quiero" onClick={abrirModal}>Lo Quiero</button>
                        </div>
                    </div>
                </div>
            ))}
            {mostrarModal &&
                <div className="modal-overlay">
                    <div className="modal-content" onClick={cerrarModal}>
                        <ProductDetailModal/>
                    </div>
                </div>
            }
        </div> 
            </>
    )
}
