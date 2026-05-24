"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
                    Currently gaining hands-on experience as a Data Science Intern at Luminar Technolab, I specialize in building end-to-end AI pipelines. My technical expertise spans across robust Machine Learning models, deep Computer Vision architectures (like real-time facial recognition and liveness detection), and cutting-edge Generative AI systems leveraging LLMs, LangChain, and RAG.
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
                    <a href={project.link} className="text-neutral-400 hover:text-primary transition-all"><Code2 className="w-6 h-6" /></a>
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
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <span className="text-sm sm:text-base font-medium">Supervised Machine Learning</span>
                  <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">DeepLearning.AI</span>
                </motion.li>
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <span className="text-sm sm:text-base font-medium">Python Libraries for Data Science</span>
                  <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">Simplilearn</span>
                </motion.li>
                <motion.li whileHover={{ scale: 1.015, x: 6 }} className="rounded-xl border border-white/10 bg-cardBg shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 cursor-pointer hover:border-accent/45 hover:shadow-[0_10px_30px_rgba(127,0,255,0.12)] transition-all duration-300">
                  <span className="text-sm sm:text-base font-medium">Python (Basic/Intermediate)</span>
                  <span className="text-xs px-2.5 py-1.5 bg-accent/15 border border-accent/20 text-accent font-semibold rounded w-fit sm:text-nowrap ml-0 sm:ml-2">HackerRank</span>
                </motion.li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
