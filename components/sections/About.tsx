"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { CheckCircle2, Server, Lock, Cpu } from "lucide-react"

export function About() {
    return (
        <Section id="about" className="bg-background">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Bridging Legacy Reliability with <br />
                            <span className="text-primary">Modern Agility</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            We don't just write code; we solve complex business problems. We help enterprises navigate the shift from legacy infrastructure to cloud-native, AI-driven ecosystems.
                        </p>
                        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                            Our engineering-first approach ensures that every solution is secure, scalable, and built to last.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: Server, title: "Scalable Architecture", desc: "Systems designed to handle millions of requests without compromising performance.", color: "primary" },
                                { icon: Lock, title: "Security-First Mindset", desc: "Enterprise-grade security protocols embedded into every layer of development.", color: "accent" },
                                { icon: Cpu, title: "Future-Ready Tech", desc: "Leveraging the latest in AI and Cloud computing to keep you ahead of the curve.", color: "primary" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/30 transition-colors border border-transparent hover:border-muted/50"
                                >
                                    <div className={`mt-1 bg-${item.color}/10 p-2 rounded-lg text-${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-lg mb-1">{item.title}</h4>
                                        <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full opacity-30" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative bg-card border border-muted rounded-3xl p-8 shadow-2xl overflow-hidden backdrop-blur-sm"
                        >
                            {/* Abstract Code/System Visualization */}
                            <div className="font-mono text-sm leading-relaxed opacity-90">
                                <div className="flex gap-2 mb-6 border-b border-muted/50 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="space-y-3 text-muted-foreground text-xs md:text-sm">
                                    <div className="text-purple-400">interface <span className="text-yellow-300">EnterpriseSystem</span> {'{'}</div>
                                    <div className="pl-6">security: <span className="text-green-400">"ZeroTrust"</span>;</div>
                                    <div className="pl-6">scalability: <span className="text-green-400">"Auto"</span>;</div>
                                    <div className="pl-6">ai_integration: <span className="text-blue-400">true</span>;</div>
                                    <div className="text-purple-400">{'}'}</div>
                                    <div className="h-4" />
                                    <div><span className="text-purple-500">class</span> <span className="text-yellow-300">Modernizer</span> <span className="text-purple-500">implements</span> <span className="text-yellow-300">Transformation</span> {'{'}</div>
                                    <div className="pl-6"><span className="text-purple-500">async</span> <span className="text-blue-400">deploy</span>() {'{'}</div>
                                    <div className="pl-10 text-slate-500 italic">// Deploying to multi-cloud...</div>
                                    <div className="pl-10"><span className="text-purple-500">await</span> cloud.scale(<span className="text-orange-400">Infinity</span>);</div>
                                    <div className="pl-6">{'}'}</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
