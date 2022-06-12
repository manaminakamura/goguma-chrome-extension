import React from 'react';
import classes from './AnalysisResultArea.module.css'
import { Card } from '@mui/material';
import { Tokens } from './Tokens'

export const AnalysisResultArea = ({ result }) => {
	console.log(result);
  return (
    <Card variant="outlined">
      <div className={classes.resultArea}>
        <span>日本語訳</span>
        <p>
        	<div>{result.translation}</div>
        </p>
        <span>発音</span>
        <p>
          <div>{result.romanized}</div>
        </p>
        <span>品詞分解</span>
        <p>
          <div>
            <Tokens tokens={result.tokens} />
          </div>
        </p>
      </div>
    </Card>
  )
}