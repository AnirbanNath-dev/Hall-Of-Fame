import { useState } from "react"

function Admin() {

    const [username , setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    


return (
    <div className="flex flex-col items-center gap-8 p-10 text-white">
        <input 
        type="text" 
        placeholder="Enter name" 
        onChange={(e)=> setUsername(e.target.value)} 
        value={username}
        className="mt-14 rounded bg-transparent  border-2 p-2 text-lg md:text-xl" />

        <input 
        type="text" 
        placeholder="Enter password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="rounded bg-transparent  border-2 p-2 text-lg md:text-xl"/>

        <input 
        type="text" 
        placeholder="Delete element" 
        className="rounded bg-transparent border-2 p-2 text-lg md:text-xl" />

        <button className="rounded border-2 active:hover:scale-90 py-3 px-5 text-lg md:text-xl border-red-500 bg-red-500 text-white">Delete</button>
    </div>
)
}

export default Admin