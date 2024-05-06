import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Divider, IconButton, List, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Sidebar = ({
  open,
  toggleDrawer,
}: {
  open: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
      </List>
    </Drawer>
  );
};
export const mainListItems = (
  <React.Fragment>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Asosiy" />
      </ListItemButton>
    </Link>
    <Link to="/orders">
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Buyurtmalar" />
      </ListItemButton>
    </Link>
    <Link to="/clients">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Mijozlar" />
      </ListItemButton>
    </Link>
    <Link to="/services">
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Xizmatlar" />
      </ListItemButton>
    </Link>
    <Link to="/settings">
      <ListItemButton>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Sozlamalar" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export default Sidebar;
