import Question from "./question"

type StartScreenProps = {
    handleClick: () => void
    difficulty: DifficultyType
    onDifficultyChange: (difficulty: DifficultyType) => void
    questionsNumber: QuestionsNumberType
    onQuestionsNumberChange: (questionsNumber: QuestionsNumberType) => void
    category: CategoryType
    onCategoryChange: (category:CategoryType) => void
}

type DifficultyType = "easy" | "medium" | "hard"


type QuestionsNumberType = 5 | 10 | 15


type CategoryType = 0 | 10 | 11 | 12 | 15 | 22 | 23
