import React, { useEffect, useState } from 'react';
import GlassCard from '../Components/GlassCard';
import Navbar from '../Components/Navbar';
import API from '@/API/axios';



const Projects = () => {
  const [projects,setProjects]=useState([]);
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    const handleonProjects=async()=>{
      try{
        const res=await API.get('/get/projects')
        if(res.data.success){
          setProjects(res.data.projects)
          setLoading(false)
        }
      }
      catch(error){
        console.log(error.response?.data?.error||error.message)
      }
    }
    handleonProjects();

  },[]);
  


  return (

    <div className='min-h-screen bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>
      <Navbar/>
      
      
      <div className='flex justify-center px-4 pt-28'>
      
        <main className=' w-full md:max-w-7xl '>
          
            <div className='flex flex-col mt-8 px-6'>
              <h1 className='text-4xl font-bold text-white tracking-tighter'>Admin.Panel</h1>
              <p className='text-lg  text-white -tracking-wider'>Manage Your Projects</p>
            </div>
            {loading?(<GlassCard>
              <p>Loading Please Wait</p>
            </GlassCard>):
          
              projects.length === 0?(
                <GlassCard>
              <p className='text-lg font-bold text-slate-800'>No Projects uploaded yet</p>
              </GlassCard>
            )
              :(
                <div className='grid grid-cols-1 md:grid-cols-3  gap-8 mx-auto px-4 py-2'>
              {projects.map((project=>
                <GlassCard
                key={project._id}>

                  <h2 className='text-2xl font-extrabold text-slate-800 px-2 py-2'>{project.title}</h2>
                   <img
  src={project.imageUrl}
  alt={project.title}
  className="w-full h-48 object-cover rounded-xl mt-4"
/>
                  <p className='text-base  bg-clip-text text-transparent bg-gradient-to-tr from-[#d68a18] to-[#B415FF] px-2 py-2'>{project.description}</p>
                  <div className="flex flex-row flex-wrap gap-4 mt-4">
  {(Array.isArray(project.tech)
    ? project.tech.flatMap(t =>
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
  ))}
</div>

                  <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-semibold text-blue-500 underline px-2 mt-4 inline-block"
>
  View on GitHub
</a>

                  

                  </GlassCard>
                  
                
              ))}</div>
              )}
              
                
              
          
        </main>
      
      </div>
    </div>
  )
}
export default Projects;
