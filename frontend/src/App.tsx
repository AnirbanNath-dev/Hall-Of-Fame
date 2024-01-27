import { useEffect, useState } from "react"
import Bar from "./components/Bar"

function App() {

  const [ username , setUsername] = useState<string>("")

  const handleClick = () => {
    if(username.trim().length == 0) {
      setUsername("")
    }else{
      
    }
  }


  useEffect(()=> {
    
  } , [])


  return (
    <div className='text-slate-100'>
      <h1 className='my-14 text-center p-10 text-3xl sm:text-4xl uppercase font-light tracking-[2px] md:tracking-[5px]'>Hall of Fame</h1>

        <div className=' w-10/12 lg:w-1/2 mx-auto flex justify-center my-10 gap-2'>
            <input 
            type="text" 
            placeholder='Enter your name...' 
            className='rounded border-2 outline-none border-[#292929] bg-transparent md:text-2xl text-xl p-2'
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
            />
            <button 
            className='rounded border-2 text-xl px-5 border-[#292929] bg-[#272727] outline-none active:scale-90'
            onClick={handleClick}
            >Enter</button>
        </div>

      <div className=' w-10/12 lg:w-1/2 mx-auto flex flex-col gap-5' >

        <Bar index={1} name="Anirban" date="12/12/12"/>




      </div>

    </div>
  )
}

export default App
