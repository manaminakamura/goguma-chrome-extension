import React from "react";
import { Card, Skeleton } from "@mui/material";
import classes from "./Tokens.module.css";

type PropType = {
  tokens: any
  isRequesting: boolean
}
export const Tokens: React.FC<PropType> = ({ tokens, isRequesting }) => {
  return (
    <div className={classes.tokens}>
      {!isRequesting ? (
        tokens.map((item, index) =>
          <Card variant="outlined" key={item.token + index} className={classes.tokenBlock}>
            <div className={classes.tokenSmall}>{item.romanized}</div>
            <div>{item.token}</div>
            <div className={classes.tokenSmall}>{item.word_class}</div>
            <div className={classes.tokenSmall}>{item.translation}</div>
          </Card>)
      ) : (
        <>
          <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} height={80} />
        </>
      )
      }
    </div>
  );
};
