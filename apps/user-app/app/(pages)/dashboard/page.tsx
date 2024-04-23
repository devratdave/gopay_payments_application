
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    
    if(session?.user){
        return(
            <div>
                hey {session.user.name}
            </div>
        )
    }
    return(
        redirect("/")
    )
}