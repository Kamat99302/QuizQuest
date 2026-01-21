import { FaPlay } from "react-icons/fa";

import { IoSparklesOutline } from "react-icons/io5";

export default function StartScreen({
    handleClick,
    difficulty,
    onDifficultyChange,
    questionsNumber,
    onQuestionsNumberChange,
    category,
    onCategoryChange
})  {

    return (
        <main>
            <div className="start-screen">
                <span aria-hidden="true">
                    <IoSparklesOutline/>
                    Test Your Knowledge
                </span>        
                <h1>QuizQuest</h1>
                <p>Challenge yourself with fun trivia questions</p>

              
                <div className="difficulty-section" role="form" aria-label="Quizz configuration">

                    {/*Sélecteur de la difficulté*/}
                    <label htmlFor="choose-difficulty">Difficulty</label>
                    <select 
                        id="choose-difficulty"
                        value={difficulty} 
                        onChange={(e)=> onDifficultyChange(e.target.value)}
                        aria-label="Select quiz difficulty level" 
                        > 
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    {/*Sélecteur du nombre de questions*/}
                    <label htmlFor="choose-numberOf-questions">Number of questions</label>
                    <select
                        id="choose-numberOf-questions"
                        value={questionsNumber}
                        onChange={(e)=> onQuestionsNumberChange(e.target.value)}
                        aria-label="Select number of questions"
                    > 
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>

                    {/*Sélécteur de catégorie*/}
                    <label Htmlfor="choose-category">Category</label>
                    <select
                        id="choose-category"
                        value={category}
                        onChange={(e)=> onCategoryChange(e.target.value)}
                        aria-label="Select quiz category"
                    > 
                        <option value={0}>Select category</option>
                        <option value={10}>Books</option>
                        <option value={11}>Films</option>
                        <option value={12}>Music</option>
                        <option value={15}>Video Games</option>
                        <option value={22}>Geography</option>
                        <option value={23}>History</option>
                    </select>

                    <button onClick={handleClick}
                    aria-label="Start the quizz with selected settings"
                    >
                        <FaPlay aria-hidden="true" /> 
                        Start Quiz
                    </button>
                </div>
            </div>  
        </main>
    )
}