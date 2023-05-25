import * as React from 'react';
import {
  Stack,
  Divider,
  Card,
  CardContent,
  CardActionArea,
  Typography
} from '@mui/material';

import * as styles from "./card-skill.module.scss";

const CardSkill = ({ data }) => {
  const { title, stackList } = data;

  return (
    <Card className={styles.cardSkill}>
      <CardActionArea>
        <CardContent>
          <Typography className={styles.cardSkillTitle} gutterBottom variant="h5" component="h3">{ title }</Typography>
          <Divider />
          <Stack className={styles.cardSkillStack} direction="row" spacing={1}>
            { stackList?.split(" ").map((skill, id) => (
              <Typography key={id} gutterBottom variant="body1" component="div">{ skill }</Typography>
            )) }
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardSkill;