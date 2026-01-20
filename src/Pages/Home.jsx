import profile from "../assets/charan.jpeg";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };
  return (
    <section className="min-h-screen bg-[#f8f9ff] relative overflow-hidden flex items-center px-10 md:px-24">
      {/* Background Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className=" p-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 mt-40 md:mt-0 md:gap-0 z-10">
        {/* LEFT SIDE: The Organic Image Style */}
        {/* container should be inside a grid or flex parent */}
        <div className="relative flex justify-center items-center">
          {/* External Purple/Blue Glow - Scaled for responsiveness */}
          <div className="absolute inset-0 bg-[#4451FE]/20 blur-[40px] md:blur-[60px] rounded-full transform scale-90 md:scale-75"></div>

          <div
            className="relative 
    /* Size: Small on mobile, medium on tablets, exact size on desktop */
    w-56 h-56 
    sm:w-64 sm:h-64 
    md:w-[280px] md:h-[280px] 
    lg:w-[320px] lg:h-[320px] 
    
    overflow-hidden bg-gray-200 
    
    /* Shape: Stays consistent */
    rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] 
    
    /* Border: Thinner on mobile, thicker on desktop */
    border-[6px] md:border-[8px] border-white 
    shadow-xl z-10"
          >
            <img
              src={profile}
              alt="Charan"
              className="w-full h-full object-cover"
            />

            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(255,255,255,0.4)] md:shadow-[inset_0_0_40px_rgba(255,255,255,0.4)] pointer-events-none"></div>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] leading-tight mb-6">
            Hi, I'm <span className="text-[#3b3df2]">Charan</span>, a Full-Stack
            Developer.
          </h1>

          <p className="text-[#64748b] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            I craft modern web applications with clean code, elegant UI, and
            meaningful user experiences. Blending logic with creativity to build
            digital products that feel as good as they function.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mb-12">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="charan.pdf"
            >
              <button className="px-8 py-4 bg-[#3b3df2] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-[#2e2fd9] transition-all transform hover:-translate-y-1">
                Download Resume
              </button>
            </a>

            <button
              onClick={goToProjects}
              className="px-8 py-4 bg-transparent text-[#0f172a] font-bold rounded-xl border-2 border-gray-200 hover:bg-white hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              View Projects
            </button>
          </div>

          {/* Social Icons Style */}
          <div className="flex gap-6 text-gray-600">
            <a
              href="https://x.com/CharanSala6155"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#3b3df2] transition-colors text-xl"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/salacharan"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#3b3df2] transition-colors text-xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/charan_sala_/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#3b3df2] transition-colors text-xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://github.com/CharanSala"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#3b3df2] transition-colors text-xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100084327379702"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:text-[#3b3df2] transition-colors text-xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
