import React, { useState, useEffect } from 'react'
import { AnalysisResultArea } from './AnalysisResultArea'

export const AnalysisResultAreaContainer = ({ text }) => {
	console.log(11111);
	const [result, setResult] = useState({});
	const [isRequesting, setIsRequesting] = useState(true);
  const url = `https://django-konlpy-api-wbc37rju4a-uc.a.run.app/analysis?text=${text}`;
	useEffect(() => {
		setIsRequesting(true);
		fetch(url)
			.then(response => response.json())
			.then(data => {
					console.log(data);
					setResult(data);
					setIsRequesting(false);
			})
	}, [text])
  return <AnalysisResultArea text={text} result={result} isRequesting={isRequesting}/>
}
