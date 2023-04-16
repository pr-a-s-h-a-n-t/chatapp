// import * as React from "react";
// import { useContext } from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   Menu,
//   Container,
//   Button,
//   MenuItem,
//   Tooltip,
// } from "@mui/material";
// // import Logo from "../../src/assets/workPlaceLogo.png";
// import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import { darkContext, DarkProvider } from "../contex/darkModeContex";
// import { type } from "@testing-library/user-event/dist/type";
// import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import NightsStayIcon from "@mui/icons-material/NightsStay";
// import CloudIcon from "@mui/icons-material/Cloud";

// function HocNav({ children }) {
//   const [state, dispatch] = useContext(darkContext);

//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         sx={{
//           //  background: " orange"
//           color: state.font1,
//           backgroundColor: state.background,
//         }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Box
//               sx={{
//                 width: "clamp(12px, 2.5rem, 6rem )",
//                 display: { xs: "none", md: "flex" },
//               }}
//             >
//               <WhatsAppIcon
//                 sx={{
//                   maxWidth: "250px",
//                   width: "100%",
//                   color: "white",

//                   borderRadius: "50%",
//                   padding: "0.1rem",
//                   backgroundColor: " green",
//                   fontSize: "35px",
//                   margin: "2px",
//                 }}
//               />
//               <Typography
//                 sx={{
//                   color: "green",
//                   fontWeight: "bold",
//                   fontSize: "clamp(12px, 1.8rem, 20px )",
//                   marginTop: "5px",
//                   textShadow: "3px 0px 2px black",
//                 }}
//               >
//                 chatApp
//               </Typography>
//             </Box>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 // color="black"
//                 sx={{
//                   color: state.font1,
//                   backgroundColor: state.background,
//                 }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//                 PaperProps={{
//                   style: {
//                     color: state.font1,
//                     backgroundColor: state.background,
//                   },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem
//                     sx={{
//                       color: state.font1,
//                       backgroundColor: state.background,
//                     }}
//                     key={page.name}
//                     onClick={() => handleNavigate(page.path)}
//                   >
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>

//               <Box
//                 sx={{
//                   width: "auto",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <WhatsAppIcon
//                   sx={{
//                     maxWidth: "250px",
//                     width: "100%",
//                     color: "white",
//                     color: state.font1,

//                     borderRadius: "50%",
//                     padding: "0.1rem",
//                     backgroundColor: " green",
//                     fontSize: "35px",
//                     margin: "2px",
//                   }}
//                 />
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", md: "flex" },
//                 justifyContent: "center",
//               }}
//             >
//               {pages.map((page) => (
//                 <Button
//                   key={page.name}
//                   onClick={() => handleNavigate(page.path)}
//                   sx={{
//                     my: 2,
//                     color: state.font1,
//                     backgroundColor: state.background,
//                     display: "block",
//                     padding: "0 2rem",
//                   }}
//                 >
//                   {page.name}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip>
//                 <Button
//                   checked={state.mode === "dark"}
//                   onClick={() => {
//                     if (state.mode === "dark") {
//                       dispatch({ type: "MAKE_LIGHT" });
//                     } else {
//                       dispatch({ type: "MAKE_DARK" });
//                     }
//                   }}
//                   sx={{ p: 0 }}
//                 >
//                   {state.mode === "dark" ? (
//                     <WbSunnyIcon
//                       sx={{
//                         color: state.iconColor,
//                       }}
//                     />
//                   ) : (
//                     <div>
//                       <NightsStayIcon
//                         sx={{
//                           color: state.iconColor,
//                         }}
//                       />
//                     </div>
//                   )}
//                 </Button>
//               </Tooltip>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       {children}
//     </>
//   );
// }

// export default HocNav;

// sideBarComponent--

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Badge from "@mui/material/Badge";

const drawerWidth = 240;
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

const Pr = [
  {
    name: "Home",
    path: "/Search",
    icon: <HomeIcon />,
  },
  {
    name: "Search",
    path: "/Search",
    icon: <SearchIcon />,
  },
  {
    name: "Explore",
    path: "/Explore",
    icon: <ExploreIcon />,
  },
  {
    name: "Messages",
    path: "/chat",
    icon: "<>",
  },
  {
    name: "Notification",
    path: "/Profile",
    icon: <FavoriteBorderIcon />,
    color: "red",
  },
  {
    name: "Create",
    path: "/Profile",
    icon: <AddCircleOutlineIcon />,
  },
  {
    name: "Profile",
    path: "/Profile",
    icon: <PersonPinIcon />,
  },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HocNav({ Children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [notification, setNotification] = React.useState(1);

  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            sidebar-title
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {Pr.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.name === "Notification " ? (
                    <Badge badgeContent={2} color="secondary">
                      {text.icon}
                    </Badge>
                  ) : (
                    text.icon
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box
          sx={{
            width: "100%",
            border: "1px solid red",
            padding: "0 0 0 10px",
          }}
        >
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-between !important",
              color: "grey",
            }}
          >
            <MenuIcon />
            <Typography
              sx={{
                padding: "0 0 0 20px",
                color: "black",
              }}
            >
              More
            </Typography>
          </Button>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {Children}
      </Box>
    </Box>
  );
}
