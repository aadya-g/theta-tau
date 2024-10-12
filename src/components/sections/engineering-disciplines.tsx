import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconRocket,
    IconHeartbeat,
    IconFlask,
    IconBuilding,
    IconCode,
    IconBolt,
    IconChartBar,
    IconTool,
} from "@tabler/icons-react";

const EngineeringDisciplines = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Engineering Disciplines</h2>
                <BentoGrid className="max-w-4xl mx-auto">
                    {disciplines.map((discipline, i) => (
                        <BentoGridItem
                            key={i}
                            title={discipline.title}
                            description={discipline.description}
                            header={discipline.header}
                            icon={discipline.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const disciplines = [
    {
        title: "Aerospace Engineering",
        description: "Designing and developing aircraft and spacecraft systems.",
        header: <Skeleton />,
        icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Biomedical Engineering",
        description: "Applying engineering principles to healthcare and medicine.",
        header: <Skeleton />,
        icon: <IconHeartbeat className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Chemical Engineering",
        description: "Developing processes for chemical and materials production.",
        header: <Skeleton />,
        icon: <IconFlask className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Civil Engineering",
        description: "Designing and constructing infrastructure and buildings.",
        header: <Skeleton />,
        icon: <IconBuilding className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Computer Science",
        description: "Creating software and solving complex computational problems.",
        header: <Skeleton />,
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Electrical Engineering",
        description: "Developing electrical systems and electronic devices.",
        header: <Skeleton />,
        icon: <IconBolt className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Industrial Engineering",
        description: "Optimizing complex processes and systems in various industries.",
        header: <Skeleton />,
        icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Mechanical Engineering",
        description: "Designing and manufacturing mechanical systems and products.",
        header: <Skeleton />,
        icon: <IconTool className="h-4 w-4 text-neutral-500" />,
    },
];

export default EngineeringDisciplines;