import { Experience, Project, Skill, SocialLink } from './types';

export const PROFILE = {
  name: "Muhammad Ridho Alfarid",
  role: "Statistics Student | Data Science & Machine Learning Enthusiast",
  bio: "I am an active 7th-semester Statistics student at Universitas Islam Indonesia, committed to applying statistical knowledge and programming skills in real-world contexts. I have been actively involved in volunteer activities, student staff positions, and serving as a practicum assistant, which have helped me develop strong communication, time management, and collaboration skills. I have a keen interest in Business Intelligence, Data Science, and Machine Learning.",
  email: "ridhoalfarid95@gmail.com",
  location: "Daerah Istimewa Yogyakarta, Indonesia",
  education: {
    university: "Universitas Islam Indonesia",
    degree: "Bachelor of Statistics",
    period: "2022 - Present (Expected 2026)",
    cgpa: "3.79 / 4.00",
    highlights: [
      "Top 3 PKM-GFT of PKM Idea Challenge 2024 by Direktorat Pembinaan Kemahasiswaan UII",
      "Undergraduate Thesis: Implementation of BERTopic on User Reviews of the Access by KAI Application on the Google Play Store",
      "Relevant Coursework: Database, Data Engineering, Financial Analysis, Business Intelligence, Machine Learning, and Spatial Analysis"
    ]
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/ridhoalfa", icon: "fa-brands fa-linkedin" },
  { platform: "Email", url: `mailto:${PROFILE.email}`, icon: "fa-solid fa-envelope" },
  { platform: "GitHub", url: "https://github.com/ridhoalfarid", icon: "fa-brands fa-github" },
  { platform: "Medium", url: "https://medium.com/@ridhoalfarid95", icon: "fa-brands fa-medium" }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "R", "SQL", "Indonesia (Native)", "English (Intermediate)"],
    icon: "fa-solid fa-code"
  },
  {
    category: "Data & BI Tools",
    items: ["Tableau", "Power BI", "Looker Studio", "SPSS", "MINITAB", "Excel"],
    icon: "fa-solid fa-chart-simple"
  },
  {
    category: "Technical Areas",
    items: ["Machine Learning", "Deep Learning", "NLP", "Data Engineering", "Spatial Analysis"],
    icon: "fa-solid fa-brain"
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Teamwork", "Communication", "Critical Thinking", "Problem Solving"],
    icon: "fa-solid fa-users"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Business Analyst Intern",
    company: "Telkom Indonesia",
    period: "Oct 2025 - Present",
    location: "Yogyakarta",
    description: [
      "Collect, manage, and validate performance and risk data to ensure high accuracy and reliability.",
      "Analyze performance metrics and risk indicators to uncover patterns and actionable insights.",
      "Design and visualize data through dashboards to facilitate strategic decision making."
    ]
  },
  {
    id: 2,
    role: "Practicum Assistant",
    company: "Universitas Islam Indonesia",
    period: "Mar 2024 - Aug 2025",
    location: "Sleman",
    description: [
      "Taught Statistical Computing (Mar 2025 – Aug 2025): Simulation, bootstrapping, matrix decomposition.",
      "Taught Programming Algorithms (Sep 2024 – Jan 2025): Data structures, algorithms, descriptive statistics.",
      "Taught Database (Mar 2024 – Jul 2024): MySQL queries and analytical software connections.",
      "Designed quizzes and assignments to evaluate student performance."
    ]
  },
  {
    id: 3,
    role: "Statistician Intern",
    company: "Badan Pusat Statistik Kota Jakarta Timur",
    period: "Jan 2025 - Feb 2025",
    location: "East Jakarta",
    description: [
      "Performed data entry to support the publication process.",
      "Applied exploratory data analysis on datasets to identify patterns and trends.",
      "Assisted in managing internal documents."
    ]
  },
  {
    id: 4,
    role: "Research and Administration",
    company: "PKM Corner UII",
    period: "Dec 2023 - Dec 2024",
    location: "Sleman",
    description: [
      "Managed administrative requirements for student creativity programs (PKM).",
      "Compiled databases to monitor proposals, funding, and PIMNAS qualifications.",
      "Developed internal selection assessment forms."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AirWise: Air Quality Prediction",
    description: "Developed a website for predicting air quality using ISPU data from DKI Jakarta (2021-2024). Applied KNN (96% accuracy) and SVM (97% accuracy) algorithms.",
    techStack: ["Python", "Machine Learning", "Streamlit"],
    category: "Data Science",
    imageUrl: "https://picsum.photos/seed/airwise/600/400",
  },
  {
    id: 2,
    title: "Harmony Heaven Hotel Database",
    description: "End-to-end database creation covering design to query execution. Manages data for reservations, visitors, employees, rooms, and transactions.",
    techStack: ["MySQL", "Database Design", "SQL"],
    category: "Database",
    imageUrl: "https://picsum.photos/seed/hotel/600/400",
  },
  {
    id: 3,
    title: "McDonald's Stock Prediction (LSTM vs GRU)",
    description: "Analyzed the effect of global boycotts on stock prices. Used Optuna for optimization. Untuned LSTM achieved the lowest error rate.",
    techStack: ["R", "Python", "Deep Learning", "LSTM"],
    category: "Data Science",
    imageUrl: "https://picsum.photos/seed/stock/600/400",
  },
  {
    id: 4,
    title: "Face Recognition System",
    description: "Real-time face recognition system using OpenCV and LBPH model to identify individuals from a live video stream.",
    techStack: ["Python", "OpenCV", "Computer Vision"],
    category: "Computer Vision",
    imageUrl: "https://picsum.photos/seed/face/600/400",
  },
  {
    id: 5,
    title: "Automated Toll Gate Monitoring",
    description: "Traffic monitoring system to count vehicles using CCTV streams. Leveraged background subtraction and contour analysis.",
    techStack: ["Python", "OpenCV", "Object Detection"],
    category: "Computer Vision",
    imageUrl: "https://picsum.photos/seed/toll/600/400",
  },
  {
    id: 6,
    title: "Tapera Policy Sentiment Analysis",
    description: "Analyzed public sentiment on Twitter regarding Tapera policy using IndoBERTweet fine-tuning on 4,112 tweets.",
    techStack: ["Python", "NLP", "IndoBERTweet", "Hugging Face"],
    category: "Natural Language Processing",
    imageUrl: "https://picsum.photos/seed/nlp/600/400",
  },
  {
    id: 7,
    title: "CERDAS: Education Quality Infographic",
    description: "Comparative analysis of education quality in Indonesia, Malaysia, and Singapore based on PISA 2022 results.",
    techStack: ["Tableau", "Data Visualization"],
    category: "Data Visualization",
    imageUrl: "https://picsum.photos/seed/cerdas/600/400",
  },
  {
    id: 8,
    title: "Fashion Classification (ANN vs CNN)",
    description: "Compared ANN and CNN performance in classifying upper wear, lower wear, and footwear to improve apparel recognition.",
    techStack: ["Python", "Deep Learning", "CNN", "ANN"],
    category: "Computer Vision",
    imageUrl: "https://picsum.photos/seed/fashion/600/400",
  }
];