import { useRouter } from "next/navigation";

interface SelectProps{ 
    list: {
        redirectUrlName: string,
        redirectUrl: string 
    }[]
}

export function Select({ list }: SelectProps){
    const router= useRouter()
    return(
        <form className="mb-4">
            <label className="block mb-1 text-lg font-normal text-gray-900">Banks</label>
            <select id="banks" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
        {list.map((l)=>{
            return(
                <>
                <option value="Choose a bank">Choose a bank</option>
                <option onClick={()=>{
                    router.push(l.redirectUrl)
                }}>{l.redirectUrlName}</option>
                </>
            )
        })}
            </select>
        </form>
    )
}