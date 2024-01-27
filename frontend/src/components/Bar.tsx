
function Bar({index , name , date} : {index : number, name : string , date : Date}) {

  

  return (
    <>
    <div className=' flex justify-around border-2 p-4 rounded-md border-[#292929] bg-[#141414] cursor-pointer text-lg md:text-xl text-slate-200 opacity-90'>
            <span>{index}</span><span className=''>{name}</span><span>{date.toLocaleString().split('T')[0]}</span>
    </div>
    </>
  )
}

export default Bar