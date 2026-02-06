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
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "SecureGuard",
        description: "Next-generation identity management and cybersecurity suit.",
        icon: ShieldCheck,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        title: "CloudSync",
        description: "Automated multi-cloud orchestration and resource optimization tool.",
        icon: CloudCog,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    }
]

export function Products() {
    return (
        <Section id="products">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
                    <p className="text-muted-foreground text-lg">
                        Powerful, scalable software solutions designed to solve complex industry problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl border border-muted bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${product.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <product.icon className={`w-7 h-7 ${product.color}`} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <Button variant="ghost" className="p-0 h-auto font-semibold hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-transform">
                                Learn more <ArrowRight className="ml-1 w-4 h-4" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
