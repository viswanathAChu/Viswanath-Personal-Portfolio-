"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Code, Award } from "lucide-react";

const tabs = ["About", "Projects", "Skills", "Experience", "Education"];

const projectsData = [
  {
    id: 1,
    title: "MediCore AI: Symptom-to-Disease Analyzer",
    description: "Developed an Ensemble Voting Classifier (Logistic Regression, SVC, Naive Bayes) for disease prediction. Built an NLP pipeline using TF-IDF and text preprocessing. Deployed an interactive Streamlit web app for real-time symptom input and instant disease prediction output.",
    tags: ["Python", "Scikit-learn", "NLP", "Streamlit"],
    link: "#", // User will add link
  },
  {
    id: 2,
    title: "SmartDoor Pro — AI Face Recognition Door Lock",
    description: "Built a real-time face authentication system using FaceNet (InceptionResNetV1) and FAISS vector search. Implemented liveness detection using MediaPipe FaceMesh and Eye Aspect Ratio (EAR) algorithm. Designed a data augmentation pipeline with Albumentations.",
    tags: ["FaceNet", "FAISS", "MediaPipe", "OpenCV", "Streamlit"],
    link: "#", // User will add link
  },
];

const skillsData = [
  { category: "Programming & Databases", items: ["Python", "SQL", "OOPs", "Functional Programming"] },
  { category: "Data Analysis", items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"] },
  { category: "Machine Learning", items: ["Scikit-learn", "Regression", "KNN", "Random Forest", "XGBoost"] },
  { category: "Deep Learning & CV", items: ["TensorFlow", "CNN", "RNN", "LSTM", "OpenCV", "YOLO", "MediaPipe"] },
  { category: "NLP & Generative AI", items: ["Transformers", "LLMs", "LangChain", "RAG", "Hugging Face", "Ollama"] },
  { category: "Cloud & Tools", items: ["AWS", "GitHub", "Colab", "Jupyter", "VS Code"] },
];

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="min-h-screen bg-transparent py-16 sm:py-24 px-4 sm:px-8 md:px-24 text-neutral-100 relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 tracking-tight text-white">Professional Profile.</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-12 border-b border-white/10 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-medium transition-colors ${
                activeTab === tab ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "About" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-3xl space-y-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/50 p-5 sm:p-8 space-y-6 sm:space-y-8 transition-all hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-indigo-500/5"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">Who I Am</h3>
                    <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                      I&apos;m an AI enthusiast and developer based in Trivandrum, Kerala. With a foundational background in Physics and Mathematics, I bring a highly analytical, first-principles approach to the world of Artificial Intelligence. I am deeply fascinated by how raw, complex data can be engineered into intelligent systems that solve real-world problems.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-emerald-400">What I Do</h4>
                    <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                      Currently gaining hands-on experience as a Data Science Intern at Luminar Technolab, I specialize in building end-to-end AI pipelines. My technical expertise spans across robust Machine Learning models, deep Computer Vision architectures (like real-time facial recognition and liveness detection), and cutting-edge Generative AI systems leveraging LLMs, LangChain, and RAG.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-medium mb-3 text-purple-400">My Mission</h4>
                    <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                      Whether I&apos;m developing diagnostic tools for healthcare or engineering highly secure authentication systems, my core goal remains the same: to build scalable, impactful AI applications that push the boundaries of technology. I am constantly learning, experimenting with new models, and looking forward to contributing to innovative, data-driven teams.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projectsData.map((project) => (
                  <motion.div 
                    key={project.id} 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/50 p-5 sm:p-8 hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-indigo-500/5 transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                      <a href={project.link} className="text-neutral-400 hover:text-indigo-400 transition-all"><Code2 className="w-6 h-6" /></a>
                    </div>
                    <p className="text-sm sm:text-base text-neutral-300 mb-6 sm:mb-8 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-neutral-300 group-hover:border-indigo-500/20 transition-all">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "Skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {skillsData.map((skillGroup, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/50 p-5 sm:p-6 hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-indigo-500/5 transition-all cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-xl font-medium mb-4 flex items-center gap-2 text-white"><Code className="w-5 h-5 text-indigo-400"/> {skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map(item => (
                        <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-neutral-300 hover:bg-indigo-500/20 hover:text-white hover:border-indigo-500/30 transition-all">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "Experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <motion.div 
                  whileHover={{ scale: 1.01, x: 5 }}
                  className="relative pl-6 sm:pl-8 border-l border-white/10 hover:border-indigo-500/30 transition-colors cursor-pointer"
                >
                  <div className="absolute -left-3 top-0 bg-[#121214] border border-white/5 p-1 rounded-md"><Briefcase className="w-5 h-5 text-indigo-400" /></div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">Data Science Intern</h3>
                  <p className="text-base sm:text-lg text-neutral-400 mb-4">Luminar Technolab, Trivandrum | Sep 2025 – Present</p>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-sm sm:text-base text-neutral-300">
                    <li>Developed Machine Learning, NLP, and Deep Learning projects using Python, Scikit-learn, TensorFlow, OpenCV, and YOLO.</li>
                    <li>Built and optimized AI models including Regression, Decision Trees, Random Forest, XGBoost, CNN, RNN, and LSTM.</li>
                    <li>Implemented Generative AI and RAG applications using LangChain, LLMs, Ollama, Hugging Face, and Prompt Engineering.</li>
                    <li>Performed data analysis, visualization, and SQL-based operations using Pandas, NumPy, SQL, and Power BI.</li>
                  </ul>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "Education" && (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2 text-white"><GraduationCap className="text-indigo-400"/> Education</h3>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/50 p-5 sm:p-6 cursor-pointer hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-indigo-500/5 transition-all">
                    <h4 className="text-lg sm:text-xl font-medium text-white">Bachelor of Science in Physics</h4>
                    <p className="text-neutral-300 text-sm sm:text-base">Govt. KNM Arts and Science College | 2021 – 2024</p>
                    <p className="text-xs sm:text-sm mt-2 text-neutral-400">Minors in Mathematics and Machine Learning (Kerala University)</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md shadow-2xl shadow-black/50 p-5 sm:p-6 cursor-pointer hover:border-indigo-500/30 hover:bg-white/[0.06] hover:shadow-indigo-500/5 transition-all">
                    <h4 className="text-lg sm:text-xl font-medium text-white">Higher Secondary Education</h4>
                    <p className="text-neutral-300 text-sm sm:text-base">St. Joseph’s HSS, Trivandrum | 2019 – 2021</p>
                    <p className="text-xs sm:text-sm mt-2 text-neutral-400">Focus in Computer Science & Mathematics</p>
                  </motion.div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2 text-white"><Award className="text-emerald-400"/> Certifications</h3>
                  <ul className="space-y-4 text-neutral-200">
                    <motion.li whileHover={{ scale: 1.02, x: 5 }} className="rounded-xl border border-white/5 bg-white/[0.03] shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-emerald-500/30 hover:bg-white/[0.06] hover:shadow-emerald-500/5 transition-all">
                      <span className="text-sm sm:text-base">Supervised Machine Learning</span>
                      <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-400 rounded w-fit sm:text-nowrap ml-0 sm:ml-2">DeepLearning.AI</span>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.02, x: 5 }} className="rounded-xl border border-white/5 bg-white/[0.03] shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-emerald-500/30 hover:bg-white/[0.06] hover:shadow-emerald-500/5 transition-all">
                      <span className="text-sm sm:text-base">Python Libraries for Data Science</span>
                      <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-400 rounded w-fit sm:text-nowrap ml-0 sm:ml-2">Simplilearn</span>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.02, x: 5 }} className="rounded-xl border border-white/5 bg-white/[0.03] shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-emerald-500/30 hover:bg-white/[0.06] hover:shadow-emerald-500/5 transition-all">
                      <span className="text-sm sm:text-base">Python (Basic/Intermediate)</span>
                      <span className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-neutral-400 rounded w-fit sm:text-nowrap ml-0 sm:ml-2">HackerRank</span>
                    </motion.li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
