"use client"

interface InputBoxParams{
    placeholder: string,
    onChange: (e: string)=>void,
    type: string,
    label: string
}


export function InputBox({placeholder, onChange, type, label}: InputBoxParams) {
    return(
        <div className="my-3 "> 
            <label className="block mb-1 text-lg font-normal text-gray-900">{label}</label>
            <div className="relative mb-2">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <input type={type} id={label} onChange={(e)=>{onChange(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder={placeholder} />
            </div>
        </div>
    )
}