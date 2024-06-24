import { Box, Button, List, ListItem, ListItemText } from '@mui/material';
import './Header.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {


    const InitialmenuItems = [
        { label: 'Home', activo: false },
        { label: 'Celulares', activo: true },
        { label: 'Motocicletas', activo: false },
        { label: 'Tus préstamos', activo: false },
        { label: 'Tiendas', activo: false },
        { label: 'Tracking', activo: false },
        { label: 'Club Macropay', activo: false }
      ];

      const [menuItems, setMenuItems] = useState(InitialmenuItems);
      const navigate = useNavigate();

      const itemSeleccionado = (item) => {
        // Actualizamos el estado de los elementos del menú
        const updatedMenuItems = menuItems.map(menuItem =>
          menuItem.label === item.label
            ? { ...menuItem, activo: true }
            : { ...menuItem, activo: false }
        );

        console.log(menuItems);

        const updatedMenuItems2 = menuItems.map(menuItem => {
          console.log("menuItem.label:", menuItem.label);
          console.log("item.label:", item.label);
          const activo = menuItem.label.toLowerCase() === item.label.toLowerCase();
          console.log("activo:", activo);
          return { ...menuItem, activo };
        });

        console.log("El dos: ",updatedMenuItems2);

        setMenuItems(updatedMenuItems);
    
        // Navegamos a la ruta correspondiente
        navigate(`/productos/${item.label.toLowerCase()}`);
      };

      console.log("Este es el actualizado: ", menuItems);

  return (
    <>
    <Box className="navbar navbar-expand-lg header">
    <Link href="#" className="navbar-brand mt-1 mx-5">
        <img src="https://www.intranet.macropay.com.mx/assets/home-tema/img/Logos/Blancos/Logo%20GM_Blanco.png" alt="logo"/>
    </Link>
    <Box className="ms-auto mx-5">
        <button className="btn me-3">Crea Tu Cuenta</button>
        <Link href="#" className="btn btn-link me-3">Iniciar sesión</Link>
        <span className="material-symbols-outlined"><ShoppingCartOutlinedIcon/></span>
    </Box>
    
    
    </Box>

    <Box className="navbar opciones">
        <ul className="nav mx-5">
            {menuItems.map(item => (
          <li
            key={item.label}
            className={`nav-item ${item.activo ? 'focus' : ''}`}    
            onClick={() => itemSeleccionado(item)}
          >
            {item.label}
          </li>
        ))}
        </ul>
    </Box>

    <Box className="oferta">
        <span>COMPRA A <br/><p>CRÉDITO</p></span>
    </Box>

    </>
  )
}
