"use client"
import { Button } from "@repo/ui/Button"
import { InputBox } from "@repo/ui/InputBox"
import { Select } from "@repo/ui/Select"
import { useState } from "react"

const BANKS= [
    {
        redirectUrlName: "HDFC Bank",
        redirectUrl: "https://www.hdfcbank.com/" 
    }
]

export default function AddMoneyCard(){
    return(
        <div className="py-4 px-4 rounded-xl">
            <div className="text-2xl font-medium border-b pb-1">
                Add Money
            </div>
            <InputBox onChange={(value: string)=>{
                
            }} placeholder="0" label="Amount" type="text"/>
            <Select list={BANKS}/>
            <div className="flex justify-center">
                <Button onClick={()=>{
                    console.log("money added")
                }}>Add Money</Button>
            </div>
        </div>
    )
}