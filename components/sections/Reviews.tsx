"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Star } from "lucide-react"

const reviews = [
    {
        name: "Sarah Jenkins",
        role: "CTO, MIB Industries",
        content: "Grepflow transformed our legacy infrastructure into a modern, scalable cloud ecosystem. Their team's expertise is unmatched.",
        stars: 5,
    },
    {
        name: "David Chen",
        role: "Product Manager, MIB Industries",
        content: "The attention to detail and performance optimization delivered by Grepflow exceeded our expectations. Highly recommended!",
        stars: 5,
    },
    {
        name: "Michael Ross",
        role: "Director of Engineering, MIB Industries",
        content: "We needed a partner who understood enterprise security and rapid development. Grepflow delivered on both fronts perfectly.",
        stars: 5,
    },
    {
        name: "Sarah Jenkins",
        role: "CTO, MIB Industries",
        content: "Grepflow transformed our legacy infrastructure into a modern, scalable cloud ecosystem. Their team's expertise is unmatched.",
        stars: 5,
    },
    {
        name: "David Chen",
        role: "Product Manager, MIB Industries",
        content: "The attention to detail and performance optimization delivered by Grepflow exceeded our expectations. Highly recommended!",
        stars: 5,
    },
    {
        name: "Michael Ross",
        role: "Director of Engineering, MIB Industries",
        content: "We needed a partner who understood enterprise security and rapid development. Grepflow delivered on both fronts perfectly.",
        stars: 5,
    },
]

export function Reviews() {
    return (
        <Section id="reviews" className="bg-muted/50 overflow-hidden">
            <Container className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground">Trusted by industry leaders worldwide.</p>
            </Container>

            {/* Carousel Wrapper */}
            <div className="relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-muted/50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-muted/50 after:to-transparent">
                <div className="flex w-max animate-scroll gap-8 hover:[animation-play-state:paused] py-4">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[450px] flex-shrink-0 bg-card/50 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                        >
                            <div className="flex gap-1 mb-4 text-accent">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6 leading-relaxed italic text-lg">
                                "{review.content}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{review.name}</div>
                                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{review.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
