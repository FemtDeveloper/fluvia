import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Card, Typography } from "@mui/material";
import greenRiver from "../../public/green-river.jpg";
import Rio1 from "../../public/rio.jpg";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Grid2
        xs={12}
        sx={{ marginBottom: 1 }}
        display="flex"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          fontWeight={500}
          // ml={1}
          style={{
            // fontSize: 30,
            backgroundImage:
              "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Fluvia
        </Typography>
      </Grid2>
      <Grid2 container>
        <Grid2 xs={12} sm={6} sx={{ marginBottom: 5 }}>
          <Card sx={{ padding: 5, margin: 5 }}>
            <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
              Fluvia es desarrollo tecnológico para proteger los recursos
              hídricos alineado con los objetivos de desarrollo sostenible que
              protegen las fuentes hídricas y que aseguran el acceso al agua
              para futuras generaciones
            </Typography>
          </Card>
        </Grid2>
        <Grid2 xs={12} sm={6} data-aos="fade-up" sx={{ marginBottom: 5 }}>
          <div
            style={{
              position: "relative",
              width: "90%",
              height: "350px",
              margin: "0 auto",
            }}
          >
            <Image
              src={greenRiver}
              alt="green-river"
              fill
              style={{ borderRadius: 5 }}
            />
          </div>
        </Grid2>
      </Grid2>
      <Grid2 xs={12} sm={6} sx={{ marginBottom: 5, display: { sm: "none" } }}>
        <Card sx={{ padding: 5, margin: 5 }}>
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            Utilizamos en la técnica de trazadores, estas son tintas especiales
            cuyo composición química se hace para que no tenga prácticamente
            ninguna afectación al medio ambiente y cuando se vierte la pinta el
            río la mezcla con los sensores denuestro equipo.
          </Typography>
        </Card>
      </Grid2>
      <Grid2 xs={12} sm={6} data-aos="fade-up" sx={{ marginBottom: 5 }}>
        <div
          style={{
            position: "relative",
            width: "90%",
            height: "350px",
            margin: "0 auto",
          }}
        >
          <Image
            src={Rio1}
            alt="green-river"
            style={{ borderRadius: 5 }}
            fill
          />
        </div>
      </Grid2>
      <Grid2
        xs={12}
        sm={6}
        sx={{
          marginBottom: 5,
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Card sx={{ padding: 5, margin: 5 }}>
          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
            Utilizamos en la técnica de trazadores, estas son tintas especiales
            cuyo composición química se hace para que no tenga prácticamente
            ninguna afectación al medio ambiente y cuando se vierte la pinta el
            río la mezcla con los sensores denuestro equipo.
          </Typography>
        </Card>
      </Grid2>
    </>
  );
};

export default Main;
