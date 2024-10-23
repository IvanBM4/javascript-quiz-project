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

        if (difficulty > 0 && difficulty < 4 && !isNaN(difficulty)) {

            const filteredQuestions = this.questions.filter(eachQuestion => {
                return eachQuestion.difficulty === difficulty
            })

            this.questions = filteredQuestions
        }
    }

    averageDifficulty() {

        const sumDifficulty = this.questions.reduce((acc, eachQuestion) => {

            // if (eachPresident.leftOffice === null) {
            //     return acc
            // }

            return acc + eachQuestion.difficulty
        }, 0)

        const average = sumDifficulty / this.questions.length

        return average
    }




}














