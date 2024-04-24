export interface onRampTransactionProps {
    time: Date,
    amount: number,
    status: string,
    provider: string
}


export function OnRampTransactionsCard({
        transactions
    } : {transactions: onRampTransactionProps[]}
){
    if(!transactions.length){
        return(
            <div className="py-4 px-4 rounded-xl">
                No Recent Transactions
            </div>
        )
    } else{
        return(
            <div>
                {transactions.map(t=>{
                    return(
                        <div>
                            {JSON.stringify(t)}
                        </div>
                    )
                })}
            </div>
        )
    }
}