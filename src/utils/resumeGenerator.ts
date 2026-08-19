import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES, EDUCATION_DATA, CAREER_INTERESTS, NCC_DATA, SOFT_SKILLS } from '../data/portfolioData';

export const downloadResume = () => {
  // Generate a clean HTML resume formatted for print and save-as-PDF
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download/print the formatted resume.');
    return;
  }

  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Katta Deepthi - Resume</title>
  <style>
    @page {
      size: A4;
      margin: 15mm 15mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #1a1a1a;
      line-height: 1.45;
      font-size: 10.5pt;
      margin: 0;
      padding: 0;
      background: #fff;
    }
    .header {
      border-bottom: 2px solid #6b21a8;
      padding-bottom: 12px;
      margin-bottom: 14px;
    }
    .name {
      font-size: 22pt;
      font-weight: 700;
      color: #3b0764;
      margin: 0 0 4px 0;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 12pt;
      font-weight: 600;
      color: #6b21a8;
      margin: 0 0 8px 0;
    }
    .contact-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 9.5pt;
      color: #4b5563;
    }
    .contact-row a {
      color: #6b21a8;
      text-decoration: none;
    }
    .section-title {
      font-size: 12pt;
      font-weight: 700;
      color: #3b0764;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 3px;
      margin: 14px 0 8px 0;
    }
    .item {
      margin-bottom: 10px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 600;
      color: #111827;
      font-size: 10.5pt;
    }
    .item-sub {
      display: flex;
      justify-content: space-between;
      font-style: italic;
      color: #4b5563;
      font-size: 9.5pt;
      margin-bottom: 3px;
    }
    .bullets {
      margin: 4px 0 0 16px;
      padding: 0;
    }
    .bullets li {
      margin-bottom: 2px;
      font-size: 9.5pt;
      color: #374151;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 140px 1fr;
      row-gap: 4px;
      font-size: 9.5pt;
    }
    .skills-label {
      font-weight: 600;
      color: #3b0764;
    }
    .skills-val {
      color: #374151;
    }
    .print-bar {
      background: #f3e8ff;
      padding: 12px;
      text-align: center;
      margin-bottom: 20px;
      border-radius: 8px;
    }
    .print-btn {
      background: #7e22ce;
      color: #fff;
      border: none;
      padding: 8px 18px;
      font-size: 10pt;
      font-weight: 600;
      border-radius: 6px;
      cursor: pointer;
    }
    @media print {
      .print-bar {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="print-bar">
    <button class="print-btn" onclick="window.print()">📥 Print / Save as PDF</button>
  </div>

  <div class="header">
    <h1 class="name">Katta Deepthi</h1>
    <div class="title">Aspiring AI & Data Science Engineer</div>
    <div class="contact-row">
      <span>📧 <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a></span>
      <span>📱 ${PERSONAL_INFO.phone}</span>
      <span>📍 ${PERSONAL_INFO.location}</span>
      <span>🔗 <a href="${PERSONAL_INFO.linkedinUrl}">linkedin.com/in/kattadeepthi</a></span>
      <span>💻 <a href="${PERSONAL_INFO.githubUrl}">github.com/Deepthi7890</a></span>
    </div>
  </div>

  <!-- EDUCATION -->
  <div class="section-title">Education</div>
  <div class="item">
    <div class="item-header">
      <span>${EDUCATION_DATA.college} (Affiliated to ${EDUCATION_DATA.university})</span>
      <span>${EDUCATION_DATA.duration}</span>
    </div>
    <div class="item-sub">
      <span>${EDUCATION_DATA.degree} in ${EDUCATION_DATA.specialization}</span>
      <span><strong>CGPA: ${EDUCATION_DATA.cgpa}/10.0 (${EDUCATION_DATA.percentage})</strong></span>
    </div>
  </div>

  <!-- TECHNICAL SKILLS -->
  <div class="section-title">Technical Skills</div>
  <div class="skills-grid">
    <div class="skills-label">Languages:</div>
    <div class="skills-val">Python, SQL, C, HTML5, CSS3, JavaScript</div>
    
    <div class="skills-label">AI & ML:</div>
    <div class="skills-val">Scikit-learn, TensorFlow / PyTorch Basics, OpenCV, NLTK, Multimodal VQA, OCR</div>
    
    <div class="skills-label">Data Analytics:</div>
    <div class="skills-val">Pandas, NumPy, Exploratory Data Analysis (EDA), Data Cleaning, Matplotlib, Seaborn</div>
    
    <div class="skills-label">Web & Backend:</div>
    <div class="skills-val">Node.js, Express.js, Flask, Streamlit, RESTful APIs, Git, GitHub</div>
    
    <div class="skills-label">Developer Tools:</div>
    <div class="skills-val">VS Code, Cursor, Jupyter Notebooks, Claude, Gemini API, Linux/Bash</div>
  </div>

  <!-- FEATURED PROJECTS -->
  <div class="section-title">Key Projects</div>
  ${PROJECTS_DATA.slice(0, 4).map(p => `
    <div class="item">
      <div class="item-header">
        <span>${p.title}</span>
        <span style="font-size: 8.5pt; font-weight: normal; color: #6b21a8;">${p.category}</span>
      </div>
      <div class="item-sub">
        <span>Technologies: ${p.technologies.join(', ')}</span>
      </div>
      <ul class="bullets">
        <li>${p.description}</li>
        ${p.features.slice(0, 2).map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>
  `).join('')}

  <!-- LEADERSHIP & CERTIFICATIONS -->
  <div class="section-title">Certifications & Leadership</div>
  <div class="item">
    <div class="item-header">
      <span>${NCC_DATA.title}</span>
      <span>Certified with Distinction</span>
    </div>
    <ul class="bullets">
      <li>${NCC_DATA.description}</li>
      <li><strong>Core Attributes:</strong> ${NCC_DATA.coreCompetencies.join(' • ')}</li>
      <li><strong>Interpersonal Skills:</strong> ${SOFT_SKILLS.join(' • ')}</li>
    </ul>
  </div>

  <script>
    window.onload = function() {
      // Prompt print immediately
      setTimeout(() => {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(resumeHTML);
  printWindow.document.close();
};
