import React from "react";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

/* ---------- Glass Card ---------- */
const GlassCard = ({ children, className = "" }) => (
  <div
    className={`
      bg-white dark:bg-black
      backdrop-blur-lg
      border border-white/40 dark:border-white/20
      rounded-3xl
      shadow-[0_18px_35px_-15px_rgba(0,0,0,0.2)]
      mx-[10%] sm:mx-[5%] md:mx-[8%] px-10 py-12
      ${className}
    `}
  >
    {children}
  </div>
);

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "761dbc3a-9a7a-4923-ab49-efc8da0dfd2f");

      const object = Object.fromEntries(formData);

      const res = await axios.post(
        "http://localhost:5000/api/contacts/",
        object,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        event.target.reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <GlassCard>
    <section
      id="contact"
      className="min-h-screen  py-24 px-4"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]">
          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#DF8908] to-[#B415FF]"
            data-aos="fade-up"
          >
            Get In Touch
          </h1>
          <p className="mt-3 text-lg tracking-wider max-w-xl mx-auto">
            Looking for a passionate full-stack developer? Let’s build something great together.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Info */}
          <GlassCard data-aos="fade-right">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-5 text-slate-700 dark:text-gray-300">
              <div className="flex items-center gap-4">
                <Mail className="text-[#DF8908]" />
                <span>simranrout8796@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#DF8908]" />
                <span>+91 9667265765</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-[#DF8908]" />
                <span>Dilshad Garden, Delhi</span>
              </div>
            </div>
          </GlassCard>

          {/* Contact Form */}
          <GlassCard data-aos="fade-left">
            <form onSubmit={onSubmit} className="space-y-5">

              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                  Your Name
                </label>
                <div className="flex items-center gap-3 mt-1">
                  <User className="text-slate-400" />
                  <input
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-[#DF8908]/40 outline-none "
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                  Your Email
                </label>
                <div className="flex items-center gap-3 mt-1">
                  <Mail className="text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-[#DF8908]/40 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-gray-300">
                  Message
                </label>
                <div className="flex gap-3 mt-1">
                  <MessageSquare className="text-slate-400 mt-3" />
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-[#DF8908]/40 outline-none dark:bg-gray-200"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="
                  w-full mt-4 py-3 rounded-2xl
                  bg-gradient-to-r from-[#DF8908] to-[#B415FF]
                  text-white font-bold
                  hover:scale-[1.02]
                  transition-all duration-300 
                "
              >
                Send Message
              </button>
            </form>
          </GlassCard>

        </div>
      </div>
    </section></GlassCard>
  );
};

export default Contact;
