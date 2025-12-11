import { Experience, Project, Skill, SocialLink, OrganizationVolunteer, Certification } from './types';

export const PROFILE = {
  name: "Muhammad Ridho Alfarid",
  role: "Statistics Student | Data Enthusiast",
  bio: "I am a 7th-semester Statistics student at Universitas Islam Indonesia with a strong interest in Artificial Intelligence, Business Intelligence, and Data Science. I have gained practical experience through internships, teaching assistantships, and volunteer activities. These positions have strengthened my professional skills and technical abilities to solve real-world problems.",
  email: "ridhoalfarid95@gmail.com",
  location: "Daerah Istimewa Yogyakarta, Indonesia",
  education: {
    university: "Universitas Islam Indonesia",
    degree: "Bachelor of Statistics",
    period: "2022 - Present (Expected 2026)",
    gpa: "3.79 / 4.00",
    highlights: [
      "Top 3 PKM-GFT of PKM Idea Challenge 2024 by Direktorat Pembinaan Kemahasiswaan UII.",
      "Undergraduate Thesis: Implementation of BERTopic on User Reviews of the Access by KAI Application on the Google Play Store.",
      "Relevant Coursework: Business Intelligence, Database, Data Engineering, Financial Analysis, Machine Learning, and Time Series Analysis."
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
    category: "Technical Skills",
    items: ["Data Analysis", "Data Science", "Data Visualization", "Machine Learning", "Deep Learning", "NLP"],
    icon: "fa-solid fa-brain"
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Communication", "Teamwork", "Time Management", "Problem Solving", "Critical Thinking"],
    icon: "fa-solid fa-users"
  },
  {
    category: "Tools",
    items: ["R", "Python", "MySQL", "SPSS", "MINITAB", "Tableau", "Looker Studio", "PowerBI", "QGIS", "Microsoft Office"],
    icon: "fa-solid fa-tools"
  },
  {
    category: "Languages",
    items: ["Indonesia (Native)", "English (Intermediate)"],
    icon: "fa-solid fa-language"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Business Analyst Intern",
    company: "PT Telkom Indonesia",
    period: "Oct 2025 - Present",
    location: "Yogyakarta",
    imageUrl: "/foto/Intern Telkom YK.jpg",
    description: [
      "Collect, manage, and validate performance and risk data to ensure high accuracy and reliability.",
      "Analyze churn data and Wilayah Telekomunikasi (Witel) performance metrics in Region 3 to identify patterns, risk factors, and actionable insights.",
      "Design and build interactive dashboards in Looker Studio to visualize churn trends and customer behavior in Region 3 to support strategic decision making.",
      "Contribute to the development of the 2026 business plan for Witel Yogyakarta Jateng Selatan by providing performance assessments and supporting documentation."
    ]
  },
  {
    id: 2,
    role: "Practicum Assistant",
    company: "Universitas Islam Indonesia",
    period: "Mar 2024 - Aug 2025",
    location: "Sleman",
    imageUrl: "/foto/Practicum Assistant.jpg",
    description: [
      "Statistical Computing (Mar 2025 – Aug 2025).",
      "Programming Algorithms (Sep 2024 – Jan 2025).",
      "Database (Mar 2024 – Jul 2024).",
      "Developed quizzes, assignments, and tutorial materials to support student learning.",
      "Evaluated student performance through quizzes and practicum reports."
    ]
  },
  {
    id: 3,
    role: "Statistician Intern",
    company: "Badan Pusat Statistik",
    period: "Jan 2025 - Feb 2025",
    location: "East Jakarta",
    imageUrl: "/foto/Statistician Intern.jpg",
    description: [
      "Performed accurate data entry and verification to support the regional publication process.",
      "Conducted exploratory data analysis on public transportation datasets in Jakarta to analyze passenger volume and seasonal fluctuations.",
      "Managed and organized internal documents to support reporting workflows"
    ]
  },
  {
    id: 4,
    role: "Research and Administration",
    company: "PKM Corner UII",
    period: "Dec 2023 - Dec 2024",
    location: "Sleman",
    imageUrl: "/foto/Research and Administration.jpg",
    description: [
      "Managed PKM administrative tasks and monitored proposal submissions across faculties.",
      "Built and maintained databases to track performance indicators.",
      "Created assessment forms and proposal templates for internal UII selection."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AirWise: Air Quality Prediction",
  //  description: "This project developed a website for predicting air quality, utilizing the Air Pollution Standard Index (ISPU) from DKI Jakarta (January 1, 2021 – July 31, 2024). It applied KNN and SVM algorithms, achieving accuracies of 96% and 97%, respectively. The best-performing model is deployed to help the public understand air quality and take appropriate precautions for outdoor activities.",
    techStack: ["Python", "Classification", "Machine Learning"],
    category: "Machine Learning",
    imageUrl: "/foto/AirWise.png",
    link: "https://airwise.streamlit.app/"
  },
  {
    id: 2,
    title: "Harmony Heaven Hotel Database",
  //  description: "This project involved the creation of a database for Harmony Heaven Hotel, covering the process from database design to executing queries for various simulations within the company's system. The database was designed to manage data related to reservations, visitors, employees, rooms, and transactions, and it supported efficient decision-making through structured queries.",
    techStack: ["MySQL", "Database Design", "SQL"],
    category: "Database",
    imageUrl: "/foto/Harmony Heaven Hotel Database.png",
    link: "https://drive.google.com/file/d/1mEcVxMlhctd8zRqvzc8upZcIUPrxz_7m/view"
  },
  {
    id: 3,
    title: "Perbandingan Kinerja Long Short Term Memory dan Gated Recurrent Unit dalam Prediksi Harga Saham McDonald's",
  //  description: "This project analyzed the effect of a global boycott on McDonald's stock price through time series forecasting using LSTM and GRU models. The models were trained on historical stock data from January 31, 2015 to January 31, 2025, and optimized using Optuna. The untuned LSTM model achieved the lowest error rate, highlighting its effectiveness in capturing market sentiment changes during social movements.",
    techStack: ["Python", "Forecasting", "Deep Learning"],
    category: "Data Science",
    imageUrl: "/foto/Perbandingan Kinerja LSTM dan GRU.png",
    link: "https://drive.google.com/file/d/1Wky-W0hJum_2LtROQ5Y9aaykJMt92q7F/view"
  },
  {
    id: 4,
    title: "ShinyApp: Heart Disease Predictions",
  //  description: "This project developed an interactive website using Shiny to classify heart diseases. The application utilized the Random Forest algorithm and achieved 90% accuracy. The Shiny app is designed to be user-friendly, enabling users to make predictions easily and quickly.",
    techStack: ["R", "Classification", "Machine Learning"],
    category: "Machine Learning",
    imageUrl: "/foto/ShinyApp Heart Disease Predictions.png",
    link: "https://mr-alfa.shinyapps.io/Heart-Disease-Predictions/"
  },
  {
    id: 5,
    title: "Pemodelan Topik Terkait Pemblokiran Rekening oleh PPATK Menggunakan BERTopic",
  //  description: "This project analyzed public opinion on PPATK's policy of freezing dormant bank accounts using topic modeling (BERTopic) on YouTube comments. It leveraged IndoSBERT embeddings, UMAP, HDBSCAN, and KeyBERTInspired to uncover dominant themes and provide data-driven insights into public perspectives on financial regulations.",
    techStack: ["Python", "NLP", "Topic Modeling"],
    category: "Natural Language Processing",
    imageUrl: "/foto/Pemodelan Topik.png",
    link: "https://medium.com/@ridhoalfarid95/pemodelan-topik-terkait-pemblokiran-rekening-oleh-ppatk-menggunakan-bertopic-a36b1c3d624c"
  },
  {
    id: 6,
    title: "Sentiment Analysis of Tapera Policy Using IndoBERTweet",
  //  description: "This project aimed to analyze public sentiment towards the Tapera policy using data from social media platform X (Twitter). It used IndoBERTweet as a pre-trained model for fine-tuning, utilizing 4,112 tweets.",
    techStack: ["Python", "NLP", "Sentiment Analysis"],
    category: "Natural Language Processing",
    imageUrl: "/foto/Sentiment Analysis of Tapera Policy Using IndoBERTweet.png",
    link: "https://medium.com/statistics-uii/sentiment-analysis-of-tapera-policy-using-indobertweet-43c332701efe"
  },
  {
    id: 7,
    title: "Perbandingan Kinerja ANN dan CNN dalam Klasifikasi Citra Pakaian Atas, Pakaian Bawah, dan Alas Kaki",
  //  description: "This project identified three primary fashion categories: upper wear, lower wear, and footwear. Leveraging deep learning, it compared the performance of Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) to improve the efficiency, accuracy, and personalization of automated apparel recognition systems.",
    techStack: ["Python", "Image Classification", "Deep Learning"],
    category: "Computer Vision",
    imageUrl: "/foto/Perbandingan Kinerja ANN dan CNN.png",
    link: "https://medium.com/@ridhoalfarid95/perbandingan-kinerja-artificial-neural-network-dan-convolutional-neural-network-dalam-klasifikasi-2ce891529155"
  },
  {
    id: 8,
    title: "Face Recognition",
  //  description: "This project developed a real-time face recognition system using OpenCV and LBPH model to identify individuals from a live video stream.",
    techStack: ["Python", "OpenCV", "Computer Vision"],
    category: "Computer Vision",
    imageUrl: "/foto/face_recognition.png",
    link: "https://github.com/ridhoalfarid/Face-Recognition"
  },
  {
    id: 9,
    title: "CERDAS: Meningkatkan Kualitas Pendidikan di Tiga Negara Tetangga",
  //  description: "This project presented an infographic that compared the educational quality of Indonesia, Malaysia, and Singapore using the 2022 PISA results as a primary benchmark. It highlighted Singapore's top ranking and examined contributing factors such as student-teacher ratios and school participation rates. Ultimately, it proposed the 'CERDAS' framework as a multi-faceted strategy to enhance Indonesia's educational standards.",
    techStack: ["Tableau", "Data Visualization", "Infographic"],
    category: "Data Visualization",
    imageUrl: "/foto/CERDAS.jpg",
    link: "https://drive.google.com/file/d/177mLbe6rL_b892qps6fcpYArs5oMnXNZ/view"
  },
  {
    id: 10,
    title: "Automated Toll Gate Traffic Monitoring",
  //  description: "This project presented an infographic that compared the educational quality of Indonesia, Malaysia, and Singapore using the 2022 PISA results as a primary benchmark. It highlighted Singapore's top ranking and examined contributing factors such as student-teacher ratios and school participation rates. Ultimately, it proposed the 'CERDAS' framework as a multi-faceted strategy to enhance Indonesia's educational standards.",
    techStack: ["Python", "Background Subtraction", "Computer Vision"],
    category: "Computer Vision",
    imageUrl: "/foto/automated_gate.png",
    link: "https://github.com/ridhoalfarid/Automated-Toll-Gate-Traffic-Monitoring"
  },
  {
    id: 11,
    title: "Pengelompokkan Tingkat Pengangguran Terbuka di Indonesia Menggunakan DTW-K-Medoids, DTW-Fuzzy-C-Means, dan DTW-DBSCAN",
  //  description: "This project presented an infographic that compared the educational quality of Indonesia, Malaysia, and Singapore using the 2022 PISA results as a primary benchmark. It highlighted Singapore's top ranking and examined contributing factors such as student-teacher ratios and school participation rates. Ultimately, it proposed the 'CERDAS' framework as a multi-faceted strategy to enhance Indonesia's educational standards.",
    techStack: ["Python", "Clustering", "Machine Learning"],
    category: "Data Science",
    imageUrl: "/foto/Pengelompokan Tingkat Pengangguran Terbuka.png",
    link: "https://drive.google.com/file/d/1-IPOQ-fIwmPvEkSagKNpBev07EupOBrY/view"
  }
];

export const ORGANIZATIONS_VOLUNTEERS: OrganizationVolunteer[] = [
  {
    id: 1,
    organization: "Google Developer Groups on Campus UII",
    role: "Academic Staff",
    period: "Nov 2024 – Oct 2025",
    location: "Sleman",
    type: "organization",
    imageUrl: "/foto/GDG UII.jpg",
    description: [
      "Designed comprehensive learning pathways for all community members.",
      "Delivered hands-on sessions on Data Science and Machine Learning concepts.",
      "Provided strategic guidance and preparation support for Hackfest 2025 participants."
    ]
  },
  {
    id: 2,
    organization: "Enthusiastic Competition 2023",
    role: "Equipment Staff",
    period: "Jul 2023 – Jan 2024",
    location: "Sleman",
    type: "volunteer",
    imageUrl: "/foto/Enthusiastic Competition 2023.jpg",
    description: [
      "Provided, prepared, and managed all required facilities during the event.",
      "Collaborated with other divisions to fulfill equipment and facility needs.",
      "Created Memorandums of Understanding (MoU) with vendors regarding equipment procurement."
    ]
  },
  {
    id: 3,
    organization: "Masa Ta'aruf FMIPA 2023",
    role: "Expert Equipment Staff",
    period: "Jul 2023 – Sep 2023",
    location: "Sleman",
    type: "volunteer",
    imageUrl: "/foto/Masa Ta'aruf FMIPA 2023.jpg",
    description: [
      "Provided, maintained, and returned all required facilities during the event.",
      "Coordinated with other divisions to ensure operational readiness.",
      "Created Memorandum of Understanding (MoU) with vendors for equipment needs."
    ]
  },
  {
    id: 4,
    organization: "I-Birthy 2022",
    role: "Public Relations and Transportation Staff",
    period: "Oct 2022 – Dec 2022",
    location: "Sleman",
    type: "volunteer",
    imageUrl: "/foto/I-Birthy 2022.jpg",
    description: [
      "Facilitated seamless coordination between event staff, sponsors, guests, and participants to ensure effective communication.",
      "Managed transportation and logistics to support timely mobilization for event activities."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Intermediate Data Science",
    issuer: "Digital Talent Scholarship",
    year: "2025",
    link: "https://drive.google.com/file/d/1Byi4qrP3_5DMmATvK-9-Xa9WyI5HtcYE/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Certified International Specialist Data Visualization",
    issuer: "PASAS INSTITUTE",
    year: "2024",
    link: "https://drive.google.com/file/d/1gvaLu3rRu-G2bSj7SMbT6f2Sykv4ckkE/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2023",
    link: "https://www.dicoding.com/certificates/4EXG4M1LGPRL"
  },
  {
    id: 4,
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2023",
    link: "https://www.dicoding.com/certificates/EYX4Y326JZDL"
  },
  {
    id: 5,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "2023",
    link: "https://www.dicoding.com/certificates/GRX52JWWRX0M"
  },
  {
    id: 6,
    title: "PELATIHAN \"BASIS DATA\"",
    issuer: "Laboratorium Terpadu Informatika UII",
    year: "2023",
    link: "https://drive.google.com/file/d/1wgesuMgDqgfSGlkJxHuJJilnwAxbyZAP/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    year: "2023",
    link: "https://www.dicoding.com/certificates/72ZD8Y1WVZYW"
  }
];