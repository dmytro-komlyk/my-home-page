import * as React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
  Box,
  Container,
  AppBar,
  Stack,
  Divider,
  Drawer,
  Toolbar,
  Button,
  Link as MuiLink,
  List,
  ListItem,
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

const drawerWidth = 240;
const navItems = ["home", "works", "about-me", "contacts"];
const communicationItems = [
  { Icon: GitHubIcon, href: "https://github.com/dmytro-komlyk" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/dmytro-komlyk/" },
  { Icon: TelegramIcon, href: "" }
]

const Header = (props) => {
  const { window, siteTitle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      className={styles.drawer}
      onClick={handleDrawerToggle}
    >
      <Typography className={styles.title} variant="h6" component="div">
        DKOMLYK
      </Typography>
      <Divider color="grey" />
      <List className={styles.menu}>
        {navItems.map((item) => (
          <ListItemButton
            key={item}
            className={styles.menuItem}
            href={`#${item}`}
          >
            <TagIcon/>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
      <Divider color="grey" />
      <Stack className={styles.communication} direction="row" justifyContent="center" spacing={1} p={1}>
        {communicationItems.map(({ href, Icon }) => (
          <MuiLink href={href}>
            <Icon />
          </MuiLink>
        ))}
      </Stack>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className={styles.header} component="header">
      <AppBar className={styles.nav} component="nav">
        <Box className={styles.communication}>
          <Box className={styles.communicationDivider}></Box>
          <Stack className={styles.communicationIcons}>
            {communicationItems.map(({ href, Icon }) => (
              <MuiLink href={href}>
                <Icon />
              </MuiLink>
            ))}
          </Stack>
        </Box>
        <Container>
          <Toolbar className={styles.wrapper}>
            <IconButton
              className={styles.drawerBtn}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={styles.logo}
              variant="h6"
              component="div"
            
            >
              DKOMLYK
            </Typography>
            <Box className={styles.menu}>
              {navItems.map((item) => (
                <Button
                  className={styles.menuItem}
                  key={item}
                  onClick={() => scrollTo(`#${item}`)}
                  >
                  <TagIcon fontSize="small" />
                  <Typography variant="body1" component="span">
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor={"top"}
          container={container}
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