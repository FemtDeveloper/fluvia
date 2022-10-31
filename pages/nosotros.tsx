import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/Layout";

const Nosotros: NextPage = () => {
  return (
    <Layout
      pageDescription="Visíon de la empresa, nuestro equipo y nuestra tecnología"
      title="Nosotros-Fluvia"
    >
      <Box
        // sx={{ margin: 5 }}
        component={"section"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        gap={4}
        // marginX={12}
        sx={{ marginX: { xs: 5, sm: 12 } }}
        marginY={8}
        paddingTop={4}
      >
        <Typography
          variant="h1"
          fontWeight={500}
          sx={{
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nosotros
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Nuestra historia Fluvia es una solución para obtener datos sobre
          hidráulica y dispersión en tiempo real sobre todo tipo de cuerpo de
          agua con trazadores iónicos y químicos. Es la forma de obtener
          información confiable y oportuna para alimentar modelos de calidad de
          agua en cualquier lugar con tecnología de vanguardia de base
          científica.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Con Fluvia las autoridades ambientales contarán con datos hidráulicos
          y dispersivos para alimentar modelos de calidad de agua de forma
          confiable y precisa.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Ayudamos a las autoridades ambientales a ordenar sus cuencas y
          prevenir riesgos mediante el uso de tecnología hecha en Colombia para
          obtener información hidráulica y dispersiva en tiempo real con nuevos
          conocimientos científicos usando trazadores, sobre todo tipo de cuerpo
          de agua.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Contamos con tecnología desarrollada y patentada en Colombia para
          obtener datos de hidráulica y transporte dispersivo en tiempo real
          usando trazadores, lo que permite alimentar modelos de calidad de agua
          con datos experimentales (reales) y confiables con el mejor método
          disponible, ajustado a la normativa ambiental vigente, apoyados e
          numerosos casos de éxito en industria minera, energía,
          infraestructura, entre otros.
        </Typography>
      </Box>
    </Layout>
  );
};

export default Nosotros;
