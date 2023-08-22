import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography,
 } from "@mui/material";

import * as styles from "./card-project.module.scss";

const CardProject = ({ data }) => {
  const {
    title,
    technologies,
    description,
    picture,
    githubLink,
    demoLink,
    isCommercial
  } = data;

  return (
    <>
      <Card className={styles.cardProject}>
        { picture
          &&
          <CardMedia className={styles.cardProjectMedia}>
            <GatsbyImage image={picture?.gatsbyImageData} alt={picture?.title} />
          </CardMedia>
        }
        <CardContent className={styles.cardProjectContent}>
          <Stack className={styles.cardProjectContentStackTech} direction="row">
            {technologies?.split(" ").map((technologie, id) => (
              <Typography key={id} variant="body1" component="span">
              { technologie }
            </Typography>
            ))}
          </Stack>
          <Typography className={styles.cardProjectContentTitle} gutterBottom variant="h5" component="h3">
            { title }
          </Typography>
          <Typography className={styles.cardProjectContentDescription} variant="body1" component="span">
            { description }
          </Typography>
        </CardContent>
        <CardActions className={styles.cardProjectActions}>
          <Button
            className={styles.cardProjectActionsBtn}
            href={githubLink}
            size="small"
          >
            GITHUB
          </Button>
          { demoLink
            &&
            <Button
              className={styles.cardProjectActionsBtn}
              href={demoLink}
              size="small"
            >
              LIVE
            </Button>
          }
        </CardActions>
      </Card>
      {isCommercial &&
        <Box className={styles.ribbonWrapper}>
          <Box className={styles.ribbonWrapperGreen}>Commercial</Box>
        </Box>
      }
    </>
  );
}

export default CardProject;