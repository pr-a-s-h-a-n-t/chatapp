import * as React from "react";
import { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material";
// import Logo from "../../src/assets/workPlaceLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { darkContext, DarkProvider } from "../contex/darkModeContex";
import { type } from "@testing-library/user-event/dist/type";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import CloudIcon from "@mui/icons-material/Cloud";

const pages = [
  {
    name: "Chat",
    path: "/chats",
  },
  {
    name: "Connect",
    path: "/connectionrequests",
  },
  {
    name: " settings",
    path: "/settings",
  },

  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "TestPage",
    path: "/ConversationsPageTest",
  },

  
];

function HocNav({ children }) {
  const [state, dispatch] = useContext(darkContext);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          //  background: " orange"
          color: state.font1,
          backgroundColor: state.background,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "clamp(12px, 2.5rem, 6rem )",
                display: { xs: "none", md: "flex" },
              }}
            >
              <WhatsAppIcon
                sx={{
                  maxWidth: "250px",
                  width: "100%",
                  color: "white",

                  borderRadius: "50%",
                  padding: "0.1rem",
                  backgroundColor: " green",
                  fontSize: "35px",
                  margin: "2px",
                }}
              />
              <Typography
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "clamp(12px, 1.8rem, 20px )",
                  marginTop: "5px",
                  textShadow: "3px 0px 2px black",
                }}
              >
                chatApp
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                // color="black"
                sx={{
                  color: state.font1,
                  backgroundColor: state.background,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
                PaperProps={{
                  style: {
                    color: state.font1,
                    backgroundColor: state.background,
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    sx={{
                      color: state.font1,
                      backgroundColor: state.background,
                    }}
                    key={page.name}
                    onClick={() => handleNavigate(page.path)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>

              <Box
                sx={{
                  width: "auto",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WhatsAppIcon
                  sx={{
                    maxWidth: "250px",
                    width: "100%",
                    color: "white",
                    color: state.font1,

                    borderRadius: "50%",
                    padding: "0.1rem",
                    backgroundColor: " green",
                    fontSize: "35px",
                    margin: "2px",
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                  sx={{
                    my: 2,
                    color: state.font1,
                    backgroundColor: state.background,
                    display: "block",
                    padding: "0 2rem",
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip>
                <Button
                  checked={state.mode === "dark"}
                  onClick={() => {
                    if (state.mode === "dark") {
                      dispatch({ type: "MAKE_LIGHT" });
                    } else {
                      dispatch({ type: "MAKE_DARK" });
                    }
                  }}
                  sx={{ p: 0 }}
                >
                  {state.mode === "dark" ? (
                    <WbSunnyIcon
                      sx={{
                        color: state.iconColor,
                      }}
                    />
                  ) : (
                    <div>
                      <NightsStayIcon
                        sx={{
                          color: state.iconColor,
                        }}
                      />
                    </div>
                  )}
                </Button>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </>
  );
}

export default HocNav;
