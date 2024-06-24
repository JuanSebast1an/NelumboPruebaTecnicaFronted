import React from 'react';
import './ProductDetailModal.css'
import { Box, Button, Typography } from '@mui/material';

export const ProductDetailModal = () => {
  return (
    <Box className="container">
    <Box className="modal-producto">
        <Box className="imagen">
            <img src="https://centrocuauhtemoc.com/wp-content/uploads/2022/06/Sin-titulo-500x500.png" alt="" />
        </Box>
        <Box className="info">
            <Box className="imagen">
                <img src="https://celumania.com.ec/wp-content/uploads/2021/10/TELEFONO-SAMSUNG-GALAXY-A10S-NEGRO.png" alt="" />
            </Box>
            <Box className="detalles">
                <Typography variant='body1' className="precio" >$3,499.00 x 1</Typography>
                <Box className="nombre">Samsung A10S 13+2MP 64GB, 4GB RAM</Box>
                <Box className="color">Color seleccionado: <strong>Gris Ratón</strong></Box>
            </Box>
        </Box>
        <Box className="cantidad">
            <span>1 Ítem en tu carrito</span>
            <span class="subtotal">Subtotal <Typography variant='body1' className="precio" >$3,499.00</Typography></span>
        </Box>
        <Box className="compra">
            <Box className="check">
                <i class="fa-solid fa-check"></i>
            </Box>
            <Typography variant='body1' >Te vas a llevar este celular por solo</Typography>
            <Typography variant='body1' className="semana" >$120 p/semana!</Typography>
            <Button className="btn">COMPRAR A CRÉDITO</Button>
            <Typography variant='body1' className="otro" ><em>o puedes</em></Typography>
            <Typography variant='body1' className="contado" >Comprar al contado</Typography>
        </Box>
    </Box>
</Box>
  )
}
