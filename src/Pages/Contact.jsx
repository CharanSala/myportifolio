import { useRef } from "react";
import Navbar from "../Components/Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast"; // 🔹 Import toast

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Initial loading state
    const loadingToast = toast.loading("Sending your message...");

    emailjs
      .sendForm(
        "service_9upoug9",
        "template_an8e94e",
        formRef.current,
        "SugytuPgkiESBl4Iz",
      )
      .then(
        (result) => {
          // 🚀 Success notification
          toast.success("Message sent successfully!", {
            id: loadingToast,
            icon: "🚀",
            style: {
              borderRadius: "12px",
              background: "#0f172a",
              color: "#fff",
            },
          });
          formRef.current.reset();
        },
        (error) => {
          // ❌ Error notification
          toast.error("Failed to send. Please try again.", {
            id: loadingToast,
          });
          console.error(error.text);
        },
      );
  };

  return (
    <main className="min-h-screen bg-[#f8f9ff] relative overflow-hidden">
      {/* 🔹 This component renders the notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <Navbar />

      {/* Background Soft Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="px-6 md:px-10 py-32 max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight">
              Get in Touch
            </h2>
            <div className="h-1.5 w-20 bg-[#3b3df2] mt-2 rounded-full"></div>
            <p className="text-[#64748b] mt-8 text-lg leading-relaxed max-w-md">
              Have a question or want to work together? Feel free to reach out.
              I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#3b3df2]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-[#64748b] font-medium">
                    Email me at
                  </p>
                  <p className="text-[#0f172a] font-bold">
                    salacharan81@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-[#3b3df2]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-[#64748b] font-medium">Location</p>
                  <p className="text-[#0f172a] font-bold">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-50">
            <form
              ref={formRef}
              className="flex flex-col gap-6"
              onSubmit={sendEmail}
            >
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full bg-[#f8f9ff] border border-gray-100 rounded-xl p-4 text-[#0f172a] outline-none focus:border-[#3b3df2] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full bg-[#f8f9ff] border border-gray-100 rounded-xl p-4 text-[#0f172a] outline-none focus:border-[#3b3df2] transition-colors"
                  placeholder="name@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0f172a] ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="w-full bg-[#f8f9ff] border border-gray-100 rounded-xl p-4 text-[#0f172a] outline-none focus:border-[#3b3df2] transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3b3df2] text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-[#2e2fd9] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                Send Message
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
