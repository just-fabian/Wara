import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  ListItem,
  ListItemText,
  IconButton,
  List,
  SwipeableDrawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Container, styled, useMediaQuery } from "@mui/system";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScroll(scrollTop > 50);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: scroll ? "black" : "transparent",
    boxShadow: "none",
    transition: "background-color 0.3s ease",
    paddingTop: 24,
    paddingBottom: 24,
  }));

  const menuItems = (
    <>
      <ListItem component={Link} to="/clases">
        <ListItemText primary="Clases" />
      </ListItem>
      <ListItem component={Link} to="/datos-curiosos">
        <ListItemText primary="Datos Curiosos" />
      </ListItem>
      <ListItem component={Link} to="/eventos">
        <ListItemText primary="Eventos" />
      </ListItem>
      <ListItem component={Link} to="/ver-mapa">
        <ListItemText primary="Ver Mapa" />
      </ListItem>
    </>
  );

  return (
    <StyledAppBar>
      <Container>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: 2,
            }}
          >
            WARA
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MdMenu color="#fff" />
              </IconButton>

              <SwipeableDrawer
                anchor={"right"}
                open={drawerOpen}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
              >
                <Box role="presentation">
                  <List onClick={toggleDrawer(false)}>{menuItems}</List>
                </Box>
              </SwipeableDrawer>
            </>
          ) : (
            <Box>
              <Link to="">
                <Button variant="text" style={{ color: "#fff" }}>
                  Clases
                </Button>
              </Link>
              <Link to="">
                <Button variant="text" style={{ color: "#fff" }}>
                  Datos Curiosos
                </Button>
              </Link>
              <Link to="">
                <Button variant="text" style={{ color: "#fff" }}>
                  Eventos
                </Button>
              </Link>
              <Link to="">
                <Button variant="contained" color="primary">
                  Ver Mapa
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
