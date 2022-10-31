import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/Layout";

const Nosotros: NextPage = () => {
  return (
    <Layout
      pageDescription="Visíon de la empresa, nuestro equipo y nuestra tecnología"
      title="Error-Fluvia"
    >
      <Box
        sx={{ margin: 5 }}
        component={"section"}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        gap={2}
      >
        <Typography
          variant="h1"
          fontWeight={500}
          className="section-title"
          sx={{
            // fontSize: 30,
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          ERROR
        </Typography>
        <Typography>
          Lo sentimos, no fue encontrada la página que solicitaste
        </Typography>
      </Box>
    </Layout>
  );
};

export default Nosotros;
