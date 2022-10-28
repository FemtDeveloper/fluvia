import { NextPage } from "next";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { AppRegistration, DesignServices, Groups } from "@mui/icons-material";
import Layout from "../components/layouts/Layout";

const Servicios: NextPage = () => {
  return (
    <Layout
      pageDescription="Visíon de la empresa, nuestro equipo y nuestra tecnología"
      title="Servicios-Fluvia"
    >
      <Box
        sx={{ margin: 5 }}
        component={"section"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        gap={5}
      >
        <Typography
          variant="h2"
          fontWeight={500}
          // ml={1}
          sx={{
            // fontSize: 30,
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Servicios
        </Typography>
        <List sx={{ xs: { padding: 5 }, sm: { padding: 20 } }}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <AppRegistration sx={{ fontSize: 40 }} />
            </ListItemIcon>
            <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
              Estudios de hidráulica y dispersión para modelación de calidad de
              agua con trazadores. (CIIU 7210: Investigaciones y desarrollo
              experimental en el campo de las ciencias naturales y la ingeniería
              (estudios de trazadores y modelos de calidad de agua)
            </Typography>
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <DesignServices sx={{ fontSize: 40 }} />
            </ListItemIcon>
            <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
              Diseño Y Producción De Equipos De Medición De Parámetros
              Hidráulicos Y Dispersivos En Tiempo Real Con Trazadores. (CIIU
              2651: Fabricación De Equipo De Medición, Prueba, Navegación Y
              Control)
            </Typography>
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <Groups sx={{ fontSize: 40 }} />
            </ListItemIcon>
            <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
              Aforos En Campo Con Trazadores (CIIU 7120: Ensayos Y Análisis
              Técnicos)
            </Typography>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Layout>
  );
};

export default Servicios;
