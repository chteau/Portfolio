import Link from "next/link";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/custom/icons";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function ContactSection() {
    return (
        <div className="border rounded-xl p-10 relative">
            <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
                <span className="text-background text-sm font-medium">Contact</span>
            </div>
            <div className="absolute inset-0 top-0 left-0 right-0 h-full rounded-xl overflow-hidden">
                <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className={cn(
                        "mask-[linear-gradient(to_bottom_right,white,transparent,transparent)]"
                    )}
                />
            </div>
            <div className="relative flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Let's work together!
                </h2>
                <p className="mx-auto max-w-lg text-muted-foreground text-balance">
                    Wanna talk and perhaps work together? Shoot me a dm and I'll respond as fast as I can. The best way to contact me is through <b>Discord</b>.
                </p>

                <Link
                    href={DATA.contact.social.Discord.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="cursor-pointer hover:opacity-50 transition-all duration-200"
                    >
                        {Icons.discord({ className: "w-10 h-10" })}
                    </button>
                </Link>
            </div>
        </div>
    );
}

