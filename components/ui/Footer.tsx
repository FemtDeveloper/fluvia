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
            <BottomNavigationAction label="Instagram" icon={<Instagram />} />
          </Link>
          <Link
            href={"www.youtube.com/channel/UC8uV9F4Bi778kdkcOUSri9w"}
            target="_blank"
          >
            <BottomNavigationAction label="Instagram" icon={<YouTube />} />
          </Link>
          <Link href={"https://wa.me/+573006757580"} target="_blank">
            <BottomNavigationAction label="Instagram" icon={<WhatsApp />} />
          </Link>
        </BottomNavigation>
      </Box>
    </>
  );
};

export default Footer;
