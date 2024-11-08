import { LinkPreview } from "../ui/link-preview";

export const RecruitmentLinks = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen py-20 gap-20 container max-w-7xl mx-auto ">
            <div className="w-full flex justify-start">
                <p className="text-neutral-500 dark:text-neutral-400 text-2xl md:text-4xl max-w-3xl text-left mb-10">
                    Follow us on{" "}
                    <LinkPreview
                        url="https://www.instagram.com/thetatauxi/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-500 to-yellow-500"
                    >
                        Instagram
                    </LinkPreview>{" "}
                    to stay updated with our latest events, professional development workshops, and brotherhood activities.
                </p>
            </div>

            <div className="w-full flex justify-end">
                <p className="text-neutral-500 dark:text-neutral-400 text-2xl md:text-4xl max-w-3xl text-right">
                    Join{" "}
                    <LinkPreview
                        url="https://www.linkedin.com/in/thetatauxi/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-800 to-red-500"
                    >
                        our professional network
                    </LinkPreview>{" "}
                    to connect with alumni and industry professionals across the country.
                </p>
            </div>

            <div className="w-full flex justify-start">
                <p className="text-neutral-500 dark:text-neutral-400 text-2xl md:text-4xl max-w-3xl text-left">
                    Discover{" "}
                    <LinkPreview
                        url="https://thetatau.org/"
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-500 to-yellow-500"
                    >
                        our national organization
                    </LinkPreview>{" "}
                    and learn about our rich history of professional excellence since 1904.
                </p>
            </div>
        </section>
    );
};
