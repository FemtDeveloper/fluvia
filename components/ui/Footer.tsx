import { Box } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import BottomNavigation from "@mui/material/BottomNavigation";
import Link from "next/link";
import { Instagram, YouTube, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "purple" }}>
        <BottomNavigation>
          <Link
            href={"https://www.instagram.com/frontend_trend/"}
            target="_blank"
          >
            <BottomNavigationAction
              label="Instagram"
              icon={
                <Instagram
                  sx={{
                    backgroundImage:
                      "-webkit-linear-gradient(45deg, #ac0e11 0%, #1856e3 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                    color: "#320060",
                  }}
                />
              }
            />
          </Link>
          <Link
            href={"www.youtube.com/channel/UC8uV9F4Bi778kdkcOUSri9w"}
            target="_blank"
          >
            <BottomNavigationAction
              label="Instagram"
              icon={<YouTube sx={{ color: "red" }} />}
            />
          </Link>
          <Link href={"https://wa.me/+573006757580"} target="_blank">
            <BottomNavigationAction
              label="Instagram"
              icon={<WhatsApp sx={{ color: "green" }} />}
            />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Footer;
