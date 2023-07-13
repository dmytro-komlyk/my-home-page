import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  Toolbar,
  Box,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import Layout from "../components/layout/layout"
import CardProject from "../components/card-project/card-project"

import * as styles from "../components/projects.module.scss"

const ProjectsPage = ({ data }) => {
  const allProjects = data.allContentfulProject.edges;

  return (
    <Layout>
      <Toolbar/>
      <Box className={styles.projectsPage} component="div">
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box className={styles.projectsPageIntro}>
                <Typography className={styles.projectsPageTitle} variant="h4" component="h2"><span className={styles.projectsPageTitleIcon}>/</span> projects</Typography>
                <Typography className={styles.projectsPageDescription} variant="body1" component="p">List of my projects</Typography>
              </Box>
            </Grid>
            <Grid className={styles.completeApps} item container>
              <Grid className={styles.completeAppsDots} item xs={1}>
                <StaticImage
                  src="../images/dots.png"
                  alt="square"
                  width={155}
                  height={155}
                />
              </Grid>
              <Grid className={styles.completeAppsSquare} item xs={1}>
                <Box className={styles.square}></Box>
              </Grid>
              <Grid item xs={12}>
                <Stack className={styles.completeAppsTitle} direction="row" spacing={1}>
                  <TagIcon fontSize="large"/>
                  <Typography variant="h4" component="h3">complete-apps</Typography>
                </Stack>
              </Grid>
              <Grid className={styles.completeAppsStack} item container gap={3}>
                { allProjects && allProjects.filter(project => !project.node.isSmall).map(({ node }) => (
                  <Grid key={node.id} item>
                    <CardProject data={node} />
                  </Grid>
                )) }
              </Grid>
            </Grid>
            <Grid className={styles.smallProjects} item container>
              <Grid className={styles.smallProjectsSquare} item xs={1}>
                <Box className={styles.square}></Box>
              </Grid>
              <Grid className={styles.smallProjectsLeftDots} item xs={1}>
                <StaticImage
                  src="../images/dots.png"
                  alt="square"
                  width={155}
                  height={155}
                />
              </Grid>
              <Grid className={styles.smallProjectsRightDots} item xs={1}>
                <StaticImage
                  src="../images/dots.png"
                  alt="square"
                  width={155}
                  height={155}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack className={styles.smallProjectsTitle} direction="row" spacing={1}>
                  <TagIcon fontSize="large"/>
                  <Typography variant="h4" component="h3">small-projects</Typography>
                </Stack>
              </Grid>
              <Grid className={styles.smallProjectsStack} item container gap={3}>
                { allProjects && allProjects.filter(project => project.node.isSmall).map(({ node }) => (
                  <Grid key={node.id} item>
                    <CardProject data={node} />
                  </Grid>
                )) }
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}

export default ProjectsPage;

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
          picture {
            title
            gatsbyImageData
          }
          demoLink
          githubLink
        }
      }
    }
  }
`

export const Head = () => <title>Projects Page by Dmytro Komlyk</title>
