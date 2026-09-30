export type Course = {
  level: string;
  title: string;
  audience: string;
  topics: string[];
  outcome: string;
};

export const japaneseLanguageCourses: Course[] = [
  {
    level: "JLPT N5",
    title: "Foundation Japanese",
    audience: "Students beginning Japanese with little or no prior knowledge.",
    topics: [
      "Hiragana & Katakana",
      "Basic grammar",
      "Essential vocabulary",
      "Everyday conversation",
      "Reading & listening fundamentals",
      "Japanese culture basics",
    ],
    outcome:
      "Build a foundation for simple Japanese communication and continued study at N4 level.",
  },
  {
    level: "JLPT N4",
    title: "Elementary Japanese",
    audience:
      "Students who have completed N5 or already have equivalent foundational Japanese.",
    topics: [
      "Expanded grammar",
      "Vocabulary & kanji",
      "Reading comprehension",
      "Listening practice",
      "Conversation",
      "Everyday communication",
    ],
    outcome:
      "Strengthen foundational Japanese and communicate across a wider range of everyday situations.",
  },
  {
    level: "JLPT N3",
    title: "Intermediate Japanese",
    audience:
      "Students progressing from foundational study toward intermediate Japanese.",
    topics: [
      "Intermediate grammar",
      "Vocabulary & kanji",
      "Reading comprehension",
      "Listening practice",
      "Conversation",
      "Practical & workplace Japanese",
    ],
    outcome:
      "Develop the comprehension and practical communication skills needed for intermediate study.",
  },
];

export const preparationCourses: Course[] = [
  {
    level: "Exam Preparation",
    title: "JLPT Preparation",
    audience:
      "Students preparing for the Japanese-Language Proficiency Test at their current study level.",
    topics: [
      "Grammar review",
      "Vocabulary & kanji review",
      "Reading practice",
      "Listening practice",
      "Exam-focused exercises",
    ],
    outcome:
      "Identify areas for improvement and approach JLPT tasks with focused practice.",
  },
];
