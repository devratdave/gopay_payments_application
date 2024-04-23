import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth";

export default async function Page(){
  const session= await getServerSession(authOptions)
  if(session?.user){
    return (
      redirect('/dashboard')
    );
  }
  return(
    <div className="bg-blue-500">
      You're not logged in.
    </div>
  )
}
