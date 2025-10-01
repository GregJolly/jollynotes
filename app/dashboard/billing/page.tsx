import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export  default function BillingPage(){

    const featureItems = [
        {name: "Access all features with a single subscription"},
        {name: "Log in anytime from any device"},
        {name: "Use multiple tools without extra cost"},
        {name: "Enjoy a seamless all-in-one experience "},
        
    ]

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card className="flex flex-col">
                <CardContent className="py-8">
                   <div>
                    <h3 className="inline-flex px-4 py-1 rounded-lg bg-primary/10 tracking-wide uppercase text-sm font-semibold text-primary">monthly</h3>

                   </div>
                   <div className="mt-4 flex items-baseline font-extrabold text-6xl ">
                        $5 <span className="text-2xl ml-1 text-muted-foreground">/mo</span>
                   </div>
                   <p className="text-lg mt-4   text-muted-foreground"> Unlimited notes for $5 per month. </p>

                </CardContent>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                    {featureItems.map((item, index)=>(
                        <li key={index} className="flex items-center">
                            <div className="flex-shrink-0">
                                <CheckCircle2 className="text-green-500 h-6 w-6"/>
                            </div>
                            <p className="ml-3 text-base">{item.name}</p>

                        </li>
                    )    
                    )}
                    </ul>
                    <form className="w-full">
                        <Button className="w-full">Buy Now</Button>
                    </form>
                </div>
            </Card>

        </div>
    )
}