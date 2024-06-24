import React from "react";
import './Footer.css'
import carita from '../../assets/cara.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Image } from "@mui/icons-material";


export const Footer = () => {
    return (
        <>
            <Box className="diseno">
                <Box className="custom-shape-divider-bottom-1705878615">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </Box>
                <Box className="custom-shape-divider-bottom-1705877614">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </Box>
            </Box>
            <Box className="footer">
                <Box className="footer-content">
                    <Box className="footer-links">
                        <Box classNamex="footer-link">
                            <Typography component="span" sx={{color: "#0446b3"}} >OFERTAS Y PROMOCIONES</Typography>
                            <Typography variant="h2" >No te pierdas nuestras ofertas!</Typography>
                            <Box className="input-group">
                                <TextField
                                    type="email"
                                    placeholder="Tu dirección de correo electrónico" 
                                    className="form-control"
                                    variant="outlined"
                                    sx={{
                                        border: "none",
                                        borderBottom: "2px solid #2b3445",
                                        borderRadius: "0",
                                        backgroundColor: "transparent",
                                        padding: "0",
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            border: 'none',
                                          },
                                          '& input::placeholder': {
                                            color: 'red',
                                          },
                                      }}/>
                                <Typography component="span" className="input-group-text" sx={{color: "#0446b3",}}>
                                    <TelegramIcon/>
                                </Typography>
                            </Box>
                            <Box className="footer-links">
                                <Box className="footer-link">
                                    <Box className="footer-logo">
                                        <img
                                            src="https://pypper.com.mx/images/logo/macropay.png"
                                            alt="imagen macropays" />
                                    </Box>
                                </Box>
                                <Box className="footer-link enlaces">
                                    <List sx={{marginRight: "20px"}}>
                                        <ListItem>
                                            <ListItemText
                                            primary="Envíos y devoluciones"
                                            sx={{color:"#2b3445cc", marginLeft:"40px", marginBottom:"0px"}}/>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemText
                                            primary="Preguntas frecuentes"
                                            sx={{color:"#2b3445cc", marginLeft:"40px", marginTop:"0px"}}/>
                                        </ListItem>
                                    </List>
                                    <List sx={{marginRight: "20px"}}>
                                        <ListItem>
                                            <ListItemText
                                            primary="Aviso de privacidad"
                                            sx={{color:"#2b3445cc", marginBottom:"0px"}}/>
                                        </ListItem>
                                        <ListItem>
                                        <ListItemText
                                            primary="Terminos y condiciones"
                                            sx={{color:"#2b3445cc", marginTop:"0px"}}/>
                                        </ListItem>
                                    </List>
                                </Box>
                            </Box>
                            <Typography variant="body1">Todos los derechos reservados - &copy; Macropay 2022</Typography>
                        </Box>
                        <Box class="footer-link">
                            <Box className="cara">
                                <img src={carita} alt="carita feliz" />
                            </Box>
                        </Box>
                        <Box className="footer-link">
                            <Box className="conversemos">
                                <Typography variant="h2">Conversemos!</Typography>
                                <p>Lorem ipsum dolor sit amet</p>
                                <List>
                                    <ListItem>
                                        <FacebookIcon sx={{fontSize:'40px'}}/>
                                    </ListItem>
                                    <ListItem>
                                        <InstagramIcon sx={{fontSize:'40px'}}/>    
                                    </ListItem>
                                    <ListItem>
                                        <LinkedInIcon sx={{fontSize:'40px'}}/>
                                    </ListItem>
                                    <ListItem>
                                        <WhatsAppIcon sx={{fontSize:'40px'}}/>
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
