import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import WavingHandIcon from '@mui/icons-material/WavingHand';
import SquareIcon from "@mui/icons-material/Square";
import TagIcon from "@mui/icons-material/Tag";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Toolbar,
  Box,
  Paper,
  Container,
  Grid,
  Stack,
  Button,
  Typography,
  Link as LinkMui
} from "@mui/material";
import Layout from "../components/layout/layout"
import CardProject from "../components/card-project/card-project"
import CardSkill from "../components/card-skill/card-skill"
import * as styles from "../components/index.module.scss"

const IndexPage = ({ data }) => {
  const { allContentfulProject, allContentfulSkill } = data;
  const projects = allContentfulProject.edges;

  return (
    <Layout>
      <Toolbar/>
      <Paper className={styles.intro} component="section">
        <Container>
          <Grid container rowGap={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Stack className={styles.textStack} spacing={4}>
                <Typography variant="h4" component="h1">Hello <WavingHandIcon fontSize="medium"/> , <br/>my name is <span>Dmytro</span></Typography>
                <Typography className={styles.textStackPurpose} variant="body1" component="p">I build responsive websites where technologies meet creativity</Typography>
                <Button className={styles.contactBtn}>Contact me</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
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
                  <Typography className={styles.text} variant="h5" componen="div">First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack.</Typography>
                </fieldset>
                <fieldset>
                  <legend align="right"><FormatQuoteIcon fontSize="large"/></legend>
                  <Typography className={styles.text} variant="h6" component="div">- George Carrette</Typography>
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
                  <Link to="/projects" className={styles.link}>
                    <Typography variant="body1" component="div">View All</Typography>
                  </Link>
                  <ArrowRightAltIcon fontSize="large"/>
                </Box>
              </Stack>
            </Grid>
            <Grid item container gap={3}>
              {projects && projects.filter(project => !project.node.isSmall).map(({ node }) => (
                <Grid key={node.id} item>
                  <CardProject data={node} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.skills} component="section">
        <Container>
          <Grid container rowGap={4} justifyContent="center">
            <Grid item xs={12}>
              <Stack className={styles.title} direction="row" spacing={1}>
                <TagIcon fontSize="large"/>
                <Typography variant="h4" component="h2">skills</Typography>
                <Box className={styles.divider}></Box>
              </Stack>
            </Grid>
            <Grid item md={5} margin="auto">
              <Box className={styles.imageStack}>
                <Box className={styles.imageStackItemTopLeft}>  
                  <StaticImage
                    className={styles.img}
                    src="../images/dots.png"
                    alt="square"
                    width={155}
                    height={155}
                  />
                </Box>
                <Box className={styles.imageStackItemTopRight}>
                  <Box className={styles.square}></Box>
                </Box>
                <Box className={styles.imageStackItemBottomLeft}>  
                  <StaticImage
                    className={styles.img}
                    src="../images/square.png"
                    alt="square"
                    width={113}
                    height={113}
                  />
                </Box>
                <Box className={styles.imageStackItemMiddle}>
                  <StaticImage
                    className={styles.img}
                    src="../images/dots.png"
                    alt="photo"
                    width={84}
                    height={84}
                  />
                </Box>
                <Box className={styles.imageStackItemBottomRight}>
                  <Box className={styles.square}></Box>
                </Box>
              </Box>
            </Grid>
            <Grid className={styles.skillsStack} item container xs={11} md={7}>
              <Grid className={styles.skillsStackFrontend} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "front-end")).node}
                />
              </Grid>
              <Grid className={styles.skillsStackBackend} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "back-end")).node}
                />
              </Grid>
              <Grid className={styles.skillsStackDatabases} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "databases")).node}
                />
              </Grid>
              <Grid className={styles.skillsStackFrameworks} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "frameworks")).node}
                />
              </Grid>
              <Grid className={styles.skillsStackTools} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "tools")).node}
                />
              </Grid>
              <Grid className={styles.skillsStackLanguage} item>
                <CardSkill
                  data={allContentfulSkill.edges.find(({ node }) => (node.title === "language")).node}
                />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.aboutMe} component="section">
        <Container>
          <Grid container rowGap={4} justifyContent="center">
            <Grid item xs={12}>
              <Stack className={styles.title} direction="row" spacing={1}>
                <TagIcon fontSize="large"/>
                <Typography variant="h4" component="h2">about-me</Typography>
                <Box className={styles.divider}></Box>
              </Stack>
            </Grid>
            <Grid item container xs={12} alignItems="baseline">
              <Grid item xs={11} sm={6} md={6}>
                <Stack className={styles.aboutMeInfo} rowGap={4}>
                  <Typography variant="body1" component="div">
                    Hi, I am Full-stack Developer with knowledge that allow to quickly adapt to any React application and start bringing value within short period of time.<br/>
                    My main motivation to work as a developer - to be a part of the team that creates new apps for improving life quality, making our daily life much easier.<br/>
                    Highly proactive, flexible and a fast learner with strong analytical and problem solving skills.<br/>
                  </Typography>
                  <Button className={styles.aboutMeInfoBtn} endIcon={<ArrowRightAltIcon />} component={Link} to="/about-me">
                    Read more
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={11} sm={5} md={5}>
                <Box className={styles.imageStack}>
                  <Box className={styles.imageStackItemDots1}>
                    <StaticImage
                      className={styles.img}
                      src="../images/dots.png"
                      alt="square"
                      width={84}
                      height={84}
                    />
                  </Box>
                  <Box className={styles.imageStackItemDots2}>
                    <StaticImage
                      className={styles.img}
                      src="../images/dots.png"
                      alt="square"
                      width={104}
                      height={56}
                    />
                  </Box>
                  <Box className={styles.imageStackItemDots3}>
                    <StaticImage
                      className={styles.img}
                      src="../images/dots.png"
                      alt="square"
                      width={103}
                      height={103}
                    />
                  </Box>
                  <Box className={styles.imageStackItemImage}>
                    <StaticImage
                      className={styles.img}
                      src="../images/image-2.png"
                      alt="square"
                      width={330}
                      height={507}
                    />
                  </Box>
                </Box>
                <Box className={styles.imageStackDivider}></Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.contacts} component="section">
        <Container>
          <Grid container rowGap={4} justifyContent="center">
            <Grid item xs={12}>
              <Stack className={styles.title} direction="row" spacing={1}>
                <TagIcon fontSize="large"/>
                <Typography variant="h4" component="h2">contacts</Typography>
                <Box className={styles.divider}></Box>
              </Stack>
            </Grid>
            <Grid item xs={11} sm={6} md={6}>
              <Typography variant="body1" component="div">
                If you have other request or question, don’t hesitate to contact me
              </Typography>
            </Grid>
            <Grid item xs={11} sm={6} md={6}>
              <Stack className={styles.contactsStack}>
                <Typography className={styles.contactsStackTitle} variant="h6" component="h4">Message me here</Typography>
                <Box className={styles.contactsStackItem}>
                  <EmailIcon/>
                  <LinkMui href="#" underline="hover">dima.komlyk@gmail.com</LinkMui>
                </Box>
                <Box className={styles.contactsStackItem}>
                  <TelegramIcon/>
                  <LinkMui href="https://t.me/dmytro_komlyk" underline="hover">t.me/dmytro_komlyk</LinkMui>
                </Box>
                <Box className={styles.contactsStackItem}>
                  <LinkedInIcon/>
                  <LinkMui href="https://www.linkedin.com/in/dmytro-komlyk/" underline="hover">linkedin</LinkMui>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allContentfulProject {
      edges {
        node {
          id
          title
          technologies
          description
          isCommercial
          isProgress
          isSmall
          demoLink
          githubLink
          picture {
            title
            gatsbyImageData
          }
        }
      }
    }
    allContentfulSkill {
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

export const Head = () => <title>Home Page by Dmytro Komlyk</title>
