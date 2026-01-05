"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

export interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export interface TimelineConnectLineProps {
  x?: number;
  className?: string;
}

export function TimelineConnectLine({
  x = -44,
  className,
}: TimelineConnectLineProps) {
  return (
    <div
      className={cn(
        "absolute top-5 bottom-0 w-px bg-border translate-y-5 [li:last-child_&]:hidden",
        className
      )}
      style={{ left: `${x}px` }}
    />
  );
}

export function TimelineItem({
  children,
  className,
}: TimelineItemProps) {
  return (
    <li className={cn("relative ml-10 pb-8 last:pb-0", className)}>
      {children}
    </li>
  );
}

export function Timeline({
  children,
  className,
}: TimelineProps) {
  return (
    <div className={cn("flex flex-col gap-4 py-4", className)}>
      <ul className="ml-4">
        {children}
      </ul>
    </div>
  );
}
