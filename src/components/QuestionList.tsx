import React from 'react';
import { Answer } from './Answer';
import { useAppSelector } from '../App';

export const QuestionList = () => {
    
    const activeQuestion = useAppSelector(state => state.game.activeQuestion);
    
    const answersToArr = Object.entries(activeQuestion!.answers);
    
    const answersList = answersToArr.map((answer): any => {
        return <Answer
                    item={answer[0]}
                    answer={answer[1]}
                    key={answer[0]}
                    correct={activeQuestion?.answer}
                    nextLevelId={activeQuestion?.nextLevelId}
                />
    })

    return(
        <>
            <h1>QuestionList</h1>
            {activeQuestion?.question}
            {answersList}
        </>
    )
}