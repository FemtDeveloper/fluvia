import React, { useState } from "react";
import { Navbar, Button, Link, Text } from "@nextui-org/react";

type VariantType = "static" | "floating" | "sticky";

export default function AppNavbar() {
  const [variant, setVariant] = useState<VariantType>("static");
  const validVariants = ["static", "floating", "sticky"];

  const updateVariant = (variante: VariantType) => {
    setVariant(variante);
  };

  return (
    <>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        {/* <SwitchTheme /> */}
      </Navbar>
    </>
  );
}
