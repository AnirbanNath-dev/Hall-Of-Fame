import { useEffect, useState } from "react"
import { DATA } from "../constants"

function Admin() {

    const [username , setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [data , setData] = useState<{username: string , createdAt : Date , _id : string}[]>([])
    const [ id , setId ] = useState<string>('')

    useEffect(()=> {
        fetch(`${DATA.dbUri}/usernames` , {
            method : "GET"
        } )
        .then(res => res.json())
        .then(res => setData(res))
    } , [data])


    const handleClick = async ()=>{
        try {

            const dltElement: string = data[parseInt(id) - 1]._id
            console.log(dltElement)

            fetch(`${DATA.dbUri}/admin` , {
                method : "DELETE",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({username : username.trim(), password : password.trim() , id : dltElement})
            })

            setUsername('')
            setPassword('')
            setId('')
        } catch {
            setId('')
        }
    }

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
        onChange={(e) => setId(e.target.value)}
        value={id}
        className="rounded bg-transparent border-2 p-2 text-lg md:text-xl" />

        <button onClick={handleClick} className="rounded border-2 active:hover:scale-90 py-3 px-5 text-lg md:text-xl border-red-500 bg-red-500 text-white">Delete</button>
    </div>
)
}

export default Admin