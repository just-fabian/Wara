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
import { RoutesPath } from "../../utils/navigationConst";

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
    paddingTop: 4,
    paddingBottom: 4,
  }));

  const menuItems = (
    <>
      <ListItem component={Link} to={RoutesPath.Lessons}>
        <ListItemText>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Lecciones
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem component={Link} to={RoutesPath.CuriousFacts}>
        <ListItemText>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Datos Curiosos
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem component={Link} to={RoutesPath.Events}>
        <ListItemText>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Eventos
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem component={Link} to={RoutesPath.Maps}>
        <Link to="">
          <Button variant="contained" color="primary" className="header-button">
            Ver Mapa
          </Button>
        </Link>
      </ListItem>
    </>
  );

  return (
    <StyledAppBar>
      <Container>
        <Toolbar>
          <Link to={RoutesPath.Home} style={{ flexGrow: 1 }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                letterSpacing: 2,
              }}
            >
              WARA
            </Typography>
          </Link>
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
                <div
                  style={{ background: "#000", height: "100vh", color: "#fff" }}
                >
                  <Box
                    role="presentation"
                    paddingRight={7}
                    paddingLeft={7}
                    paddingTop={4}
                  >
                    <List onClick={toggleDrawer(false)}>{menuItems}</List>
                  </Box>
                </div>
              </SwipeableDrawer>
            </>
          ) : (
            <Box>
              <Link to={RoutesPath.Lessons}>
                <Button variant="text" className="header-button">
                  Lecciones
                </Button>
              </Link>
              <Link to={RoutesPath.CuriousFacts}>
                <Button variant="text" className="header-button">
                  Datos Curiosos
                </Button>
              </Link>
              <Link to={RoutesPath.Events}>
                <Button variant="text" className="header-button">
                  Eventos
                </Button>
              </Link>
              <Link to={RoutesPath.Maps}>
                <Button
                  variant="contained"
                  color="primary"
                  className="header-button"
                >
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
