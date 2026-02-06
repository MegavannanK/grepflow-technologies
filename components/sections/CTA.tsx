"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {
    return (
        <Section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Transform Your Business?</h2>
                    <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Let's discuss how Grepflow Technologies can help you build scalable products and accelerate your digital journey.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="secondary" className="font-bold text-primary-foreground bg-white text-primary hover:bg-white/90">
                            Get in Touch
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white">
                            Schedule a Consultation
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}
