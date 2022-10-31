import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/Layout";

const Contactanos: NextPage = () => {
  return (
    <Layout
      pageDescription="Visíon de la empresa, nuestro equipo y nuestra tecnología"
      title="Contactanos-Fluvia"
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
          // ml={1}
          className="section-title"
          sx={{
            // fontSize: 30,
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contáctanos
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          neque fuga placeat iste nobis fugiat similique est fugit, dolore
          ratione quibusdam optio recusandae esse? Corporis minus sint quam
          exercitationem nulla?
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          debitis ratione voluptatem itaque sequi hic quasi sit inventore. Sint,
          expedita quas aliquid voluptate veritatis consectetur quasi officia
          dicta consequuntur! Saepe.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A hic fuga,
          maiores animi sed tempore quo cum culpa est itaque quos consectetur
          ipsum voluptas assumenda, nobis iusto quisquam rem soluta!
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laborum
          totam explicabo a. Mollitia iste voluptates assumenda optio dicta
          voluptatum aut sapiente explicabo, libero placeat quisquam sequi,
          tenetur, qui eum!
        </Typography>
      </Box>
    </Layout>
  );
};

export default Contactanos;
