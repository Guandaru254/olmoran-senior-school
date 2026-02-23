export type Combination = {
  pathway: string;
  track: string;
  subjects: string[];
  code: string;
  status: "Approved" | "Pending" | "Declined";
};

export type Pathway = {
  name: string;
  tracks: string[];
  description: string;
  icon: string;
  color: string;
};

export const stemCombinations: Combination[] = [
  {
    pathway: "STEM",
    track: "Applied Sciences",
    subjects: ["Business Studies", "Computer Studies", "Physics"],
    code: "ST2007",
    status: "Approved",
  },
  {
    pathway: "STEM",
    track: "Applied Sciences",
    subjects: ["Agriculture", "Computer Studies", "Physics"],
    code: "ST2067",
    status: "Approved",
  },
  {
    pathway: "STEM",
    track: "Applied Sciences",
    subjects: ["Agriculture", "Geography", "Physics"],
    code: "ST2075",
    status: "Approved",
  },
  {
    pathway: "STEM",
    track: "Pure Sciences",
    subjects: ["Agriculture", "Biology", "Chemistry"],
    code: "ST1042",
    status: "Approved",
  },
  {
    pathway: "STEM",
    track: "Applied Sciences",
    subjects: ["Biology", "Business Studies", "Computer Studies"],
    code: "ST2097",
    status: "Approved",
  },
  {
    pathway: "STEM",
    track: "Applied Sciences",
    subjects: ["Core Mathematics", "Biology", "Geography"],
    code: "ST2040",
    status: "Approved",
  },
];

export const socialCombinations: Combination[] = [
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Christian Religious Education", "Geography", "History & Citizenship"],
    code: "SS2019",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Business Studies", "Geography", "Literature in English"],
    code: "SS2061",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Computer Studies", "Geography", "History & Citizenship"],
    code: "SS2024",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Geography", "History & Citizenship", "Literature in English"],
    code: "SS2004",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Core Mathematics", "Business Studies", "Geography"],
    code: "SS2056",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Business Studies", "History & Citizenship", "Literature in English"],
    code: "SS2100",
    status: "Approved",
  },
  {
    pathway: "Social Sciences",
    track: "Humanities & Business Studies",
    subjects: ["Christian Religious Education", "Fasihi ya Kiswahili", "History & Citizenship"],
    code: "SS2069",
    status: "Approved",
  },
];

export const pathways: Pathway[] = [
  {
    name: "STEM",
    tracks: ["Applied Sciences", "Pure Sciences"],
    description:
      "Science, Technology, Engineering & Mathematics — preparing learners for careers in technology, healthcare, agriculture, and engineering.",
    icon: "⚗️",
    color: "#166534",
  },
  {
    name: "Social Sciences",
    tracks: ["Humanities & Business Studies"],
    description:
      "A rich pathway covering humanities, business, languages, and social studies — ideal for law, economics, media, and public service careers.",
    icon: "🌍",
    color: "#92400e",
  },
];

export const compulsorySubjects: string[] = [
  "English",
  "Kiswahili / Kenya Sign Language",
  "Mathematics (Core or Advanced)",
  "Community Service Learning",
  "Physical Education",
  "Life Skills & Values",
];