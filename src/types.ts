 export type StartScreenProps = {
    handleClick: () => void
    difficulty: DifficultyType
    onDifficultyChange: (difficulty: DifficultyType) => void
    questionsNumber: QuestionsNumberType
    onQuestionsNumberChange: (questionsNumber: QuestionsNumberType) => void
    category: CategoryType
    onCategoryChange: (category:CategoryType) => void
    darkMode: boolean
    switchMode: ()=>void
}

export type DifficultyType = "easy" | "medium" | "hard"


export type QuestionsNumberType = 5 | 10 | 15


export type CategoryType = 0 | 10 | 11 | 12 | 15 | 22 | 23


export type QuestionProps = {
    question: string
    allAnswers: string[]
    onSelectAnswer: onSelectAnswerType
    index: number
    quizCompleted: boolean
    correctAnswer: string
    selectedAnswer: SelectedAnswers
    
}

export type onSelectAnswerType = (index: number, item: string) => void
  
export type SelectedAnswers = {
    [index: number] : string
}

export type Quiz = {
    questions: QuestionData[]
    onSelectAnswer: onSelectAnswerType
    quizCompleted: boolean
    selectedAnswer: SelectedAnswers
    darkMode: boolean
}

export type QuestionData = {
    question: string
    allAnswers: string[]
    correct_answer: string
    incorrect_answers: string[]
}


