"use client"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

interface SidebarItemProps{
    title: string,
    href: string,
    icon: React.ReactNode
}

export default function SidebarItem({ title, href, icon }: SidebarItemProps){
    const router= useRouter()
    const pathname= usePathname()
    const selected= href===pathname

    return(
        <div className={`flex ${selected ? "text-[#5E10C1]" : "text-black"} cursor-pointer`} onClick={()=>{
            router.push(`${href}`)
        }}>
            <div className="m-1">
                {icon}
            </div>
            <div className="my-1" onClick={()=>{}}>
                {title}
            </div>
        </div>
    )
}