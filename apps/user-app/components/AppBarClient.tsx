"use client"

import { AppBar } from "@repo/ui/AppBar";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export function AppBarClient(){
    const session = useSession()
    const router = useRouter()
    return(
        <div>
            <AppBar onSignIn={signIn} onSignOut={async ()=>{
                 await signOut()
                 redirect("/api/auth/signin")
        }} user={session.data?.user}/>
        </div>
    )
}