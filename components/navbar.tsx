import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-16 items-centerpx-4 justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-primary">
                    <Briefcase />
                    Job Tracker
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/sign-in">
                        <Button className="text-gray-700 hover:bg-primary/90">Log In</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="text-gray-700 hover:bg-primary/90">Start for free</Button>
                    </Link>
                </div>     
            </div>
        </nav>
    );
}