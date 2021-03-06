import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
//icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import dp from "../Images/user2.jpg";
import Image from "next/image";
const drawerWidth = 220;
const sideBarLink = [
  {
    id: "dashboard",
    label: "Dashboard",
    link: "/",
    Icon: DashboardOutlinedIcon,
  },
  {
    id: "analytics",
    label: "Analytics",
    link: "/analytics",
    Icon: TimelineOutlinedIcon,
  },
  {
    id: "editor",
    label: "Editor",
    link: "/editor",
    Icon: PersonAddOutlinedIcon,
  },
  {
    id: "comments",
    label: "Comments",
    link: "/comments",
    Icon: ModeCommentOutlinedIcon,
  },
  {
    id: "subtitles",
    label: "Subtitles",
    link: "/subtitles",
    Icon: SubtitlesOutlinedIcon,
  },
  {
    id: "requests",
    label: "Requests",
    link: "/requests",
    Icon: VideoCallOutlinedIcon,
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
  width: `calc(${theme.spacing(7)} + 18px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 18px)`,
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

export default function Layout({ children }) {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDrawer = () => {
    setOpen((preState) => !preState);
  };

  const goToPage = (href, index) => {
    router.push(href);
    setActiveIndex(index);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="primary">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            color="#fff"
            sx={{ ml: !open && 8 }}
          >
            Logo Here
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer} sx={{ color: "#fff" }}>
            {open === false ? <MenuIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open && (
          <Box sx={{ textAlign: "center", mt: 5 }}>
            <Image
              alt="Dp"
              src={dp}
              width={100}
              height={100}
              layout="fixed"
              className="dp-img"
            />
          </Box>
        )}

        <List sx={{ pl: 3 }}>
          {sideBarLink.map((item, index) => (
            <ListItemButton
              key={item.label}
              sx={{
                minHeight: 48,
                justifyContent: "center",
                px: 2.5,
                mt: 2,
                backgroundColor: activeIndex === index && "secondary.dark",
              }}
              onClick={() => goToPage(item.link, index)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <item.Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}
