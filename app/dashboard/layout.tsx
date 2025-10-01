import { ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../lib/prisma";
import { stripe } from "../lib/stripe";

async function getData({lastName, firstName, email, id, profileImage} : {
    lastName: string | undefined | null, 
    firstName: string | undefined | null, 
    email: string, 
    id:string, 
    profileImage: string | undefined | null}){
    
        const user = await prisma.user.findUnique({
            where:{
                id:id,
            },
            select: {
                id: true,
                stripeCustomerId: true
            }
        })

        if(!user){
            const name = `${firstName} ${lastName}`
            await prisma.user.create({
                data:{
                    id:id,
                    email:email,
                    name: name
                }
            })
        }

        if(!user?.stripeCustomerId){
            const data = await stripe.customers.create({
                email: email
            })

            await prisma.user.update({
                where: {
                    id:id
                },
                data: {
                    stripeCustomerId: data.id, 
                }
            })
        }
}
export default async function DashboardLayout ({children} : {children: ReactNode}) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if(!user)
    {
        redirect("/");
    }

    await getData({lastName: user.family_name as string, firstName: user.given_name, email: user.email as string, id: user.id as string, profileImage: user.picture as string})
    
    return (
        <div className="flex flex-col space-y-6 mt-10 "> 
            <div className="container mx-auto grid flex-1 gap-12 md:grid-cols-[200px_1fr] ">
                <aside className="hidden w-[200px] flex-col md:flex ">
                    <DashboardNav />
                </aside>
                <main>
                    {children}
                </main>
            </div>
      
        </div>
    )
}