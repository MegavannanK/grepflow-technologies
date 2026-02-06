"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { AppWindow, Smartphone, Cloud, BrainCircuit, RotateCw, Lightbulb } from "lucide-react"

const services = [
    {
        title: "Web Development",
        description: "Scalable, high-performance web applications built with modern frameworks like Next.js and React.",
        icon: AppWindow,
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile solutions used by millions of users worldwide.",
        icon: Smartphone,
    },
    {
        title: "Cloud Solutions",
        description: "Secure cloud migration, architecture design, and infrastructure management on AWS and Azure.",
        icon: Cloud,
    },
    {
        title: "AI & Machine Learning",
        description: "Intelligent automation, predictive analytics, and natural language processing solutions.",
        icon: BrainCircuit,
    },
    {
        title: "DevOps & SRE",
        description: "Streamlined CI/CD pipelines, containerization, and 24/7 site reliability engineering.",
        icon: RotateCw,
    },
    {
        title: "Digital Consulting",
        description: "Strategic technology roadmap planning and digital transformation consulting.",
        icon: Lightbulb,
    },
]

export function Services() {
    return (
        <Section id="services" className="bg-muted/30">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Services</h2>
                    <p className="text-muted-foreground text-lg">
                        End-to-end technology services to power your digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-xl p-6 shadow-sm border border-muted hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
