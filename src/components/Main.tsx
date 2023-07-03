import React, { useState , useEffect} from 'react';
import { Answer } from './Answer';
import { useAppSelector } from '../App';
import { Prizes } from './Prizes';

export const Main = () => {

  const [isShowPrizes, setIsShowPrizes] = useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;
    
    const activeQuestion = useAppSelector(state => state.game.activeQuestion);
    const data = useAppSelector(state => state.game.data!.data);
    
    const answersToArr = Object.entries(activeQuestion!.answers);

    const togglePrizes = () => {
      setIsShowPrizes(!isShowPrizes);
      setWidth(window.innerWidth)
    };
  
    useEffect(() => {
      window.addEventListener('resize', togglePrizes);

      if (width < breakpoint) {
        setIsShowPrizes(true)
      }

      return () => window.removeEventListener('resize', togglePrizes);
    }, []);
    
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
            <br />
              {width > breakpoint || <button onClick={() => togglePrizes()}>ShowPrize</button>}
            <div>
              {width < breakpoint && isShowPrizes|| <Prizes prize={activeQuestion?.prize} data={data}/>}
            </div>
        </>
    )
}