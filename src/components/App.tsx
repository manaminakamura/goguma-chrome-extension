import React from "react";
import { AnalysisResultAreaContainer } from "./AnalysisResultAreaContainer";

type PropType = {
  text: string
}

const App: React.FC<PropType> = ({ text }) => <AnalysisResultAreaContainer text={text} />;
export default App;
