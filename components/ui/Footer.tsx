import { Box } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigation from "@mui/material/BottomNavigation";
import Link from "next/link";
import { Instagram, YouTube, Facebook, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "purple" }}>
        <BottomNavigation
        //   showLabels
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        >
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
