import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Nosotros", "Servicios", "Experiencia", "Contáctanos"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#ebebeb08",
        height: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          my: 2,
          backgroundImage:
            "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 600,
        }}
      >
        Fluvia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              passHref
              style={{ textDecoration: "none" }}
            >
              <ListItemButton
                sx={{
                  backgroundImage:
                    "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ fontWeight: 700, fontSize: 20 }}
                />
              </ListItemButton>
            </Link>
            {/* <Link> */}
            {/* < sx={{ textAlign: "center" }}>
              </> */}
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#ebebebb8" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Link href={"/"} passHref style={{ textDecoration: "none" }}>
            <Box display={"flex"} alignItems="center">
              <Image
                src="/logo-fluvia-circulos.png"
                alt="fluvia-logo"
                width={60}
                height={60}
              />
              <Typography
                variant="h4"
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
            </Box>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    backgroundImage:
                      "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </>
  );
}
