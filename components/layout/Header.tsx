"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { Menu, X, Cpu, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-sm py-2"
                        : "bg-transparent py-4"
                )}
            >
                <Container>
                    <div className="flex items-center justify-between h-14 md:h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <Cpu className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                                Grepflow
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:bg-muted/50 px-4 py-2 rounded-full"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="ml-4 pl-4 border-l border-muted/20">
                                <Button size="sm" className="rounded-full px-6 shadow-none hover:shadow-lg transition-all hover:-translate-y-0.5">
                                    Get Started
                                </Button>
                            </div>
                        </nav>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/20 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </Container>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-[60px] z-40 bg-background/95 backdrop-blur-3xl border-b border-white/5 md:hidden shadow-2xl"
                    >
                        <Container className="py-8 flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between text-lg font-medium p-4 rounded-xl hover:bg-muted/30 text-muted-foreground hover:text-foreground transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight className="w-4 h-4 opacity-30" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-4"
                            >
                                <Button className="w-full rounded-xl py-6 text-base" onClick={() => setIsOpen(false)}>
                                    Get Started
                                </Button>
                            </motion.div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
