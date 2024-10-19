import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
export default function About() {
    const data: any[] = []

    return <div>
        <div className="w-full">
            <h1 className="text-3xl font-bold underline">About</h1>
            <Timeline data={data} />
        </div>


    </div>
}