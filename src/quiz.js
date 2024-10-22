class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    moveToNextQuestion() {
        this.currentQuestionIndex++
    }
    shuffleQuestions() {
        this.questions.sort(() => .5 - Math.random());
    }
    checkAnswer(answerToCheck) {
        const correctAnswer = this.getQuestion().answer
        if (answerToCheck === correctAnswer) {
            this.correctAnswers++
        }
    }
    hasEnded() {
        return this.currentQuestionIndex >= this.questions.length
    }
    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 || this.difficulty <= 3) {
            this.questions = this.questions.filter(eachQuestion => {
                return eachQuestion.difficulty
            }

            )
        }
        return this.questions

    }




}
averageDifficulty() {
    const difficultyMid = this.questions.filter(eachQuestion => {
        return eachQuestion.difficulty / this.questions.length
    }

    )
    return difficultyMid
}



}










