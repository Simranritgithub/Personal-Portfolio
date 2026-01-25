import React from "react";
import services_data from "../../assets/services_data";

const Service = () => {
  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center gap-20 sm:gap-16 px-4 sm:px-8 md:px-20 lg:px-32 my-20 relative z-[1] bg-white dark:bg-black rounded-2xl shadow-xl pt-10 pb-16 mx-[10%] sm:*mx-[5%] md:mx-[8%]"
    >
      {/* Title */}
      <div className="relative sm:pl-[90px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
          My Services
        </h1>
      </div>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8 max-w-7xl px-4 sm:px-6"
      >
        {services_data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-4 p-6 border-2 border-gray-800 dark:border-white rounded-lg min-h-[200px] max-w-[320px] hover:border-[#60a2d2] hover:bg-gradient-to-br hover:from-[#3e43b1]  hover:to-[#6dcce1] dark:hover:bg-gradient-to-br dark:hover:from-[#c6a1b8] dark:hover:to-[#ca45a2] transform hover:scale-105 transition-all duration-300 dark:hover:border-pink-600" data-aos="fade-zoom-in" data-aos-delay="300" data-aos-duration="1200"
          >
            <h3 className="text-[22px] sm:text-[26px] font-semibold text-slate-900 dark:text-gray-100">
              {service.id}
            </h3>
            <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent">
              {service.title}
            </h2>
            <p className="  leading-[32px] sm:leading-[36px] max-w-[300px] text-slate-900 dark:text-[#d4d4d4]">
              {service.description}
            </p>
            <h1 className="text-2xl sm:text-3xl">{service.icon}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
