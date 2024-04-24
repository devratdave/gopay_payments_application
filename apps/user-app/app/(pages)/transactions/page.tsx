import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { redirect } from "next/navigation"

export default async function Transactions(){
    const session = await getServerSession(authOptions)

    if(session?.user){
        return(
            <div>
                In transactions
            </div>
        )
    } else{
        redirect('/')
    }
}