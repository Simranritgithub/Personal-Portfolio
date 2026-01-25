const Inputfield =({type="text",value,name,placeholder,onChange})=>{
  return(
    <><label className="bg-clip-text text-transparent bg-gradient-to-tr from-[#DF8908] to-[#B415FF] uppercase font-mono font-semibold">{name}</label>
  <input className="bg-white text-slate-800 rounded-xl shadow-2xl
   border-b border-white/40 px-4 py-2 " type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/></>
  )
  
}
export default Inputfield;