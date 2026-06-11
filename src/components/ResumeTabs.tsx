"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

const tabs = ["About", "Projects", "Skills", "Experience", "Education"];

const projectsData = [
  {
    id: 1,
    title: "MediCore AI: Symptom-to-Disease Analyzer",
    description: "Developed an Ensemble Voting Classifier (Logistic Regression, SVC, Naive Bayes) for disease prediction. Built an NLP pipeline using TF-IDF and text preprocessing. Deployed an interactive Streamlit web app for real-time symptom input and instant disease prediction output.",
    tags: ["Python", "Scikit-learn", "NLP", "Streamlit"],
    link: "https://github.com/viswanathAChu/MediCore-AI-Symptom-to-Disease-Analyzer",
  },
  {
    id: 2,
    title: "SmartDoor Pro — AI Face Recognition Door Lock",
    description: "Built a real-time face authentication system using FaceNet (InceptionResNetV1) and FAISS vector search. Implemented liveness detection using MediaPipe FaceMesh and Eye Aspect Ratio (EAR) algorithm. Designed a data augmentation pipeline with Albumentations.",
    tags: ["FaceNet", "FAISS", "MediaPipe", "OpenCV", "Streamlit"],
    link: "https://github.com/viswanathAChu/SmartDoor-Pro-AI-Face-Recognition-Door-Lock",
  },
  {
    id: 3,
    title: "FingerFlow AI — Virtual Touchless Keyboard",
    description: "Created a touchless virtual keyboard utilizing MediaPipe Hand Tracking and OpenCV. Employs advanced hand landmark detection allowing users to type in the air by pinching fingers, with a highly optimized responsive visual interface.",
    tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    link: "https://github.com/viswanathAChu/FingerFlow-AI-Real-Time-Virtual-Keyboard-with-Hand-Landmark-Detection-",
  },
  {
    id: 4,
    title: "Multi-Agent RAG System",
    description: "Engineered a Multi-Agent Retrieval-Augmented Generation (RAG) framework using LangChain/LangGraph. Features coordinate agents that perform query decomposition, context retrieval, verification, and final response generation.",
    tags: ["Python", "LangChain", "LLMs", "RAG", "LangGraph"],
    link: "https://github.com/viswanathAChu/Multi_Agent_RAG",
  },
  {
    id: 5,
    title: "NewsSense — Automated Headline Classifier",
    description: "Designed an end-to-end NLP pipeline for unsupervised categorization of 1M+ news headlines. Implemented TF-IDF vectorization, K-Means clustering, and Principal Component Analysis (PCA) for high-dimensional cluster visualization.",
    tags: ["Python", "NLTK", "K-Means", "PCA", "Scikit-learn"],
    link: "https://github.com/viswanathAChu/NewsSense-Automated-Headline-Classifier",
  },
];

