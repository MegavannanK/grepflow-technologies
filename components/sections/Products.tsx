"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { BarChart3, CloudCog, ShieldCheck, ArrowRight } from "lucide-react"

const products = [
    {
        title: "FlowAnalytics",
        description: "Real-time data visualization and business intelligence platform for enterprise.",
        icon: BarChart3,
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        title: "SecureGuard",
        description: "Next-generation identity management and cybersecurity suit.",
        icon: ShieldCheck,
        color: "text-accent",
        bg: "bg-accent/10"
    },
    {
        title: "CloudSync",
        description: "Automated multi-cloud orchestration and resource optimization tool.",
        icon: CloudCog,
        color: "text-primary",
        bg: "bg-primary/10"
    }
]

export function Products() {
    return (
        <Section id="products" className="bg-background relative">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Enterprise-Ready Solutions</h2>
                        <p className="text-muted-foreground text-xl leading-relaxed">
                            Pre-built, scalable platforms designed to accelerate your digital transformation.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            className="group bg-card border border-muted p-10 rounded-3xl hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-center text-center"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${product.bg} text-white shadow-lg`}>
                                <product.icon className={`w-8 h-8 ${product.color}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed text-base flex-grow">
                                {product.description}
                            </p>

                            <Button variant="outline" className="w-full border-muted-foreground/20 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all group-hover:scale-105">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </Container>
        </Section>
    )
}
