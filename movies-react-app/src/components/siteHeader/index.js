import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useContext } from "react";

import { AuthContext } from "../../contexts/authContext";


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ history }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  const context = useContext(AuthContext);
  //const [user] = useAuthState(auth);
  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "People", path: "/movies/people" },
    { label: "TV", path: "/TV/popular" },
    { label: "TopRated", path: "/movies/topRated" },
  ];
  const menuUserOptions = [
    { label: "Log out", path: "/pages/logout" },
    { label: "Log in", path: "/pages/login" },
  ]
  const handleMenuSelect = (pageURL) => {
    if (pageURL === "/pages/logout") {
      //logout()
      context.signout()
    }
    
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>

      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          {!(context.isAuthenticated) ? (
            <Typography variant="p" sx={{ flexGrow: 1 }}>
              please log in
            </Typography>
          ) :
            (<Typography variant="p" sx={{ flexGrow: 1 }} >
              Hello! {context.userEmail}
            </Typography>)
          }
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}

                {context.isAuthenticated ? (
                  <MenuItem
                    key={menuUserOptions[0].label}
                    color="inherit"
                    onClick={() => handleMenuSelect(menuUserOptions[0].path)}
                  >
                    {menuUserOptions[0].label}
                  </MenuItem>
                ) : (<MenuItem
                  key={menuUserOptions[1].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[1].path)}
                >
                  {menuUserOptions[1].label}
                </MenuItem>
                )

                }
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
              {context.isAuthenticated ? (
                <Button
                  key={menuUserOptions[0].label}
                  color="inherit"
                  onClick={() => handleMenuSelect(menuUserOptions[0].path)}
                >
                  {menuUserOptions[0].label}
                </Button>
              ) : (<Button
                key={menuUserOptions[1].label}
                color="inherit"
                onClick={() => handleMenuSelect(menuUserOptions[1].path)}
              >
                {menuUserOptions[1].label}
              </Button>
              )

              }

            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;