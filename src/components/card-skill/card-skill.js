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

  return (
    <Card className={styles.cardSkill}>
      <CardActionArea>
        <CardContent>
          <Typography className={styles.cardSkillTitle} gutterBottom variant="h5" component="h3">{ data?.title }</Typography>
          <Divider />
          <Stack className={styles.cardSkillStack} direction="row">
            { data?.stackList?.split(" ").map((skill, id) => (
              <Typography key={id} color="inherit" gutterBottom variant="body1" component="span">{ skill }</Typography>
            )) }
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardSkill;