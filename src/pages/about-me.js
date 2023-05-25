import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Toolbar,
  Box,
  Paper,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag"
import Layout from "../components/layout/layout"
import CardSkill from "../components/card-skill/card-skill"

import * as styles from "../components/about-me.module.scss"

const AboutMePage = ({ data }) => {
  const skills = data.allContentfulSkill.edges;

  return (
    <Layout>
      <Toolbar/>
      <Paper className={styles.aboutMePage} component="div">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box component="div">
                <Typography className={styles.aboutMePageTitle} variant="h4" component="h2"><span className={styles.aboutMePageTitleIcon}>/</span> about-me</Typography>
                <Typography className={styles.aboutMePageDescription} variant="body1" component="p">Who am i?</Typography>
              </Box>
            </Grid>
            <Grid className={styles.intro} item container>
              <Grid className={styles.introBg} item xs={12}>
                <Box className={styles.introBgDots}>
                  <StaticImage
                    src="../images/dots.png"
                    alt="square"
                    width={103}
                    height={103}
                  />
                </Box>
                <Box className={styles.introBgSquare}>
                  <Box className={styles.square}></Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.introDescription} variant="body1" component="div">
                  Hello, i’m Dmytro!<br/><br/>
                </Typography>
              </Grid>
              <Grid className={styles.introImage} item xs={6} md={6}>
                <Box className={styles.introImageStack}>
                  <Box className={styles.introImageStackItemImage}>  
                    <StaticImage
                      src="../images/image-2.png"
                      alt="square"
                      width={340}
                      height={508}
                    />
                  </Box>
                  <Box className={styles.introImageStackItemTopDots}>  
                    <StaticImage
                      src="../images/dots.png"
                      alt="square"
                      width={84}
                      height={84}
                    />
                  </Box>
                  <Box className={styles.introImageStackItemMiddleDots}>  
                    <StaticImage
                      src="../images/dots.png"
                      alt="square"
                      width={84}
                      height={64}
                    />
                  </Box>
                </Box>
                <Box className={styles.introImageDivider}></Box>
              </Grid>
            </Grid>
            <Grid className={styles.skills} item container rowGap={5}>
              <Grid item xs={12}>
                <Stack className={styles.skillsTitle} direction="row" spacing={1}>
                  <TagIcon fontSize="large"/>
                  <Typography variant="h4" component="h3">skills</Typography>
                </Stack>
              </Grid>
              <Grid item container gap={2}>
                { skills.map(({ node }) => (
                  <Grid key={node.id} item>
                    <CardSkill data={node} />
                  </Grid>
                )) }
              </Grid>
            </Grid>
            <Grid className={styles.myFunnyFacts} item container rowGap={5}>
              <Grid className={styles.myFunnyFactsBg} item xs={12}>
                <Box className={styles.myFunnyFactsBgDots}>
                  <StaticImage
                    src="../images/dots.png"
                    alt="square"
                    width={103}
                    height={103}
                  />
                </Box>
                <Box className={styles.myFunnyFactsBgSquare}>
                  <Box className={styles.square}></Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Stack className={styles.skillsTitle} direction="row" spacing={1}>
                  <TagIcon fontSize="large"/>
                  <Typography variant="h4" component="h3">my-fun-facts</Typography>
                </Stack>
              </Grid>
              <Grid item xs={11} md={7}>
                <Stack className={styles.myFunnyFactsStack} direction="row" useFlexGap flexWrap="wrap" gap={3}>
                  <Typography className={styles.myFunnyFactsStackItem} variant="body1" component="div">I like winter more than summer</Typography>
                </Stack>
              </Grid>
              <Grid item sm={5}>
                <Box className={styles.myFunnyFactsImageStack}>
                  <Box className={styles.myFunnyFactsImageStackDots}>  
                    <StaticImage
                      src="../images/dots.png"
                      alt="square"
                      width={84}
                      height={84}
                    />
                  </Box>
                  <Box className={styles.myFunnyFactsImageStackFigure}>  
                    <StaticImage
                      src="../images/square.png"
                      alt="square"
                      width={113}
                      height={113}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  );
}

export default AboutMePage

export const query = graphql`
  query {
    allContentfulSkill(sort: {position: ASC}) {
      edges {
        node {
          id
          title
          stackList
        }
      }
    }
  }
`
export const Head = () => <title>About-me Page by Dmytro Komlyk</title>