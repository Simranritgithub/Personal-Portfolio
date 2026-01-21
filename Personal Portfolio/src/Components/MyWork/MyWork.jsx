import React, { useState } from "react";
import workData from "../../assets/Work.js";
import { useEffect } from "react";
import API from "@/API/axios.js";

const MyWork = () => {
 // const [works] = useState(workData);
  const categories = ["All", "Web", "Mobile App", "Design", "Branding"];
  const [selectedType, setSelectedType] = useState("All");
   const [works,setworks]=useState([]);
          const [loading,setLoading]= useState(true);

  
       
          useEffect(()=>{
            const handleonworks=async()=>{
              try{
                const res=await API.get('/get/recentprojects')
                if(res.data.success){
                  setworks(res.data.recentprojects)
                  console.log(res.data.recentprojects)
                  setLoading(false)
                }
              }
              catch(error){
                console.log(error.response?.data?.error||error.message)
              }
            }
            handleonworks();
        
          },[]);
          const filteredWorks =
    selectedType === "All"
      ? works
      : works.filter(
          (work) =>
            work.type.trim().toLowerCase() === selectedType.trim().toLowerCase()
        );
        console.log(filteredWorks)
       

  return (
    <div
      id="mywork"
      className="flex flex-col items-center justify-center gap-20  mx-[10%] sm:mx-[5%] md:mx-[8%] bg-white dark:bg-black pt-6  rounded-2xl shadow-2xl px-10 sm:gap-4 md:gap-6 my-20 "
    >
      {/* Categories */}
      <div className="flex flex-wrap gap-6 justify-center" data-aos="fade-up">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedType(cat)}
            className="px-6 py-2 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-lg transition-all"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <div className="relative text-center sm:text-left" data-aos="fade-up">
        <h1 className="text-2xl sm:text-[56px] md:text-3xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent mb-10">
          My Latest Work
        </h1>
      </div>

      {/* Work Grid */}
      <div className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 ">
        {filteredWorks.map((work, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger animation
            className="flex flex-col justify-between items-center border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#111] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Title */}
            <h1 className="text-2xl font-bold text-center bg-gradient-to-tr from-sky-300 to-sky-500 bg-clip-text text-transparent mb-4">
              {work.title}
            </h1>

            {/* Image */}
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full max-w-[350px] h-28 rounded-xl object-cover shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105"
            />

            {/* Description */}
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 text-center mt-4">
              {work.description}
            </p>

            {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
   {/* <div className="flex flex-row flex-wrap gap-4 mt-4"> */}
  {(Array.isArray(work.tech)
    ? work.tech.flatMap(t =>
        t.includes(",") ? t.split(",") : t
      )
    : []
  ).map((tech, index) => (
    <span
      key={index}
      className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-[#d68a18] to-[#B415FF] text-white rounded-full shadow"
    >
      {tech.trim()}
    </span>
  ))}</div>






            {/* GitHub Link */}
            <a
              href={work.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-base font-semibold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent hover:underline"
              data-aos="fade-up"
              data-aos-delay={index * 150 + 100}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button
        data-aos="fade-up"
        data-aos-delay={200}
       className="
  my-8
  flex items-center gap-3
  border-2 border-[#B415FF]
  bg-white
  text-[#B415FF]
  rounded-full
  py-3 px-10
  text-lg font-semibold
  transition-all duration-500
  hover:bg-[#B415FF] hover:text-white
"
>
        Show More →
      </button>
      {/* <button className="bg-red-600 text-white p-4">
  TEST BUTTON
</button> */}

    </div>
  );
};

export default MyWork;
