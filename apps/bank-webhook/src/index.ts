import express from "express";
import db from "@repo/db/client";

const app= express()

app.use(express.json())

app.post("/hdfcWebhook", async (req, res)=>{
    const paymentInfo: {
        amount: number,
        token: string,
        userId: string
    }= {
        amount: req.body.amount,
        token: req.body.token,
        userId: req.body.userId
    }

    try{
        await db.$transaction([
            db.balance.updateMany({
                where: {
                    userId: Number(paymentInfo.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: paymentInfo.amount || 0
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentInfo.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})



app.listen(3003, ()=>{
    console.log("listening")
})
