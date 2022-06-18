import * as React from 'react'
import { AnalysisResultArea } from './AnalysisResultArea'

export const AnalysisResultAreaContainer = ({ text }) => {
  return <AnalysisResultArea text={text} isRequesting={true}/>
}
