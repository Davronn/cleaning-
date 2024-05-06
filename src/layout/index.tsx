import * as React from "react";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Footer from "./footer";
import Main from "./main";
import Sidebar from "./sidebar";
import Header from "./header";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const token = localStorage.getItem("access_token");
  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Header open={open} toggleDrawer={toggleDrawer} />

        <Sidebar open={open} toggleDrawer={toggleDrawer} />

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Main>{children}</Main>
            <Footer  />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
