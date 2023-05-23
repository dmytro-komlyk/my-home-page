import * as React from "react"
import { Link } from "gatsby"
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

import * as styles from "./footer.module.scss"

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
            <Stack className={styles.footerMediaStack}>
              <GitHubIcon fontSize="medium"/>
              <FacebookIcon fontSize="medium"/>
              <InstagramIcon fontSize="medium"/>
              <LinkedInIcon fontSize="medium" />
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