import React, { useEffect, useState } from "react";
import API from "../../API/axios";

const About = () => {
  const [abouttechnicalskills, setAbouttechnicalskills] = useState([]);
  const [totalprojects, setTotalprojects] = useState(0);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    function fetchData(callback) {
      setTimeout(() => {
        const techskills = [
          "HTML",
          "CSS",
          "JavaScript",
          "ReactJS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "Git",
          "RESTful APIs",
          "Problem Solving",
          "Data Structures",
          "Postman",
        ];
        callback(techskills);
      }, 1000);
    }

    fetchData((techskills) => {
      console.log("Fetched About technicalskills:", techskills);
      setAbouttechnicalskills(techskills);
    });
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API.get("/get/recentprojects");
        if (res.data.success) {
          setTotalprojects(res.data.totalprojects);
          console.log("totalPROJECTS", res.data.totalprojects);
        }
      } catch (error) {
        console.error(error.response?.data?.error || error.message);
      } finally {
        setloading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div
      id="About"
      className="flex flex-col items-center justify-center gap-2 mx-[10%] sm:mx-[5%] md:mx-[8%] mt-16 bg-white dark:bg-black rounded-2xl shadow-xl pt-10 px-4"
    >
      {/* Title */}
      <div className="text-center">
        <h1
          className="text-[60px] md:text-[50px] sm:text-[45px] font-semibold font-sans bg-gradient-to-tr from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About Me
        </h1>
      </div>

      {/* About section */}
      <div className="flex flex-wrap justify-center items-center gap-20 md:gap-16 sm:gap-10">
        <div className="flex flex-col gap-10 max-w-2xl text-center">
          <div
            className="flex flex-col gap-2 text-[20px] sm:text-[18px] font-semibold font-[system-ui] text-slate-900 dark:text-gray-100"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <p>
              I am a passionate and dedicated Full Stack Developer with
              expertise in creating dynamic and responsive web applications.
            </p>
            <p>
              I specialize in crafting user-friendly interfaces using HTML, CSS,
              JavaScript, and modern frameworks like React while ensuring robust
              functionality with Node.js, Express, and databases like MongoDB
              and MySQL.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-5 items-center">
            {abouttechnicalskills.length === 0 ? (
              <p className="text-gray-400 italic ">
                Loading technical skills...
              </p>
            ) : (
              abouttechnicalskills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-10 sm:gap-5 transition-transform duration-300 hover:scale-105 w-full"
                >
                  <p
                    className="min-w-[150px] text-[20px] sm:text-[18px] font-medium text-slate-900 dark:text-gray-100"
                    data-aos="fade-left"
                    data-aos-delay={index * 150}
                    data-aos-duration="1200"
                  >
                    {skill}
                  </p>
                  <hr
                    className="h-2 rounded-full border-none outline-none bg-gradient-to-r from-[#DF8908] to-[#B415FF]"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    style={{ width: `${40 + index * 5}%` }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-wrap justify-around w-full mb-20 gap-10 sm:gap-6">
        {[
          { count: "1+", text: "Internships" },
          { count: totalprojects || 0, text: "Projects Completed" },
          { count: "2", text: "Participation in Smart India Hackathon" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 transition-transform duration-400 hover:scale-110"
            data-aos="zoom-in"
            data-aos-delay={i * 150}
          >
            <h1
              className=" text-3xl  font-bold mt-4
         bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent"
            >
              {item.count}
            </h1>
            <p className="text-[22px] sm:text-[18px] font-medium text-center text-gray-900 dark:text-gray-100">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
