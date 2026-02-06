import { cn } from "@/lib/utils"

export function Container({ className, children, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
            {children}
        </div>
    )
}
