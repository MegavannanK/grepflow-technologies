"use client"

import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Globe, Shield, Zap } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-20">
            {/* Aurora Background */}
            {/* Aurora Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute active-aurora inset-0 opacity-30 dark:opacity-20 mix-blend-soft-light filter blur-3xl"></div>
                {/* Hide heavy pulse animations on mobile */}
                <div className="hidden md:block absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
                <div className="hidden md:block absolute top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-[120px] animate-pulse delay-1000" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Apple-style spring
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-muted-foreground/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 backdrop-blur-sm">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-action animate-pulse"></span>
                            Accelerating Digital Transformation
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                            Future-Proof Your Business with <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-300%">
                                Intelligent Digital Solutions
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        From Application Modernization to Agentic AI—we engineer the scalable, secure systems that power modern enterprises.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
                    >
                        <Button size="lg" className="relative overflow-hidden group h-12 px-8 text-base font-bold rounded-full bg-action hover:bg-action/90 text-white shadow-xl shadow-action/20 transition-all hover:-translate-y-1">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            Transform Your Workflow <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-base font-medium rounded-full border-muted-foreground/20 hover:bg-muted/10 hover:text-foreground transition-colors">
                            Explore Services
                        </Button>
                    </motion.div>

                    {/* Floating Icons/Elements Animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-20 sm:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl"
                    >
                        {[
                            { icon: Code, label: "Modern Tech", color: "primary", delay: "0s" },
                            { icon: Globe, label: "Global Scale", color: "accent", delay: "1.5s" },
                            { icon: Shield, label: "Secure Core", color: "primary", delay: "3s" },
                            { icon: Zap, label: "High Perf", color: "action", delay: "4.5s" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-3 group cursor-default animate-float"
                                style={{ animationDelay: item.delay }}
                            >
                                <div className={`p-4 rounded-2xl mb-1 bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors backdrop-blur-md border border-white/5`}>
                                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
