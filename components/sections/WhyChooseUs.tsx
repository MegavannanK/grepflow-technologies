"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"

const stats = [
    { label: "Successful Migrations", value: "50+" },
    { label: "Enterprise Partners", value: "20+" },
    { label: "Uptime Guaranteed", value: "99.9%" },
    { label: "Client Retention", value: "100%" },
]

export function WhyChooseUs() {
    return (
        <Section id="why-us" className="bg-background overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Partner with <span className="text-primary">Engineering Experts</span></h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            We bring a disciplined, data-driven approach to every project. We architect solutions based on proven patterns and modern best practices.
                        </p>
                        <ul className="space-y-6">
                            {[
                                { title: "Transparent Methodology", desc: "Full visibility into our agile development process, from sprint planning to deployment.", color: "primary" },
                                { title: "Business-First Logic", desc: "We align technology with your business KPIs. If it doesn't add value, we don't build it.", color: "accent" },
                                { title: "Long-Term Reliability", desc: "We write maintainable, documented code that your customized team can support for years.", color: "primary" }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-4"
                                >
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-${item.color}/10 flex items-center justify-center text-${item.color} font-bold text-xs shadow-sm`}>
                                        {`0${i + 1}`}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-base mb-1">{item.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 120 }}
                                whileHover={{ scale: 1.02 }}
                                className="bg-card border border-muted/50 p-6 rounded-2xl text-center hover:border-action/30 transition-all shadow-lg hover:shadow-xl group"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">{stat.value}</div>
                                <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover:text-action transition-colors">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}
