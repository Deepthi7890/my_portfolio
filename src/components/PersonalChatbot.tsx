import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  Code2,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronDown,
  RotateCcw,
  Copy,
  Check,
  Phone,
  Shield
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES, EDUCATION_DATA, CAREER_INTERESTS, NCC_DATA, SOFT_SKILLS } from '../data/portfolioData';
import { downloadResume } from '../utils/resumeGenerator';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    actionType: 'navigate' | 'download' | 'contact' | 'link';
    target: string;
  }>;
}

export const PersonalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const initialBotMessage: Message = {
    id: 'msg-init',
    sender: 'bot',
    text: `Hello! I'm Deepthi's AI Portfolio Assistant. How can I help you today? You can ask me about her AI/ML projects, skills, education, GPA, NCC certification, or how to contact and hire her.`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    actions: [
      { label: '🚀 Top AI Projects', actionType: 'navigate', target: '#projects' },
      { label: '🛠️ Technical Skills', actionType: 'navigate', target: '#skills' },
      { label: '🎓 Education & GPA', actionType: 'navigate', target: '#education' },
      { label: '📄 Download Resume', actionType: 'download', target: 'resume' },
      { label: '📬 Contact Info', actionType: 'contact', target: 'contact' },
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);

  const quickPrompts = [
    "What are Deepthi's top AI & ML projects?",
    "What is her CGPA & college background?",
    "What technical skills & tools does she know?",
    "What roles is she looking for?",
    "How can I contact or hire her?",
    "Download Deepthi's Resume"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleActionClick = (action: { label: string; actionType: 'navigate' | 'download' | 'contact' | 'link'; target: string }) => {
    if (action.actionType === 'download') {
      downloadResume();
    } else if (action.actionType === 'navigate') {
      const element = document.querySelector(action.target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'contact') {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'link') {
      window.open(action.target, '_blank');
    }
  };

  // Comprehensive AI response generator with deep domain matching
  const generateBotResponse = (query: string): { text: string; actions?: Message['actions'] } => {
    const q = query.toLowerCase().trim();

    // 1. Resume / CV Queries
    if (q.includes('resume') || q.includes('cv') || q.includes('curriculum vitae') || q.includes('download')) {
      return {
        text: `You can download Katta Deepthi's complete formatted resume in PDF format directly using the button below. It includes her B.Tech degree details (7.89 CGPA), all 6 ML/AI projects, technical skill inventory, and NCC leadership credentials.`,
        actions: [
          { label: '📥 Download Resume (PDF)', actionType: 'download', target: 'resume' },
          { label: '📬 Contact Directly', actionType: 'navigate', target: '#contact' }
        ]
      };
    }

    // 2. Specific Project Queries: VQA (Visual Question Answering)
    if (q.includes('vqa') || q.includes('visual question') || q.includes('multimodal')) {
      const vqa = PROJECTS_DATA.find(p => p.id === 'multimodal-vqa');
      return {
        text: `**${vqa?.title || 'Multimodal Visual Question Answering (VQA)'}**:\n\n` +
          `• **Goal**: End-to-end multimodal deep learning pipeline that answers natural language questions based on input imagery.\n` +
          `• **Architecture**: Deep CNN visual feature extraction combined with Transformer/BERT linguistic embeddings with cross-attention.\n` +
          `• **Key Tech**: ${vqa?.technologies.join(', ')}.\n` +
          `• **Outcome**: Enables intuitive visual querying with dynamic attention heatmaps and high-confidence answer predictions.`,
        actions: [
          { label: '🔍 View Projects Section', actionType: 'navigate', target: '#projects' },
          { label: '💻 GitHub Repo', actionType: 'link', target: vqa?.githubUrl || PERSONAL_INFO.githubUrl }
        ]
      };
    }

    // 3. Specific Project: Document Analysis / QA
    if (q.includes('document') || q.includes('ocr') || q.includes('doc analysis')) {
      const docProj = PROJECTS_DATA.find(p => p.id === 'doc-analysis');
      return {
        text: `**${docProj?.title || 'Intelligent Document Analysis & Question-Answering'}**:\n\n` +
          `• **Goal**: Automated document comprehension and semantic search across scanned PDFs and multi-page records.\n` +
          `• **Architecture**: Optical Character Recognition (OCR) pipeline linked with Transformer NLP encoders for semantic search and question extraction.\n` +
          `• **Key Tech**: ${docProj?.technologies.join(', ')}.\n` +
          `• **Features**: Table parsing, key-value entity recognition, and instant summarization.`,
        actions: [
          { label: '🔍 View In Projects', actionType: 'navigate', target: '#projects' }
        ]
      };
    }

    // 4. Specific Project: Spam Email Classifier
    if (q.includes('spam') || q.includes('email') || q.includes('classification')) {
      const spam = PROJECTS_DATA.find(p => p.id === 'spam-email');
      return {
        text: `**${spam?.title || 'Spam Email Classifier'}**:\n\n` +
          `• **Goal**: Accurate text categorization to filter malicious and spam correspondence in real time.\n` +
          `• **Tech**: ${spam?.technologies.join(', ')}.\n` +
          `• **Method**: NLP preprocessing, TF-IDF feature extraction, and optimized Naive Bayes & Logistic Regression classifiers with evaluation metrics (Confusion Matrix, Precision/Recall).`,
        actions: [
          { label: '🔍 View Project Card', actionType: 'navigate', target: '#projects' }
        ]
      };
    }

    // 5. Specific Project: Voice Assistant
    if (q.includes('voice') || q.includes('assistant') || q.includes('speech')) {
      const va = PROJECTS_DATA.find(p => p.id === 'voice-assistant');
      return {
        text: `**${va?.title || 'Personal Voice Assistant'}**:\n\n` +
          `• **Goal**: Hands-free desktop voice assistant executing automated tasks via natural speech.\n` +
          `• **Tech**: ${va?.technologies.join(', ')}.\n` +
          `• **Features**: SpeechRecognition (STT), pyttsx3 (TTS), Wikipedia search, web automation, app launching, and system utilities.`,
        actions: [
          { label: '🔍 View Project Card', actionType: 'navigate', target: '#projects' }
        ]
      };
    }

    // 6. All Projects Overview
    if (q.includes('project') || q.includes('portfolio') || q.includes('work') || q.includes('built') || q.includes('apps')) {
      return {
        text: `Deepthi has engineered **6 featured projects** across AI, Machine Learning, and Full-Stack Development:\n\n` +
          `1. **Multimodal Visual Question Answering (VQA)** — PyTorch, Transformers, CNN, OpenCV\n` +
          `2. **Intelligent Document Analysis & QA** — NLP, OCR, PyTorch, Streamlit\n` +
          `3. **Spam Email Classifier** — Scikit-learn, Python, NLTK, TF-IDF\n` +
          `4. **Personal Voice Assistant** — SpeechRecognition, pyttsx3, Python\n` +
          `5. **Doctor Shift Scheduling Optimization** — Python, Streamlit, Constraint Optimization\n` +
          `6. **Instant Message Portal** — Node.js, Express, JavaScript, REST API`,
        actions: [
          { label: '🚀 Explore All Projects', actionType: 'navigate', target: '#projects' },
          { label: '💻 GitHub Profile', actionType: 'link', target: PERSONAL_INFO.githubUrl }
        ]
      };
    }

    // 7. Education, CGPA, College, Degree, Marks
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa') || q.includes('gpa') || q.includes('percentage') || q.includes('marks') || q.includes('university') || q.includes('jntuk') || q.includes('kietw') || q.includes('study')) {
      return {
        text: `**Academic Qualifications for Katta Deepthi**:\n\n` +
          `• **Degree**: ${EDUCATION_DATA.degree}\n` +
          `• **Specialization**: ${EDUCATION_DATA.specialization}\n` +
          `• **College**: ${EDUCATION_DATA.college} (KIETW)\n` +
          `• **Affiliated University**: ${EDUCATION_DATA.university} (JNTUK)\n` +
          `• **Academic Period**: ${EDUCATION_DATA.duration} (Graduation: 2027)\n` +
          `• **Cumulative GPA**: **${EDUCATION_DATA.cgpa} / 10.0** (Aggregate: **${EDUCATION_DATA.percentage}**)\n` +
          `• **Status**: ${EDUCATION_DATA.status}`,
        actions: [
          { label: '🎓 View Education Section', actionType: 'navigate', target: '#education' },
          { label: '📄 Download Full Resume', actionType: 'download', target: 'resume' }
        ]
      };
    }

    // 8. Technical Skills, Languages, Tools
    if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('python') || q.includes('sql') || q.includes('tool') || q.includes('framework') || q.includes('stack')) {
      return {
        text: `**Technical Skill Stack**:\n\n` +
          `• **Programming Languages**: Python, SQL, C, HTML5, CSS3, JavaScript\n` +
          `• **AI / ML Frameworks**: Scikit-learn, PyTorch Basics, OpenCV, NLTK, Transformers, OCR\n` +
          `• **Data Analysis & Processing**: Pandas, NumPy, Exploratory Data Analysis (EDA), Matplotlib, Seaborn\n` +
          `• **Backend & Web**: Node.js, Express.js, Flask, Streamlit, RESTful APIs\n` +
          `• **Developer Tools**: VS Code, Cursor, Jupyter Notebook, Claude, Gemini API, Git/GitHub, Linux/Bash`,
        actions: [
          { label: '🛠️ View Technical Stack', actionType: 'navigate', target: '#skills' },
          { label: '⚡ Applied AI Tools', actionType: 'navigate', target: '#learning' }
        ]
      };
    }

    // 9. Career Interests, Roles, Opportunities, Hiring
    if (q.includes('role') || q.includes('hire') || q.includes('opportunity') || q.includes('job') || q.includes('intern') || q.includes('career') || q.includes('looking for') || q.includes('position') || q.includes('available')) {
      return {
        text: `Deepthi is actively seeking **Full-Time Entry-Level Roles** and **Internships** starting in 2026/2027 for the following career tracks:\n\n` +
          `1. **Data Analyst** — Insight extraction, statistical EDA, data cleaning & SQL pipelines.\n` +
          `2. **AI / ML Engineer Intern** — Model development, multimodal AI pipelines, and PyTorch/Scikit-learn architectures.\n` +
          `3. **AI Analyst / Junior Data Scientist** — AI workflow integration, predictive modeling, and intelligent automation.\n` +
          `4. **Junior Software / Backend Developer** — API creation, Python/Node.js development, and database integrations.`,
        actions: [
          { label: '💼 View Target Roles', actionType: 'navigate', target: '#career-interests' },
          { label: '📬 Get In Touch', actionType: 'navigate', target: '#contact' }
        ]
      };
    }

    // 10. NCC, Leadership, Soft Skills
    if (q.includes('ncc') || q.includes('cadet') || q.includes('leadership') || q.includes('certificate') || q.includes('soft skill') || q.includes('strength')) {
      return {
        text: `**National Cadet Corps (NCC) & Leadership**:\n\n` +
          `• **Certification**: ${NCC_DATA.title}\n` +
          `• **Background**: ${NCC_DATA.description}\n` +
          `• **Core Demonstrated Attributes**: ${NCC_DATA.coreCompetencies.join(' • ')}\n` +
          `• **Soft Skills**: ${SOFT_SKILLS.join(', ')}`,
        actions: [
          { label: '🎖️ View Leadership Section', actionType: 'navigate', target: '#additional-profile' }
        ]
      };
    }

    // 11. Contact Info, Email, Phone, LinkedIn, GitHub, Location
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('linkedin') || q.includes('github') || q.includes('location') || q.includes('address') || q.includes('reach')) {
      return {
        text: `**Direct Contact Details for Katta Deepthi**:\n\n` +
          `• **Email**: ${PERSONAL_INFO.email}\n` +
          `• **Phone / WhatsApp**: ${PERSONAL_INFO.phone}\n` +
          `• **Location**: ${PERSONAL_INFO.location}\n` +
          `• **LinkedIn**: linkedin.com/in/kattadeepthi\n` +
          `• **GitHub**: github.com/Deepthi7890`,
        actions: [
          { label: '✉️ Send Email', actionType: 'link', target: `mailto:${PERSONAL_INFO.email}` },
          { label: '🔗 Open LinkedIn', actionType: 'link', target: PERSONAL_INFO.linkedinUrl },
          { label: '💻 Open GitHub', actionType: 'link', target: PERSONAL_INFO.githubUrl },
          { label: '📬 Open Contact Form', actionType: 'navigate', target: '#contact' }
        ]
      };
    }

    // 12. About / Who is she / Summary
    if (q.includes('about') || q.includes('who is') || q.includes('who are you') || q.includes('tell me about deepthi') || q.includes('intro') || q.includes('bio')) {
      return {
        text: `**About Katta Deepthi**:\n\n` +
          `Katta Deepthi is a final-year B.Tech student in Artificial Intelligence & Data Science at KIETW (affiliated with JNTUK) in Andhra Pradesh, India.\n\n` +
          `She builds applied solutions combining **Data Analytics, Machine Learning, Computer Vision, NLP, and Web Systems**. She maintains a strong academic record (**7.89 CGPA**) and is an **NCC 'C' Certificate** holder with proven leadership, discipline, and teamwork.`,
        actions: [
          { label: '📖 Read About Section', actionType: 'navigate', target: '#about' },
          { label: '🚀 View Projects', actionType: 'navigate', target: '#projects' },
          { label: '📄 Download Resume', actionType: 'download', target: 'resume' }
        ]
      };
    }

    // 13. Greetings / Casual conversation
    if (q === 'hi' || q === 'hello' || q === 'hey' || q.includes('good morning') || q.includes('good evening') || q.includes('how are you')) {
      return {
        text: `Hello! I'm ready to answer any questions you have about Katta Deepthi's portfolio, AI/ML projects, skills, education, or career interests. What would you like to explore?`,
        actions: [
          { label: '🚀 Top AI Projects', actionType: 'navigate', target: '#projects' },
          { label: '🛠️ Technical Skills', actionType: 'navigate', target: '#skills' },
          { label: '🎓 Education & GPA', actionType: 'navigate', target: '#education' },
          { label: '📄 Download Resume', actionType: 'download', target: 'resume' }
        ]
      };
    }

    // 14. Fallback Intelligent Summary
    return {
      text: `I'd be glad to help with that! Here is a quick overview of Katta Deepthi:\n\n` +
        `• **Profile**: Final-year AI & Data Science B.Tech Student (CGPA: 7.89/10.0)\n` +
        `• **Core Focus**: Machine Learning, Multimodal VQA, Data Analysis, and Python/Node.js Software Development\n` +
        `• **Key Projects**: Multimodal VQA, Intelligent Document QA, Spam Email Classifier, and Desktop Voice Assistant\n` +
        `• **Status**: Open to Entry-Level Roles & AI/Data Analytics Internships\n\n` +
        `Please choose one of the options below or ask any specific question!`,
      actions: [
        { label: '🚀 Featured Projects', actionType: 'navigate', target: '#projects' },
        { label: '🛠️ Technical Stack', actionType: 'navigate', target: '#skills' },
        { label: '📄 Download Resume (PDF)', actionType: 'download', target: 'resume' },
        { label: '📬 Contact Deepthi', actionType: 'navigate', target: '#contact' }
      ]
    };
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputQuery.trim() || isTyping) return;

    const userText = inputQuery.trim();
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const botResponseData = generateBotResponse(userText);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: botResponseData.actions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputQuery(prompt);
    // Directly submit
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseData = generateBotResponse(prompt);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponseData.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: botResponseData.actions
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleResetChat = () => {
    setMessages([initialBotMessage]);
  };

  return (
    <div id="personal-portfolio-chatbot" className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* 1. Floating Launch Button (When Chatbot is Closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="chatbot-open-btn"
          aria-label="Open AI Assistant"
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-2xl shadow-purple-950/90 border border-purple-400/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Subtle Ambient Pulse Ring */}
          <span className="absolute -inset-1 rounded-2xl bg-purple-500/30 blur-md group-hover:bg-purple-400/50 transition-all -z-10 animate-pulse" />
          
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-purple-900" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-xs font-bold font-display tracking-tight flex items-center gap-1">
              Ask Deepthi AI
              <Sparkles className="w-3 h-3 text-purple-200" />
            </span>
            <span className="text-[10px] text-purple-200 font-mono">Instant Portfolio QA</span>
          </div>
        </button>
      )}

      {/* 2. Interactive Chat Drawer Box (When Opened) */}
      {isOpen && (
        <div
          id="chatbot-drawer"
          className="w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] rounded-3xl bg-[#090812]/95 border-2 border-purple-500/40 shadow-2xl shadow-black/90 backdrop-blur-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-[#18142c] via-[#120f24] to-[#0d0c18] border-b border-purple-900/40 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-950">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#120f24]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-display font-bold text-white">Ask Deepthi AI</h3>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold bg-purple-950/90 text-purple-300 border border-purple-500/30">
                    LIVE
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">Answers questions about projects & skills</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                id="chatbot-close-btn"
                title="Close chat"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Carousel Bar */}
          <div className="px-3 py-2 bg-[#0d0c18]/80 border-b border-zinc-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 ml-1 mr-0.5" />
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickPrompt(prompt)}
                className="px-2.5 py-1 rounded-lg text-[10.5px] font-medium whitespace-nowrap bg-purple-950/50 hover:bg-purple-900/80 text-purple-200 border border-purple-500/30 transition-all shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Log */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs select-text">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} gap-1.5`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 font-mono px-1">
                    {isBot ? (
                      <>
                        <Bot className="w-3 h-3 text-purple-400" />
                        <span>Deepthi AI Assistant</span>
                      </>
                    ) : (
                      <>
                        <User className="w-3 h-3 text-zinc-400" />
                        <span>You</span>
                      </>
                    )}
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed transition-all shadow-md ${
                      isBot
                        ? 'bg-zinc-900/90 text-zinc-200 border border-zinc-800/80 rounded-tl-sm'
                        : 'bg-purple-600 text-white rounded-tr-sm font-medium shadow-purple-950/60'
                    }`}
                  >
                    {/* Formatted Text with Bullet Support */}
                    <div className="whitespace-pre-wrap space-y-1">
                      {msg.text.split('\n').map((line, lIdx) => {
                        if (line.startsWith('• ') || line.startsWith('- ')) {
                          return (
                            <div key={lIdx} className="flex items-start gap-1.5 pl-1 my-0.5">
                              <span className="text-purple-400 shrink-0 mt-0.5">•</span>
                              <span>{line.replace(/^[•-]\s*/, '')}</span>
                            </div>
                          );
                        }
                        if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ') || line.startsWith('6. ')) {
                          return (
                            <div key={lIdx} className="pl-1 my-0.5 font-medium">
                              {line}
                            </div>
                          );
                        }
                        return <p key={lIdx}>{line}</p>;
                      })}
                    </div>

                    {/* Action Buttons if Provided */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-zinc-800 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, aIdx) => (
                          <button
                            key={aIdx}
                            onClick={() => handleActionClick(act)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-purple-950/80 hover:bg-purple-800/90 text-purple-200 hover:text-white border border-purple-500/40 transition-all cursor-pointer shadow-sm active:scale-95"
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3 h-3 text-purple-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 w-fit">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-[11px] font-mono text-purple-300">Searching knowledge base...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-[#0c0b16] border-t border-zinc-800/80 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask anything about Deepthi's projects or skills..."
              id="chatbot-input-field"
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#05050a] border border-zinc-800 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim() || isTyping}
              id="chatbot-send-btn"
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:hover:bg-purple-600 text-white shadow-md shadow-purple-950 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
