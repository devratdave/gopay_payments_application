"use client"
import { ReactNode } from "react"

interface buttonProps{
    onClick: ()=>void,
    children: ReactNode
}

export function Button({ onClick, children }: buttonProps) {
    return(
        <div>
            <button onClick={onClick} className="bg-[#003985] hover:bg-[#0051BD] text-white font-medium py-2 px-4 border border-blue-700 rounded">
                {children}
            </button>        
        </div>
    )
}