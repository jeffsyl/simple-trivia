export function prepareAnswers(correctAnswer, incorrectAnswers, type) {
  const answers = [...incorrectAnswers, correctAnswer];
  return type === "multiple" ? shuffleArray(answers) : orderBool(answers);
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function orderBool(answers) {
  return [...answers].sort((a, b) => {
    if (a === "True") return -1;
    if (b === "True") return 1;
    return 0;
  });
}
