import * as React from "react"
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Link as MuiLink,
  Typography
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

import * as styles from "./footer.module.scss"

const mediaItems = [
  { Icon: GitHubIcon, href: "https://github.com/dmytro-komlyk" },
  { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/dmytro-komlyk/" },
  { Icon: FacebookIcon, href: "https://www.facebook.com/dkomlyk" },
  { Icon: InstagramIcon, href: "https://www.instagram.com/dmitriy_komlyk/" }
]

const Footer = () => (
  <Box className={styles.footer} component="footer">
    <Divider className={styles.divider} component="div" />
    <Container>
      <Grid container className={styles.containerContent}>
        <Grid item>
          <Box className={styles.footerIntro} component="div">
            <Typography variant="h6" component="h5">DKOMLYK</Typography>
            <Typography variant="body1" component="h6">Full-stack developer</Typography>
          </Box>
        </Grid>
        <Grid item marginLeft="auto">
          <Box className={styles.footerMedia} component="div">
            <Typography className={styles.footerMediaTitle} variant="h5" component="div">Media</Typography>
            <Stack className={styles.footerMediaStack} direction="row" spacing={1}>
              {mediaItems.map(({ href, Icon }, id) => (
                <MuiLink key={id} href={href}>
                  <Icon fontSize="medium" />
                </MuiLink>
              ))}
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.footerCopyright} component="div">
            <CopyrightIcon />
            <Typography variant="body1" component="div">Copyright {new Date().getFullYear()}. Made by Dmytro Komlyk</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer