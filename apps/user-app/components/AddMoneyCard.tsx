"use client"
import { Button } from "@repo/ui/Button"
import { InputBox } from "@repo/ui/InputBox"
import { Select } from "@repo/ui/Select"
import { useState } from "react"
import { createOnRampTransactions } from "../app/lib/actions/createOnRampTransactions"

const BANKS= [
    {
        name: "HDFC Bank",
        redirectUrl: "https://www.hdfcbank.com/" 
    }
]

export default function AddMoneyCard(){
    const [redirectUrl, setRedirectUrl]= useState(BANKS[0]?.redirectUrl || "")
    const [value, setValue]= useState(0)
    const [provider, setProvider]= useState(BANKS[0]?.name || "")

    return(
        <div className="py-4 px-4 rounded-xl">
            <div className="text-2xl font-medium border-b pb-1">
                Add Money
            </div>
            <InputBox onChange={(value: string)=>{
                setValue(Number(value))
            }} placeholder="0" label="Amount" type="text"/>
                <Select options={BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} onSelect={(value)=>{
                setRedirectUrl(BANKS.find(x => x.name === value)?.redirectUrl || "")
                setProvider(BANKS.find(x => x.name === value)?.name || "")
            }}/>
            <div className="flex justify-center mt-2">
                <Button onClick={async ()=>{
                    await createOnRampTransactions(provider, value)
                    window.location.href = redirectUrl || "";
                }}>Add Money</Button>
            </div>
        </div>
    )
}