const skillsData = [
  { category: "Programming & Databases", items: ["Python", "SQL", "OOPs", "Functional Programming"] },
  { category: "Data Analysis", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"] },
  { category: "Machine Learning", items: ["Scikit-learn", "Regression", "KNN", "Random Forest", "XGBoost"] },
  { category: "Deep Learning & CV", items: ["TensorFlow", "CNN", "RNN", "LSTM", "OpenCV", "YOLO", "MediaPipe"] },
  { category: "NLP & Generative AI", items: ["Transformers", "LLMs", "LangChain", "LangGraph", "RAG", "Hugging Face", "Ollama"] },
  { category: "Cloud & Tools", items: ["AWS", "GitHub", "Colab", "Jupyter", "VS Code"] },
];

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "projects", "skills", "experience", "education"];
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Detect if the section's top is past the sticky bar threshold (180px) and bottom is below it
          if (rect.top <= 180 && rect.bottom > 180) {
            const formattedTabName = id.charAt(0).toUpperCase() + id.slice(1);
            setActiveTab(formattedTabName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial trigger
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (tabName: string) => {
    const id = tabName.toLowerCase();
    const el = document.getElementById(id);
    if (el) {
      const offset = 160; // main navbar (72px) + gap (16px) + sub tabs navbar (~50px) + margin (22px)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="min-h-screen bg-transparent py-16 sm:py-24 px-4 sm:px-8 md:px-24 text-neutral-100 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 sm:mb-12 tracking-tight text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Know More About Viswanath
        </h2>
        
        {/* Tab Navigation */}
        <div className="sticky top-[88px] z-30 mb-16 flex justify-center w-full">
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 bg-black/35 backdrop-blur-md border border-white/5 rounded-full p-1.5 shadow-lg shadow-black/40 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`relative px-4 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm font-medium transition-colors rounded-full ${
                  activeTab === tab ? "text-primary" : "text-neutral-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sections Stack */}
        <div className="space-y-24">
          
          {/* About Section */}
          <div id="about" className="scroll-mt-36 pt-4 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white tracking-tight">About Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <motion.div 
                whileHover={{ scale: 1.015, y: -6 }}
                className="rounded-2xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/45 hover:shadow-[0_10px_30px_rgba(0,210,255,0.12)]"
              >
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 text-primary">Who I Am</h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    I&apos;m an AI enthusiast and developer based in Trivandrum, Kerala. With a foundational background in Physics and Mathematics, I bring a highly analytical, first-principles approach to the world of Artificial Intelligence. I am deeply fascinated by how raw, complex data can be engineered into intelligent systems that solve real-world problems.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.015, y: -6 }}
                className="rounded-2xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-secondary/45 hover:shadow-[0_10px_30px_rgba(58,123,213,0.12)]"
              >
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 text-secondary">What I Do</h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    Data Science professional with practical experience in Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI. Skilled in developing end-to-end AI workflows including data cleaning, EDA, feature engineering, model building, evaluation, and deployment. Passionate about creating intelligent systems such as predictive models, RAG-based applications, AI automation tools, and data-driven business solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.015, y: -6 }}
                className="rounded-2xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)]"
              >
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 text-accent">My Mission</h4>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                    Whether I&apos;m developing diagnostic tools for healthcare or engineering highly secure authentication systems, my core goal remains the same: to build scalable, impactful AI applications that push the boundaries of technology. I am constantly learning, experimenting with new models, and looking forward to contributing to innovative, data-driven teams.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Projects Section */}
          <div id="projects" className="scroll-mt-36 pt-16 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-white tracking-tight">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsData.map((project) => (
                <motion.div 
                  key={project.id} 
                  whileHover={{ scale: 1.015, y: -8 }}
                  className="group relative rounded-2xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-5 sm:p-8 hover:border-primary/45 hover:shadow-[0_10px_30px_rgba(0,210,255,0.12)] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-all" title="View Code on GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 mb-6 sm:mb-8 leading-relaxed font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 border border-primary/20 text-primary transition-all">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div id="skills" className="scroll-mt-36 pt-16 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-white tracking-tight">Skills & Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skillGroup, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.02, y: -6 }}
                  className="rounded-xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-5 sm:p-6 hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2 text-white"><Code className="w-5 h-5 text-accent"/> {skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(item => (
                      <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neutral-300 hover:bg-accent/25 hover:text-white hover:border-accent/40 transition-all font-light">{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="scroll-mt-36 pt-16 border-t border-white/10">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-8 text-white tracking-tight">Experience</h3>
            <motion.div 
              whileHover={{ scale: 1.01, x: 5 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 hover:border-primary transition-all cursor-pointer py-2"
            >
              <div className="absolute -left-[11px] top-2 bg-darkBg border border-primary/30 p-1 rounded-md"><Briefcase className="w-4 h-4 text-primary" /></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Data Science Intern</h3>
              <p className="text-base sm:text-lg text-primary/80 font-medium mb-4">Luminar Technolab, Trivandrum | Sep 2025 – Present</p>
              <ul className="list-disc list-outside ml-5 space-y-3 text-sm sm:text-base text-neutral-300 font-light">
                <li>Developed Machine Learning, NLP, and Deep Learning projects using Python, Scikit-learn, TensorFlow, OpenCV, and YOLO.</li>
                <li>Built and optimized AI models including Regression, Decision Trees, Random Forest, XGBoost, CNN, RNN, and LSTM.</li>
                <li>Implemented Generative AI and RAG applications using LangChain, LLMs, Ollama, Hugging Face, and Prompt Engineering.</li>
                <li>Performed data analysis, visualization, and SQL-based operations using Pandas, NumPy, SQL, and Power BI.</li>
              </ul>
            </motion.div>
          </div>

          {/* Education Section */}
          <div id="education" className="scroll-mt-36 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 text-white"><GraduationCap className="text-primary"/> Education</h3>
              <motion.div whileHover={{ scale: 1.015, y: -4 }} className="rounded-xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-5 sm:p-6 cursor-pointer hover:border-primary/45 hover:shadow-[0_10px_30px_rgba(0,210,255,0.12)] transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-white">Bachelor of Science in Physics</h4>
                <p className="text-neutral-300 text-sm sm:text-base font-light">Govt. KNM Arts and Science College | 2021 – 2024</p>
                <p className="text-xs sm:text-sm mt-2 text-neutral-400 font-light">Minors in Mathematics and Machine Learning (Kerala University)</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.015, y: -4 }} className="rounded-xl border border-white/10 bg-cardBg backdrop-blur-md shadow-2xl p-5 sm:p-6 cursor-pointer hover:border-primary/45 hover:shadow-[0_10px_30px_rgba(0,210,255,0.12)] transition-all duration-300">
                <h4 className="text-lg sm:text-xl font-bold text-white">Higher Secondary Education</h4>
                <p className="text-neutral-300 text-sm sm:text-base font-light">St. Joseph’s HSS, Trivandrum | 2019 – 2021</p>
                <p className="text-xs sm:text-sm mt-2 text-neutral-400 font-light">Focus in Computer Science & Mathematics</p>
              </motion.div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 text-white"><Award className="text-accent"/> Certifications</h3>
              <ul className="space-y-4 text-neutral-200">
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <a 
                    href="https://moonshot.scaler.com/s/sl/-3lasB9nRW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full h-full text-neutral-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base font-medium">Designing Scalable RAG Pipelines</span>
                    <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">Scaler</span>
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <a 
                    href="https://www.coursera.org/account/accomplishments/verify/17CWQRK1JI93"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full h-full text-neutral-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base font-medium">Supervised Machine Learning</span>
                    <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">DeepLearning.AI</span>
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <a 
                    href="https://credentials.databricks.com/52934bea-6f7e-41a1-abfd-c5ce7ae91f9e#acc.PSQ3szZ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full h-full text-neutral-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base font-medium">Generative AI Fundamentals</span>
                    <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">Databricks</span>
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <a 
                    href="https://www.hackerrank.com/certificates/iframe/896d1ff885e5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 w-full h-full text-neutral-200 hover:text-white"
                  >
                    <span className="text-sm sm:text-base font-medium">Python (Basic/Intermediate)</span>
                    <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">HackerRank</span>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
