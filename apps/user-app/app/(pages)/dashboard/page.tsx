import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { DashboardCard } from "../../../components/DashboardCard";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(authOptions)
    if(session?.user){
        return(
            <div>
                <DashboardCard />
            </div>
        )
    }
    return(
        redirect("/")
    )
}