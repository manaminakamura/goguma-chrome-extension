import React from "react";
import { Card, Skeleton, List, ListItem, ListItemText } from "@mui/material";
import { Tokens } from "./Tokens";

type PropType = {
  text: string
  result: any
  isRequesting: boolean
}

export const AnalysisResultArea: React.FC<PropType> = ({ text, result, isRequesting }) => {
  const primaryProps = {
    fontSize: "0.875em",
    color: "rgba(0, 0, 0, 0.6)"
  }
  const secondaryProps = {
    fontSize: "1em",
    color: "rgba(0, 0, 0, 0.87)"
  }
  return (
    <Card variant="none">
       <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemText sx={{ margin: 0 }} primary="テキスト" primaryTypographyProps={primaryProps}
              secondary={text} secondaryTypographyProps={secondaryProps} />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ margin: 0 }} primary="日本語訳" primaryTypographyProps={primaryProps}
              secondary={ isRequesting ? null : result.translation } secondaryTypographyProps={ isRequesting ? null : secondaryProps} />
          </ListItem>
          { isRequesting ?<ListItem><Skeleton width={200} /></ListItem> : null }
          <ListItem>
            <ListItemText sx={{ margin: 0 }} primary="発音" primaryTypographyProps={primaryProps}
              secondary={ isRequesting ? null : result.romanized } secondaryTypographyProps={ isRequesting ? null : secondaryProps} />
          </ListItem>
          { isRequesting ?<ListItem><Skeleton width={200} /></ListItem> : null }
          <ListItem>
            <ListItemText sx={{ margin: 0 }} primary="品詞分解" primaryTypographyProps={primaryProps} />
          </ListItem>
          <ListItem>
            <Tokens tokens={result.tokens || []} isRequesting={isRequesting} />
          </ListItem>
        </List>
    </Card>
  );
};