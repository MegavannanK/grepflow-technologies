"use client"

import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send } from "lucide-react"

export function Contact() {
    return (
        <Section id="contact" className="bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-30" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
                            <MessageSquare className="w-3 h-3" />
                            <span>Get in Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build the Future Together</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Start a conversation with our engineering team about your next project. We are ready to help you scale.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-xl border border-muted">
                                <div className="bg-background p-3 rounded-full shadow-sm text-primary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground">Email Us</div>
                                    <div className="text-lg font-semibold text-foreground">contact@grepflow.com</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card border border-muted p-8 rounded-2xl shadow-lg"
                    >
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" placeholder="Project Inquiry" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                            </div>
                            <Button className="w-full h-11 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
