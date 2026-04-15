/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/custom/icons";
import { useI18n } from "@/lib/i18n";
import type { WebProject } from "@/data/resume";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // Cached images fire onLoad before React attaches the handler — check manually
        if (imgRef.current?.complete) {
            imgRef.current.naturalWidth > 0 ? setLoaded(true) : setError(true);
        }
    }, [src]);

    if (!src || error) {
        return <div className="w-full h-48 bg-muted" />;
    }

    return (
        <div className="relative w-full h-48">
            {!loaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading="lazy"
                className={cn(
                    "w-full h-48 object-cover transition-opacity duration-500",
                    loaded ? "opacity-100" : "opacity-0"
                )}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    );
}

interface Props extends WebProject {
    className?: string;
}

export function WebProjectCard({
    title,
    description,
    image,
    technologies,
    github,
    demo,
    year,
    client,
    className,
}: Props) {
    const { t } = useI18n();

    const demoHref = demo
        ? demo.type === "internal"
            ? `/demos/${demo.url}/`
            : demo.url
        : null;

    const imageEl = image ? <ProjectImage src={image} alt={title} /> : <div className="w-full h-48 bg-muted" />;

    return (
        <div
            className={cn(
                "bg-background flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 hover:ring-muted transition-all duration-200 max-w-85",
                className
            )}
        >
            <div className="relative shrink-0">
                {demoHref ? (
                    <Link href={demoHref} target="_blank" rel="noopener noreferrer" className="block">
                        {imageEl}
                    </Link>
                ) : (
                    imageEl
                )}
                {client && (
                    <div className="absolute top-2 right-2 z-10">
                        <Badge className="text-xs bg-black text-white cursor-default hover:bg-black">
                            {t("webProjects.clientLabel")}
                        </Badge>
                    </div>
                )}
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold">{title}</h3>
                    <time className="text-xs text-muted-foreground shrink-0">{year}</time>
                </div>

                <p className="text-xs font-sans text-muted-foreground line-clamp-2 flex-1">
                    {description}
                </p>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {technologies.map((tag) => (
                            <Badge
                                key={tag}
                                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                                variant="outline"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <div className="flex gap-2 mt-auto">
                    {github && (
                        <Link href={github} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full p-2.5 cursor-pointer bg-red-500/20 rounded-sm hover:opacity-70 transition-all duration-100 ease-in-out flex items-center justify-center gap-2 text-sm">
                                {t("webProjects.githubButton")} <Icons.github className="size-4" />
                            </button>
                        </Link>
                    )}
                    {demoHref && (
                        <Link href={demoHref} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full p-2.5 cursor-pointer bg-red-500/50 rounded-sm hover:opacity-70 transition-all duration-100 ease-in-out flex items-center justify-center gap-2 text-sm">
                                {t("webProjects.demoButton")} <ExternalLink className="size-4" />
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
