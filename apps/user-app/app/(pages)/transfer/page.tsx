import { getServerSession } from "next-auth";
import AddMoneyCard from "../../../components/AddMoneyCard";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import { OnRampTransactionsCard, onRampTransactionProps } from "../../../components/OnRampTransactionsCard";
import prisma from "@repo/db/client";

async function getOnRampTransactions(id: string){
    const txns= await prisma.onRampTransactions.findMany({
        where: {
            userId: id
        }
    })

    return {
        transactions: txns.map(t=>{({
                time: t.startTime,
                amount: t.amount,
                status: t.status,
                provider: t.provider
            })
        })
    }
}


export default async function Transfer(){
    const session= await getServerSession(authOptions)
    const userId= session?.user?.id
    const transactions= await getOnRampTransactions(userId)

    if(session?.user){
        return(
            <div>
                <div className="text-3xl font-bold text-[#003985] mb-6">
                    Transfer
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded">
                        <AddMoneyCard />
                    </div>
                    <div className=" grid grid-rows-2 gap-4">
                        <div className="bg-white rounded mr-4">
                          <OnRampTransactionsCard transactions={transactions.transactions}/>
                        </div>
                        <div className="bg-white rounded mr-4 p-4">
                            hey
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        redirect('/')
    }
}