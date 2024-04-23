import { Awaitable, Session, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@repo/db/client"

export const authOptions: NextAuthOptions= {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ session, token }: any) {
            session.user.id = token.sub

            return session
        },
        async signIn({ profile }){
            try{
                const existingUser= await prisma.user.findFirst({
                    where: {
                        id: profile?.sub
                    }
                })
                if(existingUser){
                    return true
                } else {
                    await prisma.user.create({
                        data: {
                            id: profile?.sub,
                            name: profile?.name || "",
                            email: profile?.email || ""
                    }})
                    return true
                }
            } catch(e){
                console.log(e)
                return false
            }
        }
    }
}