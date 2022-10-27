import { useEffect } from "react";
import { Card, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Grid.Container
      css={{ padding: "30px", margin: 0 }}
      justify="space-around"
      alignItems="center"
      gap={1}
      // direction="column"
    >
      <Grid xs={12} css={{ marginBottom: 30 }}>
        <Text
          h1
          css={{
            textGradient: "45deg, #890d09 0%, #021281 80%",
            marginBottom: 4,
          }}
        >
          Fluvia
        </Text>
      </Grid>
      <Grid xs={12} sm={5} css={{ marginBottom: 30 }}>
        <Card css={{ padding: 15 }} variant="bordered">
          <Text size={"$md"} weight={"semibold"}>
            Fluvia es desarrollo tecnológico para proteger los recursos hídricos
            alineado con los objetivos de desarrollo sostenible que protegen las
            fuentes hídricas y que aseguran el acceso al agua para futuras
            generaciones
          </Text>
        </Card>
      </Grid>
      <Grid xs={12} sm={5} data-aos="fade-up" css={{ marginBottom: 30 }}>
        <Image
          src="/green-river.jpg"
          alt="green-river"
          width={800}
          height={300}
          style={{ borderRadius: 5 }}
        />
      </Grid>
      <Grid xs={12} sm={5} data-aos="fade-up" css={{ marginBottom: 30 }}>
        <Image
          src="/rio.jpg"
          alt="green-river"
          width={800}
          height={300}
          style={{ borderRadius: 5 }}
        />
      </Grid>{" "}
      <Grid xs={12} sm={5} css={{ marginBottom: 30 }}>
        <Card css={{ padding: 15 }} variant="bordered">
          <Text size={"$md"} weight={"semibold"}>
            Utilizamos en la técnica de trazadores, estas son tintas especiales
            cuyo composición química se hace para que no tenga prácticamente
            ninguna afectación al medio ambiente y cuando se vierte la pinta el
            río la mezcla con los sensores denuestro equipo.
          </Text>
        </Card>
      </Grid>
    </Grid.Container>
  );
};

export default Main;
