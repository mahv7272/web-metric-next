"use client";

import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Logo from "../../public/assets/images/logo.svg"

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "صفحه اصلی", href: "/" },
    { text: "todo list", href: "/todo-list" },
    { text: "سوال‌های متدوال", href: "/" },
    { text: "درباره ما", href: "/" },
    { text: "تماس با ما", href: "/" },
  ];

  return (
    <Grid
      container
      spacing={2}
      className={styles.mainDiv}
      sx={{ padding: { md: "8px 60px", xs: "8px 10px" } }}
    >
      <Grid
        md={2}
        xs={3}
        order={{ xs: 2, md: 1 }}
      >
         {/* Logo Image */}
        <Box     sx={{
              display:  "flex" ,
              justifyContent: "center",
              alignItems: "center",
              }}>
          <Image
            src={Logo}
            width={198}
            height={50}
            layout="responsive"
            objectFit="cover"
            alt="webmetric LOGO"
          />
        </Box>
      </Grid>

      <Grid md={8} xs={2} order={{ xs: 1, md: 2 }}>
        <Toolbar>
          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: { md: "space-between" },
              color: "#1158A7",
              width: "100%",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                href={item.href}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  component={Link}
                  href={item.href}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Grid>
        {/* Login Button Menu */}
      <Grid
        md={2}
        xs={5}
        className={styles.buttonMenuDiv}
        order={{ xs: 3, md: 3 }}
      >
        <Button variant="contained">ورود و فعال سازی</Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
