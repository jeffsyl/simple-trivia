export function prepareAnswers(correctAnswer, incorrectAnswers, type) {
    const answers = [...incorrectAnswers, correctAnswer];
    return type === "multiple" ? shuffleArray(answers) : answers.reverse();
  }

export function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}