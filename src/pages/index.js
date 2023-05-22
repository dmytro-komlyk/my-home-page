import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SquareIcon from '@mui/icons-material/Square';
import TagIcon from '@mui/icons-material/Tag';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import {
  Toolbar,
  Box,
  Paper,
  Container,
  Grid,
  Stack,
  Button,
  Typography
} from "@mui/material";
import Layout from "../components/layout/layout"
import Card from "../components/card-project/card-project"
import * as styles from "../components/index.module.scss"

const IndexPage = () => (
  <Layout>
    <Toolbar/>
    <Paper className={styles.intro} component="section">
      <Container>
        <Grid container rowGap={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Stack className={styles.textStack} spacing={4}>
              <Typography variant="h4" component="h1">Elias is a web designer and front-end developer</Typography>
              <Typography variant="body1" component="p">He crafts responsive websites where technologies meet creativity</Typography>
              <Button className={styles.contactBtn}>Contact me</Button>
            </Stack>
          </Grid>
          <Grid xs={12} sm={10} md={6}>
            <Box className={styles.imageStack}>
              <Box className={styles.imageStackItemBottom}>  
                <StaticImage
                  className={styles.img}
                  src="../images/square.png"
                  alt="square"
                  width={155}
                  height={155}
                />
              </Box>
              <Box className={styles.imageStackItemMiddle}>
                <StaticImage
                  className={styles.img}
                  src="../images/image.png"
                  alt="photo"
                  width={470}
                  height="auto"
                />
              </Box>
              <Box className={styles.imageStackItemTop}>
                <StaticImage
                  className={styles.img}
                  src="../images/dots.png"
                  alt="photo"
                  width={84}
                  height={84}
                />
              </Box>
            </Box>
            <Box className={styles.statusWorking}>
              <SquareIcon />
              <Typography className={styles.title} variant="h5" component="div">Currently working on <span>Portfolio</span></Typography>
            </Box>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="center" position="relative">
            <Stack className={styles.quote}>
              <fieldset>
                <legend align="left"><FormatQuoteIcon fontSize="large"/></legend>
                <Typography className={styles.text} variant="h5" componen="div">With great power comes great electricity bill</Typography>
              </fieldset>
              <fieldset>
                <legend align="right"><FormatQuoteIcon fontSize="large"/></legend>
                <Typography className={styles.text} variant="h6" component="div">- Dr. Who</Typography>
              </fieldset>
            </Stack>
            <Box className={styles.squareEffects}></Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    <Paper className={styles.projects} component="section">
      <Container>
        <Grid container rowGap={4} justifyContent="center">
          <Grid item xs={12}>
            <Stack className={styles.title} direction="row" spacing={1}>
              <TagIcon fontSize="large"/>
              <Typography variant="h4" component="h2">projects</Typography>
              <Box className={styles.divider}></Box>
              <Box className={styles.more}>
                <Link to="" className={styles.link}>
                  <Typography variant="body1" component="div">View All</Typography>
                </Link>
                <ArrowRightAltIcon fontSize="large"/>
              </Box>
            </Stack>
          </Grid>
          <Grid item container>
            <Grid item>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  </Layout>
)

export default IndexPage

export const Head = () => <title>Home Page by Dmytro Komlyk</title>
