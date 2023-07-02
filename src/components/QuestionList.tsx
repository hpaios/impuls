import React from 'react';
import { Question } from '../ts/interfaces';

export const QuestionList = (props: Question | any) => {
    
    const { question } = props.activeQuestion;

    return(
        <>
            <h1>QuestionList</h1>
            {question}
        </>
    )
}