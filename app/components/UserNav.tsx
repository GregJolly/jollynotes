
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { CreditCard, Home, Settings } from "lucide-react"
import Link from "next/link";

export const navItems = [
    {name: "Home", href: "/dashboard", icon: Home},
    {name: "Settings", href:"/dashboard/settings", icon: Settings},
    {name: "Billing", href:"/dashboard/billing", icon: CreditCard}

]

export default function UserNav({name, email, image}: {name: string, email:string, image:string}) {
    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10 rounded-full">
                    <AvatarImage src={image} alt=""/> 
                    <AvatarFallback>Greg</AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                        {name}
                    </p>
                    <p className="text-xs text-muted-foreground leading-none">
                        {email}
                    </p>

                </div>
            </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            {navItems.map((item, index)=>(
                <DropdownMenuItem asChild key={index}>
                <Link href={item.href}
                className="w-full flex justify-between items-center"> 
                {item.name} 
                <span ><item.icon className="w-4 h-4 text-primary"/></span>
                </Link>
                </DropdownMenuItem>
            ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem><LogoutLink className="w-full flex justify-center item-center">Sign Out </LogoutLink>
        </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>)

}