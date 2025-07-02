namespace SimpleQuiz {
  export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: number;
  }

  export const questions: Question[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: 1
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 2
    }
  ];
}