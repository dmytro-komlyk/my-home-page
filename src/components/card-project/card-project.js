import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"
// import { GatsbyImage } from "gatsby-plugin-image"
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

const CardProject = () => {
  return (
    <Card className={styles.cardProject}>
      <CardMedia classNme={styles.cardProjectMedia}>
        <StaticImage
          className={styles.img}
          src="../../images/kahoot.png"
          alt="photo"
          width={470}
          height="auto"
        />
      </CardMedia>
      <CardContent className={styles.cardProjectContent}>
        <Stack className={styles.cardProjectContentStackTech} direction="row" spacing={1}>
          <Typography variant="body1" component="div">CSS</Typography>
          <Typography variant="body1" component="div">Express</Typography>
          <Typography variant="body1" component="div">Node.js</Typography>
        </Stack>
        <Typography className={styles.cardProjectContentTitle} gutterBottom variant="h5" component="h3">
          Kahoot Answers Viewer
        </Typography>
        <Typography className={styles.cardProjectContentDescription} variant="body1" component="div">
          Get answers to your kahoot quiz
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