import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {

    const {isAuthenticated} = getKindeServerSession() 

    return (
        <nav className="border-b background-bg h-[10vh] flex items-center">
            <div className="container mx-auto flex items-center justify-between px-4">
            <Link href="/">
                <h1 className="font-bold text-3xl tracking-tighter"> 
                    Jolly<span>Notes</span>
                </h1>
            </Link>
            
            <div className="flex items-center gap-x-5">
                <ModeToggle/>
                {await isAuthenticated() ? (<LogoutLink><Button>Sign Out</Button></LogoutLink>) : (
                <div className="flex items-center gap-x-5">
                    <LoginLink><Button>Sign In</Button></LoginLink>
                    <RegisterLink><Button variant="secondary">Sign Up</Button></RegisterLink>

                </div>)}
            </div>
            </div>

        </nav>
    )
}