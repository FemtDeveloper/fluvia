import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts/Layout";

const Nosotros: NextPage = () => {
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
          className="section-title"
          sx={{
            // fontSize: 30,
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Nuestra experiencia
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          obcaecati non nihil porro, enim doloribus tempora blanditiis magnam
          architecto ratione aperiam molestias quia repellat excepturi voluptate
          ipsum? Magnam, excepturi numquam. Illum expedita ea, voluptatibus
          suscipit voluptates assumenda quibusdam quam recusandae voluptatem et
          ullam? Ex, maxime distinctio. Ipsum magnam maxime illo possimus,
          repudiandae delectus nobis maiores eius quam, eum, accusamus
          voluptate? Deleniti eaque necessitatibus eveniet perferendis vel
          delectus aperiam minus adipisci ex voluptatem repellendus ab
          cupiditate mollitia dolorem dolore et corrupti, reiciendis porro.
          Quidem perferendis animi nostrum doloremque tempore tempora
          voluptates? Dicta numquam, quod exercitationem labore blanditiis
          soluta impedit. Eius qui, tempora reiciendis velit non architecto,
          corrupti dignissimos necessitatibus omnis officiis dolore, nam
          consequuntur! Dolorem officiis autem corporis repellendus porro
          explicabo.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perspiciatis optio eveniet velit, sint esse minus voluptatibus
          asperiores nihil possimus, ratione incidunt eum nemo earum nesciunt
          est dolor mollitia quisquam.
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quas
          quia iusto tempore, voluptate ratione? Aspernatur expedita sapiente
          eveniet culpa, alias laboriosam dignissimos quas sint vel cum?
          Pariatur, numquam quae. Saepe rerum obcaecati aliquid voluptates sequi
          asperiores corrupti illum molestiae quisquam esse at quae neque, harum
          maxime eius id accusantium debitis sed quidem voluptatum provident,
          delectus repellat error vel. Mollitia!
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          repudiandae nam suscipit magnam ipsa exercitationem, dolor obcaecati
          perspiciatis magni eius temporibus necessitatibus excepturi officiis
          quia aspernatur ad doloribus, odio mollitia. Ducimus temporibus quae
          praesentium. Ipsam doloremque sint unde. Dolores numquam ipsum,
          dolorum eveniet reiciendis laboriosam dolor nulla soluta libero hic
          nostrum tempore aperiam aliquam eligendi quam, deleniti repellendus
          error placeat. Repellat nulla autem totam esse iusto incidunt ea
          veritatis doloribus molestiae distinctio error, corrupti quod, ad iste
          sapiente possimus perferendis! Cupiditate quam dignissimos quas
          provident amet, tenetur accusamus aut velit? Consectetur dolor modi
          quos id harum. Cumque eos et aliquam, atque rerum corrupti at, quis
          mollitia iure voluptas id fugiat incidunt, ex explicabo eaque
          consectetur dolores deserunt placeat nobis! Natus.
        </Typography>
      </Box>
    </Layout>
  );
};

export default Nosotros;
