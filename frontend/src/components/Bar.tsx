

function Bar({index , name , date} : {index : number, name : string , date : Date}) {
  

  return (
    <>
    <div className='w-5/6 hover:scale-105 transition-all duration-500 flex justify-between border-2 py-3 sm:py-4 px-6 sm:px-12 rounded-md border-[#292929] bg-[#161616] cursor-pointer text-sm sm:text-xl text-slate-200 opacity-90'>
            <span>{index}.</span>
            <span className=''>{name}</span>
            <span>{date.toLocaleString().split('T')[0]}</span>
            
    </div>
    </>
  )
}

export default Bar