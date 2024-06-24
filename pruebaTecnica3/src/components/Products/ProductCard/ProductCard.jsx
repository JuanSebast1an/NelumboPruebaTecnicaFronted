import React, {useState} from 'react';
import './ProductCard.css'
import { ProductDetailModal } from '../ProductDetailModal/ProductDetailModal';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const ProductCard = ({ productos, categoria }) => {
    
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
        setMostrarModal(true);
    }

    const cerrarModal = () => {
        setMostrarModal(false);
    }

    const navigate = useNavigate();

    const handleClick = (productId, productCategory) => {
        navigate(`/productos/${productCategory}/${productId}`);
    };

    return (
        <>
        <Box className="productos row">
            {productos.map((producto) => (
                <Box key={producto.id} className="producto" style={{ display: producto.categoria === categoria ? 'block' : 'none' }}>
                    <img src={producto.imagen[0]} alt="" className="imagen" onClick={() => handleClick(producto.id, producto.categoria)}/>
                    <img src={producto.imagen[1]} alt="" className="imagen img2" onClick={() => handleClick(producto.id, producto.categoria)}/>

                    <Box className="contenido">
                        <Box onClick={() => handleClick(producto.id, producto.categoria)}>
                            <Typography variant='h3' className='nombre'>{producto.nombre}</Typography>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className={`fa-solid fa-star ${star <= producto.estrellas ? '' : 'fa-regular'}`}></i>
                            ))}
                            <Box className="pago">
                                <p>{producto.precioSemana}</p>
                                <p>{producto.precioMes}</p>
                            </Box>
                        </Box>

                        <Box>
                            <Box className="ofertaa">{producto.precioOferta}</Box>
                            <Box className="normal">{producto.precioNormal}</Box>
                            
                            <Button className="btn quiero" sx={{ textTransform: 'none', width:'94px' }} onClick={abrirModal}>Lo Quiero</Button>
                        </Box>
                    </Box>
                </Box>
            ))}
            {mostrarModal &&
                <Box className="modal-overlay">
                    <Box className="modal-content" onClick={cerrarModal}>
                        <ProductDetailModal/>
                    </Box>
                </Box>
            }
        </Box> 
            </>
    )
}
