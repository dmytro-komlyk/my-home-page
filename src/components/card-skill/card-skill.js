import * as React from 'react';
import {
  Stack,
  Divider,
  Card,
  CardContent,
//   CardMedia,
  CardActionArea,
  Typography
} from '@mui/material';

import * as styles from "./card-skill.module.scss";

const CardSkill = ({ data }) => {
  const { title, skills } = data;
  return (
    <Card className={styles.cardSkill}>
      <CardActionArea>
        <CardContent>
          <Typography className={styles.cardSkillTitle} gutterBottom variant="h5" component="h3">{ title }</Typography>
          <Divider />
          <Stack className={styles.cardSkillStack} direction="row" spacing={1}>
            { skills.map((skill) => (
              <Typography gutterBottom variant="body1" component="div">{ skill }</Typography>
            )) }
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardSkill;