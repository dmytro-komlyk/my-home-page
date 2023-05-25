import * as React from "react"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import {
  Stack,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
 } from "@mui/material";

import * as styles from "./card-project.module.scss";

const CardProject = ({ data }) => {
  const { title, technologies, description, picture } = data;
  
  return (
    <Card className={styles.cardProject}>
      <CardMedia className={styles.cardProjectMedia}>
        <GatsbyImage image={picture.gatsbyImageData} alt={picture.title} />
      </CardMedia>
      <CardContent className={styles.cardProjectContent}>
        <Stack className={styles.cardProjectContentStackTech} direction="row" spacing={1}>
          {technologies.split(" ").map((technologie, id) => (
            <Typography key={id} variant="body1" component="div">
            { technologie }
          </Typography>
          ))}
        </Stack>
        <Typography className={styles.cardProjectContentTitle} gutterBottom variant="h5" component="h3">
          { title }
        </Typography>
        <Typography className={styles.cardProjectContentDescription} variant="body1" component="div">
          { description }
        </Typography>
      </CardContent>
      <CardActions className={styles.cardProjectActions}>
        <Button size="small">GITHUB</Button>
        <Button size="small">LIVE</Button>
      </CardActions>
    </Card>
  );
}

export default CardProject;