import React from "react"

type Props={
    question:string;
    answer:string[]
    callback:any;
    userAnswer:string;
    questionRem:number;
    totalQuestions:number;
}


export const QuestionCard:React.FC<Props>=({question,answer,callback,userAnswer,questionRem,totalQuestions})=>{

    return(
        <div>
           <p className="number">
               question: {questionRem } / {totalQuestions}
           </p>

           <p>{question}</p>

           <div>
               {answer.map(answer=>{
                   return(
                       <button onClick={callback}>{answer}</button>
                   )
               })}
           </div>
        </div>
    )
}