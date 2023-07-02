import React from 'react';
import { Answer } from './Answer';
import { useAppSelector } from '../App';
import { Prizes } from './Prizes';
import { Question } from '../ts/interfaces';

export const QuestionList = () => {
    
    const activeQuestion = useAppSelector(state => state.game.activeQuestion);
    const data = useAppSelector(state => state.game.data);
    const newData: Question[] = data!.data;
    
    console.log(newData);
    
    const answersToArr = Object.entries(activeQuestion!.answers);
    
    const answersList = answersToArr.map((answer): any => {
        return <Answer
                    item={answer[0]}
                    answer={answer[1]}
                    key={answer[0]}
                    correct={activeQuestion?.answer}
                    nextLevelId={activeQuestion?.nextLevelId}
                    prize={activeQuestion?.prize}
                />
    })

    return(
        <>
            <h1>QuestionList</h1>
            {activeQuestion?.question}
            {answersList}
            <Prizes prize={activeQuestion?.prize} data={newData}/>
        </>
    )
}