import React from "react";
import { Card, Skeleton, List, ListItem, ListItemText } from "@mui/material";
import classes from "./Tokens.module.css";

type PropType = {
  tokens: any
  isRequesting: boolean
}
export const Tokens: React.FC<PropType> = ({ tokens, isRequesting }) => {
  const romanizedProps = {
    fontSize: "0.875em",
    color: "rgba(0, 0, 0, 0.6)"
  }
  const tokenProps = {
    fontSize: "1em",
    color: "rgba(0, 0, 0, 0.87)"
  }
  const wordClassProps = {
    fontSize: "0.8em",
    color: "rgba(0, 0, 0, 0.6)"
  }
  const tranlationProps = {
    fontSize: "0.875em",
    color: "rgba(0, 0, 0, 0.87)"
  }
  return (
    <div className={classes.tokens}>
      {!isRequesting ? (
        tokens.map((item, index) =>
          <Card variant="outlined" key={item.token + index} className={classes.tokenBlock}>
            <List disablePadding={true}>
              <ListItem disablePadding={true}>
                <ListItemText sx={{ margin: 0 }} primary={item.romanized} primaryTypographyProps={romanizedProps}
                  secondary={item.token} secondaryTypographyProps={tokenProps} />
              </ListItem>
              <ListItem disablePadding={true}>
                <ListItemText sx={{ margin: 0 }} primary={item.word_class} primaryTypographyProps={wordClassProps}
                  secondary={item.translation} secondaryTypographyProps={tranlationProps} />
              </ListItem>
            </List>
          </Card>)
      ) : (
        <>
          <Skeleton variant="rect" className={classes.tokenBlock} width={60} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} width={60} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} width={60} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} width={60} height={80} />
          <Skeleton variant="rect" className={classes.tokenBlock} width={60} height={80} />
        </>
      )
      }
    </div>
  );
};
