import Image from "next/image";
import { ModeToggle } from "./components/ModeToggle";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <section className="flex items-center justify-center bg-background h-[90vh]">
  <div className="relative flex items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
    <div className="max-w-3xl mx-auto text-center">
      <div>
        <span className="inline-block px-6 py-3 rounded-full bg-secondary">
          <span className="text-sm font-medium text-primary">
            Sort your notes easily 
          </span>
        </span>

        <h1 className="mt-8  text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold "> 
          Creates Notes with Ease
        </h1>

        <p className="max-w-xl mx-auto mt-8  text-base lg:text-xl  text-secondary-foreground">
        JollyNotes helps you capture ideas 
        and organize your 
        thoughts-anytime, anywhere. 
        Simple, fast, and
         designed for your workflow.
        </p>

        <div className="flex justify-center max-w-sm mx-auto mt-10">
          <RegisterLink>
          <Button size="lg" className="w-full">
            Sign Up for free
          </Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  </div>
</section>

  );

}
