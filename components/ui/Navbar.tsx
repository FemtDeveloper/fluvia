import React, { useState } from "react";
import { Navbar, Button, Link, Text, Image } from "@nextui-org/react";

type VariantType = "static" | "floating" | "sticky";

export default function AppNavbar() {
  const collapseItems = [
    "Nosotros",
    "Servicios",
    "Cotizaciones",
    "Nuestro equipo",
    "Contacto",
  ];

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link href="/">
            <Image
              src="/logo-fluvia-circulos.png"
              alt="fluvia-logo"
              width={100}
            />
            <Text
              h2
              css={{
                textGradient: "45deg, #890d09 0%, #021281 80%",
              }}
            >
              Fluvia
            </Text>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="#">Nosotros</Navbar.Link>
        <Navbar.Link isActive href="#">
          Servicios
        </Navbar.Link>
        <Navbar.Link href="#">Contáctanos</Navbar.Link>
        <Navbar.Link href="#">Equipo</Navbar.Link>
      </Navbar.Content>
      <Navbar.Toggle aria-label="toggle navigation" showIn="sm" />

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
