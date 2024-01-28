import { useEffect, useState } from "react"

function Bar({index , name , date} : {index : number, name : string , date : Date}) {

  const [time , setTime] = useState<string>("")


  useEffect(()=>{
    const timeArr = date.toLocaleString().split('T')[1].split(".")
    timeArr.pop();
    setTime(timeArr.join(""))
  
  } , [])
  

  return (
    <>
    <div className='hover:scale-105 transition-all duration-500 flex justify-around border-2 p-3 sm:p-4 rounded-md border-[#292929] bg-[#141414] cursor-pointer text-sm sm:text-xl text-slate-200 opacity-90'>
            <span className="hidden sm:block">{index}</span>
            <span className=''>{name}</span><span>{date.toLocaleString().split('T')[0]}</span>
            <span>{time}</span>
    </div>
    </>
  )
}

export default Bar