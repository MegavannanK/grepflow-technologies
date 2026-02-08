import { cn } from "@/lib/utils"

export function Section({ className, children, ...props }: React.ComponentProps<"section">) {
    return (
        <section className={cn("py-12 md:py-16 bg-transparent", className)} {...props}>
            {children}
        </section>
    )
}
