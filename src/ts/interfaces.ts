export interface InitialState {
  data: Array<Question> | null,
  activeQuestion: Question | null,
  status: string,
  prize: string | null
}

export interface Question {
  question: string
  answers: {
    a: string,
    b: string,
    c: string,
    d: string
  },
  answer: string,
  id: string,
  nextLevelId: string,
  prize: string
}

