"use client"

import { Button } from "@repo/ui/Button";
import { useRouter } from "next/navigation";

export function DashboardCard(){
    const router= useRouter()
    return(
        <div>
            <Button onClick={()=>{router.push('/transfer')}}>Add Money</Button>
        </div>
    )
}