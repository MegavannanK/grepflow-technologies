"use client"

import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Globe, Shield } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-20">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl opacity-30" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-muted-foreground/10 text-xs font-medium text-muted-foreground mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-accent"></span>
                            Accelerating Digital Transformation
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
                            Building the Future with <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-300%">
                                Intelligent Technology
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl text-balance"
                    >
                        We deliver enterprise-grade products and specialized technology services tailored to scale your business in the digital era.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
                            Explore Products
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full">
                            View Services
                        </Button>
                    </motion.div>

                    {/* Floating Icons/Elements Animation */}
                    <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for tech partners or trusted by logic, or just tech icons */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <Code className="w-5 h-5 text-accent" /> Modern Tech Stack
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <Globe className="w-5 h-5 text-accent" /> Global Scale
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <Shield className="w-5 h-5 text-accent" /> Enterprise Security
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                            <ArrowRight className="w-5 h-5 text-accent" /> 24/7 Support
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
