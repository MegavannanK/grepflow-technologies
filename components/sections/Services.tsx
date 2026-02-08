"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import {
    RefreshCw, // App Modernization
    Cloud, // Cloud Services
    Bot, // Agentic AI
    Workflow, // Workflow Digitization
    Globe, // Web Development
} from "lucide-react"

const services = [
    {
        icon: RefreshCw,
        title: "Application Modernization",
        description: "Transform legacy monoliths into scalable, resilient cloud-native architectures. We refactor and re-platform your core systems for the future."
    },
    {
        icon: Cloud,
        title: "Cloud Services",
        description: "Strategic migration and optimization for AWS, Azure, and Google Cloud. We ensure your infrastructure is secure, cost-effective, and highly available."
    },
    {
        icon: Bot,
        title: "Agentic AI Development",
        description: "Build autonomous AI agents that understand context, execute complex tasks, and automate business logic to drive efficiency."
    },
    {
        icon: Workflow,
        title: "Workflow Digitization",
        description: "Streamline operations by converting manual, paper-based processes into intelligent digital workflows that reduce error and speed up delivery."
    },
    {
        icon: Globe,
        title: "Web Development",
        description: "High-performance, SEO-optimized web applications built with Next.js and modern frameworks to expand your global digital footprint."
    }
]

export function Services() {
    return (
        <Section id="services" className="bg-muted/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Core Expertise</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            End-to-end technology solutions tailored to modernize and scale your enterprise.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            className="bg-card border border-muted p-6 rounded-2xl hover:border-action/50 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-action/5 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-action group-hover:text-white transition-colors duration-300 text-primary">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-action transition-colors">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    )
}
