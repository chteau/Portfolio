"use client";

import { SKILLS } from "@/data/resume";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function SkillBar({ proficiency, delay }: { proficiency: number; delay: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: isInView ? `${proficiency}%` : 0 }}
                transition={{ duration: 1, ease: "easeOut", delay }}
            />
        </div>
    );
}

export default function SkillsSection() {
    const { t } = useI18n();

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold tracking-tighter">{t("skills.heading")}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {SKILLS.map((skill, index) => (
                    <div
                        key={skill.id}
                        className="border border-border rounded-xl p-6 flex flex-col gap-4 bg-card/60 hover:-translate-y-1 hover:border-primary/50 transition-all duration-200"
                    >
                        <span className="text-3xl">{skill.icon}</span>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold text-lg text-primary">
                                {t(`skills.${skill.id}.name`)}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {t(`skills.${skill.id}.description`)}
                            </p>
                        </div>
                        <div className="mt-auto flex flex-col gap-1.5">
                            <div className="flex justify-end">
                                <span className="text-xs font-medium text-primary">
                                    {skill.proficiency}%
                                </span>
                            </div>
                            <SkillBar proficiency={skill.proficiency} delay={index * 0.15} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
