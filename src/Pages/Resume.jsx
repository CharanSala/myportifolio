import Navbar from "../Components/Navbar";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  const tools = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Prisma",
    "MongoDB",
    "SQL",
    "Tailwind CSS",
    "Git",
    "Postman",
    "GitHub Actions",
  ];

  const languages = ["TypeScript", "JavaScript", "Python", "C", "HTML", "CSS"];

  return (
    <main className="min-h-screen bg-[#f8f9ff] relative overflow-hidden">
      <Navbar />

      {/* Background Soft Glows */}
      <div className="absolute top-[-5%] right-[-10%] w-[40%] h-[40%] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="px-6 md:px-10 py-32 max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center mb-8 md:mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
              Resume
            </h2>
            <div className="h-1.5 w-20 bg-[#3b3df2] mt-2 rounded-full"></div>
          </div>

          <a
            href="/resume.pdf"
            download="Charan_Resume.pdf"
            className="p-4 bg-[#3b3df2] text-white rounded-xl shadow-lg shadow-blue-200 hover:bg-[#2e2fd9] transition-all transform hover:-translate-y-1 flex items-center justify-center group"
            title="Download Resume"
          >
            <FaDownload className="text-xl group-hover:scale-110 transition-transform" />
          </a>
        </div>

        <div className="space-y-20">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0f172a] flex items-center gap-3">
              Experience
            </h3>

            <div className="grid gap-6">
              {/* Hamaralabs */}
              <div className="group bg-white rounded-2xl p-1 border border-transparent hover:border-blue-100 shadow-xl shadow-gray-200/50 transition-all">
                <div className="flex flex-col md:flex-row p-6 gap-8">
                  <div className="md:w-64">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3b3df2] text-xs font-bold mb-3 uppercase tracking-wider">
                      May 2025 – June 2025
                    </span>
                    <h4 className="font-bold text-[#0f172a] text-lg">
                      Frontend Developer
                    </h4>
                    <p className="text-[#3b3df2] font-medium">Hamaralabs</p>
                    <p className="text-sm text-[#64748b]">India</p>
                  </div>
                  <div className="flex-1 border-l-0 md:border-l border-gray-100 md:pl-8">
                    <p className="text-[#64748b] leading-relaxed">
                      Worked on building responsive user interfaces using
                      TypeScript and Next.js and implemented form validation
                      using Zod. Integrated backend APIs and handled CRUD
                      operations with Prisma. Contributed to developing a
                      digital lab management system deployed in 10+ tinkering
                      labs, enabling activity assignment, student progress
                      tracking, and smoother lab operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* CodeMoji */}
              <div className="group bg-white rounded-2xl p-1 border border-transparent hover:border-blue-100 shadow-xl shadow-gray-200/50 transition-all">
                <div className="flex flex-col md:flex-row p-6 gap-8">
                  <div className="md:w-64">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3b3df2] text-xs font-bold mb-3 uppercase tracking-wider">
                      Feb 2025 – Mar 2025
                    </span>
                    <h4 className="font-bold text-[#0f172a] text-lg">
                      Founder & Lead
                    </h4>
                    <p className="text-[#3b3df2] font-medium">
                      College Tech Fest
                    </p>
                    <p className="text-sm text-[#64748b]">India</p>
                  </div>
                  <div className="flex-1 border-l-0 md:border-l border-gray-100 md:pl-8">
                    <p className="text-[#64748b] leading-relaxed">
                      Built{" "}
                      <span className="font-semibold text-[#0f172a]">
                        CodeMoji
                      </span>
                      , a full-stack gamified coding platform using React,
                      Node.js, Express, MongoDB, and Tailwind. Designed
                      real-time challenges and backend logic and led a team of
                      three developers. Deployed the platform on Vercel, where
                      it was used by 50+ students during the college tech fest
                      with smooth and reliable performance..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#0f172a] flex items-center gap-3">
              Education
            </h3>

            <div className="grid gap-6">
              {/* B.Tech */}
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-transparent hover:border-blue-100 transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-64">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3b3df2] text-xs font-bold mb-3 uppercase tracking-wider">
                      2022 – 2026
                    </span>
                    <h4 className="font-bold text-[#0f172a] text-lg">
                      B.Tech in CSE
                    </h4>
                    <p className="text-[#3b3df2] font-medium">JNTU-GV</p>
                  </div>
                  <div className="flex-1 md:border-l md:border-gray-100 md:pl-8 text-[#64748b] leading-relaxed">
                    Pursuing a Bachelor of Technology in Computer Science and
                    Engineering at JNTU-GV College of Engineering. Focused on
                    full-stack development, data structures, and modern web
                    technologies, while actively building real-world projects
                    and participating in technical events and hackathons.
                  </div>
                </div>
              </div>

              {/* Diploma - Added Here */}
              <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-transparent hover:border-blue-100 transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-64">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#3b3df2] text-xs font-bold mb-3 uppercase tracking-wider">
                      2019 – 2022
                    </span>
                    <h4 className="font-bold text-[#0f172a] text-lg">
                      Diploma
                    </h4>
                    <p className="text-[#3b3df2] font-medium">
                      Sir C.R. Reddy Polytechnic
                    </p>
                    <p className="text-sm text-[#64748b]">
                      Computer Engineering
                    </p>
                  </div>
                  <div className="flex-1 md:border-l md:border-gray-100 md:pl-8 text-[#64748b] leading-relaxed">
                    Completed a Diploma in Computer Engineering at Sir C.R.
                    Reddy Polytechnic, Eluru. Built a strong foundation in
                    programming, databases, computer networks, and software
                    development, which laid the groundwork for my journey into
                    full-stack development.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Frameworks */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-50">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 tracking-tight">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#f8f9ff] border border-gray-100 rounded-xl text-sm font-medium text-[#64748b] hover:border-[#3b3df2] hover:text-[#3b3df2] transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-50">
              <h3 className="text-xl font-bold text-[#0f172a] mb-6 tracking-tight">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#f8f9ff] border border-gray-100 rounded-xl text-sm font-medium text-[#64748b] hover:border-[#3b3df2] hover:text-[#3b3df2] transition-all"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
