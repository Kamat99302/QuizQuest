export default function Question({question, allAnswers, onSelectAnswer, index, quizCompleted, correctAnswer, selectedAnswer}){
    return(
        <fieldset className="quizz">
            <p>{question}</p>

            <div className="quizz-button-section">
                {allAnswers.map(item=>(
                    <button 
                    tabIndex={0}
                    className={`
                        ${quizCompleted && item === correctAnswer? 'correct-answer' : ''} 
                        ${!quizCompleted && item === selectedAnswer[index]? 'selected' : ''}
                        ${quizCompleted && item === selectedAnswer[index] && item !== correctAnswer? 'wrong-answer' : ''}
                        `}
                        onClick={()=>onSelectAnswer(index, item)}
                        disabled={quizCompleted}
                        aria-label={item}
                        key={item}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </fieldset>
    )
}