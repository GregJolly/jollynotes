import { Card, CardContent } from "@/components/ui/card";

export  default function BillingPage(){

    const featureItems = [
        {name: "lorem ipsum that wonsdfg osidsfn a "},
        {name: "lorem ipsum that wonsdfg osidsfn a "},
        {name: "lorem ipsum that wonsdfg osidsfn a "},
        {name: "lorem ipsum that wonsdfg osidsfn a "},
        {name: "lorem ipsum that wonsdfg osidsfn a "},
    ]

    return (
        <div className="max-w-md mx-auto space-y-4">
            <Card className="flex flex-col">
                <CardContent className="py-8">
                   <div>
                    <h3 className="inline-flex px-4 py-1 rounded-lg bg-primary/10 tracking-wide uppercase text-sm font-semibold text-primary">monthly</h3>

                   </div>
                   <div className="mt-4 flex items-baseline font-extrabold text-6xl ">
                        $30 <span className="text-2xl ml-1 text-muted-foreground">/mo</span>
                   </div>
                   <p className="text-lg mt-4 text-muted-foreground"> Unlimited notes for $30 per month. </p>

                </CardContent>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                    {featureItems.map((item, index)=>(
                        <div key={index}>{item.name}</div>
                    )    
                    )}
                    </ul>
                </div>
            </Card>

        </div>
    )
}