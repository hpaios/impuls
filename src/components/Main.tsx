import React from 'react';
import { Answer } from './Answer';
import { useAppSelector } from '../App';
import { Prizes } from './Prizes';

export const Main = () => {
    
    const activeQuestion = useAppSelector(state => state.game.activeQuestion);
    const data = useAppSelector(state => state.game.data!.data);
    
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
            <h1>{activeQuestion?.question}</h1>
            <div>
              {answersList}
            </div>
            <div>
              <Prizes prize={activeQuestion?.prize} data={data}/>
            </div>
        </>
    )
}