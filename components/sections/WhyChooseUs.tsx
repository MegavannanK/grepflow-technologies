"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"

const stats = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Enterprise Clients", value: "50+" },
    { label: "Global Locations", value: "4" },
    { label: "Uptime Guarantee", value: "99.99%" },
]

export function WhyChooseUs() {
    return (
        <Section id="why-us">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-primary">Grepflow?</span></h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            We don't just write code; we solve business problems. Our engineering-led culture guarantees high-quality, maintainable software.
                        </p>
                        <ul className="space-y-4 text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">01.</span>
                                <span><strong className="text-foreground">Proven Expertise:</strong> Decades of combined experience in building mission-critical systems.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">02.</span>
                                <span><strong className="text-foreground">Transparent Process:</strong> Full visibility into development progress with agile methodologies.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">03.</span>
                                <span><strong className="text-foreground">Long-term Partnership:</strong> We support you beyond launch with dedicated maintenance.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-muted/10 border border-muted p-8 rounded-2xl text-center hover:bg-muted/30 transition-colors"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
