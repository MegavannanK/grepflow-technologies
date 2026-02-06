"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const values = [
    "Customer-Centric Innovation",
    "Agile & Scalable Solutions",
    "Enterprise-Grade Security",
    "Data-Driven Decision Making"
]

export function About() {
    return (
        <Section id="about" className="bg-muted/30">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            Driving Business Growth Through <span className="text-primary">Strategic Technology</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            At Grepflow, we believe technology should be an enabler, not a bottleneck.
                            We partner with forward-thinking organizations to build robust digital products
                            and modernize legacy systems.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Our team of expert engineers and architects specializes in turning complex
                            challenges into elegant, scalable solutions that stand the test of time.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span className="font-medium">{value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-muted"
                    >
                        {/* Abstract visual representation */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3/4 h-3/4 bg-background/50 backdrop-blur-sm rounded-xl border border-muted/50 p-8 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="h-4 w-1/3 bg-muted rounded animate-pulse"></div>
                                    <div className="h-4 w-2/3 bg-muted rounded animate-pulse"></div>
                                    <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                                    <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
                                    <div className="h-32 w-full bg-gradient-to-r from-primary/10 to-accent/10 rounded mt-6"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
