import React from 'react';
import { Card } from '@mui/material';
import classes from './Tokens.module.css'

export const Tokens = ({ tokens }) => {
  return (
    <div className={classes.tokens}>
      {
        tokens.map((item, index) =>
          <Card variant="outlined" key={item.token + index} className={classes.tokenBlock}>
            <div className={classes.tokenSmall}>{item.romanized}</div>
            <div>{item.token}</div>
            <div className={classes.tokenSmall}>{item.word_class}</div>
            <div className={classes.tokenSmall}>{item.translation}</div>
          </Card>)
      }
    </div>
  )
}
