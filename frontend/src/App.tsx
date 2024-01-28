import { useEffect, useState } from "react"
import Bar from "./components/Bar"
import { DATA } from "./constants"

function App() {

  const [ username , setUsername] = useState<string>("")
  const [data , setData] = useState<{username: string , createdAt : Date}[]>([])
  const [loading , setLoading] = useState<boolean>(true)

  const handleClick = () => {
    if(username.trim().length == 0 || username.trim().length > 10) {
      setUsername("")
    }else{
      fetch(`${DATA.dbUri}/username` , {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({username : username.trim()}),
      })
      setUsername('')
    }
  }


  useEffect(()=> {
    setLoading(true)
    fetch(`${DATA.dbUri}/usernames` , {
      method : "GET"
    } )
    .then(res => res.json())
    .then(res => setData(res))
    setLoading(false)
  } , [data])

  

  return (
    
    <div className='text-slate-100'>
      
      <h1 className='sm:my-14 text-center p-10 text-2xl sm:text-4xl uppercase font-light tracking-[3px] md:tracking-[5px]'>Hall of Fame</h1>

        <div className=' w-10/12 lg:w-1/2 mx-auto flex justify-center my-10 gap-2'>
            <input 
            type="text" 
            placeholder='Enter your name (max: 10)...' 
            className='rounded border-2 outline-none border-[#292929] bg-transparent sm:text-2xl text-md py-2 px-2 sm:px-5 w-3/4 sm:w-1/2'
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
            />
            <button 
            className='rounded border-2 text-md sm:text-xl px-3 sm:px-5 border-[#292929] bg-[#272727] outline-none active:scale-90'
            onClick={handleClick}
            >Enter</button>
        </div>

      <div className='w-full sm:w-10/12 lg:w-1/2 mx-auto items-center flex flex-col gap-3 sm:gap-5 mb-6' >

        {
          loading ? <span className="text-lg sm:text-2xl tracking-widest ">Loading...</span> : (

          data.map((data ,index) => {
            return <Bar key={index} index={index+1} name={data.username} date={data.createdAt} />
          })
          )
        }
        
      </div>

    </div>
  )
}

export default App
