import * as React from "react"
import { useState } from "react";
import { Link } from "gatsby"
import {
  Box,
  Container,
  Stack,
  Divider,
  Drawer,
  Toolbar,
  Button,
  Link as MuiLink,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography } from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu";
import TagIcon from '@mui/icons-material/Tag';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import * as styles from "./header.module.scss"

const navItems = [
  { path: "/", name: "home" },
  { path: "/projects/", name: "projects" },
  { path: "/about-me/", name: "about-me" }
];
const communicationItems = [
  { Icon: GitHubIcon, href: "https://github.com/dmytro-komlyk" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/dmytro-komlyk/" },
  { Icon: TelegramIcon, href: "https://t.me/dmytro_komlyk" }
]

const Header = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className={styles.drawer}
      onClick={handleDrawerToggle}
    >
      <Link to="/">
        <Typography className={styles.title} variant="h6">
          DKOMLYK
        </Typography>
      </Link>
      <Divider color="grey" />
      <List className={styles.menu}>
        {navItems.map(({ path, name }) => (
          <ListItemButton
            key={name}
            className={styles.menuItem}
            to={path}
            component={Link}
          >
            <TagIcon/>
            <ListItemText primary={name} />
          </ListItemButton>
        ))}
      </List>
      <Divider color="grey" />
      <Stack className={styles.communication} direction="row" justifyContent="center" spacing={1} p={1}>
        {communicationItems.map(({ href, Icon }, id) => (
          <MuiLink key={id} href={href}>
            <Icon />
          </MuiLink>
        ))}
      </Stack>
    </Box>
  );

  return (
    <Box className={styles.header} component="header">
      <Box className={styles.nav} component="nav">
        <Box className={styles.communication}>
          <Box className={styles.communicationDivider}></Box>
          <Stack className={styles.communicationIcons}>
            {communicationItems.map(({ href, Icon }, id) => (
              <MuiLink key={id} href={href}>
                <Icon />
              </MuiLink>
            ))}
          </Stack>
        </Box>
        <Container>
          <Toolbar className={styles.wrapper}>
            <Typography
              className={styles.logo}
              variant="h6"
              component={Link}
              to="/"
            >
              DKOMLYK
            </Typography>
            <IconButton
              className={styles.drawerBtn}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box className={styles.menu}>
              {navItems.map(({ path, name }) => (
                <Button
                  key={name}
                  className={styles.menuItem}
                  to={path}
                  component={Link}
                >
                  <TagIcon fontSize="small" />
                  <Typography variant="body1" component="span">
                    {name}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Box>
      <Box component="nav">
        <Drawer
          anchor={"top"}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  )
}

export default Header